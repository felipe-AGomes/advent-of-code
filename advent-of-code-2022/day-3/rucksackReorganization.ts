/* --- Day 3: Rucksack Reorganization ---
One Elf has the important job of loading all of the rucksacks with supplies for the jungle journey. Unfortunately, that Elf didn't quite follow the packing instructions, and so a few items now need to be rearranged.

Each rucksack has two large compartments. All items of a given type are meant to go into exactly one of the two compartments. The Elf that did the packing failed to follow this rule for exactly one item type per rucksack.

The Elves have made a list of all of the items currently in each rucksack (your puzzle input), but they need your help finding the errors. Every item type is identified by a single lowercase or uppercase letter (that is, a and A refer to different types of items).

The list of items for each rucksack is given as characters all on a single line. A given rucksack always has the same number of items in each of its two compartments, so the first half of the characters represent items in the first compartment, while the second half of the characters represent items in the second compartment.

For example, suppose you have the following list of contents from six rucksacks:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
The first rucksack contains the items vJrwpWtwJgWrhcsFMMfFFhFp, which means its first compartment contains the items vJrwpWtwJgWr, while the second compartment contains the items hcsFMMfFFhFp. The only item type that appears in both compartments is lowercase p.
The second rucksack's compartments contain jqHRNqRjqzjGDLGL and rsFMfFZSrLrFZsSL. The only item type that appears in both compartments is uppercase L.
The third rucksack's compartments contain PmmdzqPrV and vPwwTWBwg; the only common item type is uppercase P.
The fourth rucksack's compartments only share item type v.
The fifth rucksack's compartments only share item type t.
The sixth rucksack's compartments only share item type s.
To help prioritize item rearrangement, every item type can be converted to a priority:

Lowercase item types a through z have priorities 1 through 26.
Uppercase item types A through Z have priorities 27 through 52.
In the above example, the priority of the item type that appears in both compartments of each rucksack is 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s); the sum of these is 157.

Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types? */

type RuckSacksInput = string;
type RucksacksObj = {
	leftSide: string;
	rightSide: string;
};
type BadgesItemsProps = {
	badge: string;
	value: number;
};
type GroupBadgeProps = {
	[key: string]: {
		badge: string;
		value: number;
	};
};
type HighestValuesOfEachGroup = {
	group: number;
	item: string;
};

const rucksacksInput = `vGFhvGvvSdfwqhqvmCPnlFPnCNPcCFcWcr
ZbWZDMgsTHsrNNLJcJnsJl
HbBWQgZVZZBzbgZphwjqpmmVfdGmjG
vvCJLGnthChvtrvCCnRbTRqRPRBtbTRfPRRl
djZSgHNNwjqcdWlbcbfc
pFgMSfpMfzMDZFSgSjGJQQnCvMCVLnnJQLGC
gVhQWQpcWZVwwHVvFvnnnnDFdL
lzbPlztjltztzSjfGcPdTHLTHFCnnHCLndFGGd
jsNbzbczclttSlfbqlljRQMJRMMpJwRZhspZgJRM
hLJvfGcNDttSGvJtvSSJcqbqFBBWbjQqDrqbjDDjjb
lTswlzZdssgFpdPwZpMQnCjngCCjWBQBWWQqng
PRZMpzPZTdVZTfJvFvLFRctJcf
JHbQtHVHHLLbTJmmZddgdgwhllMNhhhTgg
spqpNGDjDPMhCFChMj
DBSDDGnpSDsDWqWczcvSqWvsBtJJLLZrRVZLJRbBZNVrBHrV
GwGhfhPhpHccvwSwrTsmsCjDmqTfbDqjss
tQntQcNRJMFnnVQFFctJqCsRmsTjjbDqDlTqTbWT
NZdVBZZNFzMFNNNvGprZcLGPGrrpcP
SvCPLrrlCSvZLrCPPBNPRvNLQBbpmbdggQTTfpfQgpgTqbbb
HVjHwMVwWtdMGwtwMwdhDFgbJgJqTmFMfFfmmfTTpq
whtHVcjDtHWtsWdwVGVHthDPzRrNSsCRLrLRlZNzZSNzNR
rjrlCCBtbtntwPPt
FvfJHqBJQWWgWgWLwnMwMLbzvhwTTp
WqHgWqBFgGfQgHfVdQFfVfrDllSsRSDmVmRCZZmSSSSZ
gjnppCgGHNPrqqmFnnbr
tGltVlJRtLRlrqcJcqZDqBJc
VvhLlvWltWdVltRTLTfgwSjGNHhggQNQNjps
HDWjCNfQjmwgWhcwPPVbZGcpMb
sFltFBRRSRJBSSsBlSSnRLPZbVGMVPZpMpPZpcMrFZMc
BLTBsstlqBRRBSvJJBsHdgdDNHCQHvbdCjQNNW
lRGzWLZNFwJVbVVGcJ
HqqpjPvHQnJgVgTnbdTV
rVvjBQHQrQhCrzlzWrRlDZ
jZjTZRSjZnhGZhzGnG
HbnPHrCbBDMnhcrVLWWLLWWg
MBwbCNDDptwNMttjdSnsqSRSFFdjtj
bSfvcsNsDdccHHQm
ljrlplvBhDHDHHHHJl
jgpzhrzRrvhFRFrzFnWfZtTwSWZPbbqNbsTqsW
vvCTvcDzHcgtvWjvcDcvgBCgwTdPFPpwpwmTSwwmdPwZpfZh
rNLMNVqLGNrVsRNJNsPnGnnfnpSFGdfddndd
VPQsMbVsPbzzvgCzgv
wPsrqprHQQZsChZn
cjgFLwWDlDltfLmTCnmWCnZZChCQ
FccccSLGFwjVlfVLLtgdSPSpMpBMdMBRRdHdBp
mQQcpmCCprrfLQqZVGqLGv
PtsJdsMtTTTvFqLTnnqbGZ
HjldthsHWztJzstZhBcHDDgpNpCpmrpgSD
lCmhDljDJgWggcnh
LdQrbdTDQGfGLPdqqFrHwRJcWRHgHBWHBJ
sLqsGtDqdGQfSTsqtfqqVMzjCzlvllZljNpCsMMl
CfLCZCCqqHlhSSrrtpRjpL
mWQbnQZVTWwNdwmDSbpbrFptjDrjRj
PJWVnTWPVnnclqqBsCCZHP
tqvtbNCgqJSgZgZvSncrrcGjBGhcnVcR
DswGQQQdRcjBnRDn
sMdlFMQQpfZbvlNtZGgN
RMlPllHtrlrlcZLsZfLcfwdDGD
QppnQhTBgwQDJsGzLQ
gTjnmjvphDSNMbtMbtMRHNVr
RHHcChrVVChCWQmRnMZmnmbTbGmFnqTT
gpzpfpszDwvDDNdwjdstnSMMHGMqvZnFTTZqbq
DsDdpfppwHsgJdjzfdDjdssLPlRccPQQrJcchPQWWQRhlQcr
rsrjQjnRnQZZqMmMMVqs
WTSTdvJLvTGJTGCMGvzBBpVVqqFVzBzVmf
tTSJhGLJbJhLJRRbHPQbnHHMrl
GGgMgBJHWHhLWMhWhgfrhgWLzmsmlzTtzHmsmlszRtszRVlT
bvScppfcQfcQSFCQpnPqwwTdRTvmzVssvswtddsv
ZDpqnPbQbPPnQbFbfSPSqbQJhGrjgMZBhWLrLrBBBBJWhg
hQCCGCNhDmGFJsTt
fcggBBpvBSrtsRTpRmpD
wflWlBlfnvfWWgMNPPLhPnzhPmLQ
pcGGTvVpcQLLzSPPPpVBVQwngNqgsJqgJgqSngsJMqJg
RZDFGhtCDGmWfWsNdwJhnMgwswqJ
ZCGjRGjZllFGHvvcTPjPTQpB
FDVsWrFZnnnfNRJdgBBBMLsJLH
wcThcTphvCThwTlblpzwGlpLRgHJWLgHLBHdHWJLBLWR
mwcbPmClwlzlwvvbTmWbQSjZmZSrDnSNVZfVFnZf
tMlttlFRSrcSFcwQSRwSzrMMPPGGPGLWgNfTNTcLPNPGBPPG
pbZVCDTqnCjVDHnHVnhBPBBbhBhbhgLgmWLh
qZCJZJqqjjCVvvRQltlzTrJtMMMw
QvvdBDdMbdFFJrMMjjmjCfCntC
lHTPsNLPcfVZLnfj
GgsWpHPpTPWpNsGvgdnDbQRQFRbdQg
jPNwllsVZjhslSjwGShZMdJDmmdmWLtMDDPHMPFd
QbvpDrbBrtMbbHJmcH
vznvzBRpBprQBqQZjNswwZDnSlGjZl
PdNTzLQPLrVMzGcMtt
FsSvDrvmrwDggHGwgV
vlpZpZmfnmFTlTWJWdbrdh
mZmnggMTSJrrmnrbmTbngJMtwPvwzzRvPGhQdGZPGPLvGvRd
FFVBNHVlFlDfCsWwLwPzzhGPCvzhQv
qBHLsDcfqFfDDfsFLNcNNBFsrgpMpnJSbnmTnrtmbMSqnpnr
qjBNwBPNPspqddssbsTsMDhTDrThQb
gvzZSZzFbgHnrHmn
fcvfZcRSZFGfZcvFbGttcPfpVjWVwqBqdwNdwNNpqV
RrTmtTrqznrnRCSqJrWlWDbhWVnfVDVWdclV
QBBgHQGvHHQswLHQQLGLHdLhfhlZZFlsscVDZfWfDhVlZZ
dLBMPpGPjLHPHPBHjjgQjHQztSJRztmrNCSCmSpmprrrrz
HHWJgjjsJrPBWBjgWgDvbbvtbNDNVtttMPPp
SnLTlhhNSntRVVLFVbbb
ChqdcNTNqqJCrQrQrrBC
BvfLLngFLDrrlDFDDnGmGlmzqzdGqMMWWwWW
RVsPbsbVZbjctccCcsCSPmdNqMqMWddwqVzhhNHwHd
tcsjPZRctZTSbbtSbtsSjZznnJfJBrfJgLvJJDDBvpTrgp
LJJsNdtJQtbWRJQttjGhjVnjcnzcsczGqj
MDPPlvCwrTlZfMMvTlPTdVcVhVVjchSBrjccSnnq
lgZCvTTZfMgHLptdRgmR
gCDrJRNgJDZRCwMgqGbtVVjTjlFbbTtR
mccnfcnSQScdvdcQQQpWdnWSjPqTbFFlbPqbPVGNjTPjtN
NnzmpWmBBzzpzDgwhDghrZrw
wcbVDBQwVBFQLFQDQcqQcLcJfpHJjmljGgMHfcfgGgjf
PtnWMtSnlgJmWWmm
nThPtRnzntstvrtRPqDFLMLdDwBBFLQDBT
zshqnVqTwqHqZQgZDSZjpFjFFF
PsBRvttdcgFFBSmc
GlPsbLtrvrrrtJlCTnVTlwwfnhwVqH
CvVVnFwWZnZwJZMNlCMNMpbMrrQG
cpghqzqqtzbGMjTNclGN
PqLBsgqBsSfBffShVmvRVwWsFpwZVpsn
LzsLSScvscqNdGdgddQjCDbzhpCDbRbhDpDDwDwt
ZlMBBBnlMFVFHVMJflJjJBfhRnCbCDpRttRPDCbWpCRbpW
mlrFmJrmscNGmsjm
FqQjLRjfvTFvlPHHNPMBDDNDPR
chWptpcWTzBPMsMMMBHW
zcJghwJZpZcgnctccdzzpGQrbQbblFFlTCCFTbdCFCFq
QcwNpCcQzpwtCGPPPnrGrfHfvN
FgjhhhjMVFVjqRRqDBVBqvMZvdrHnPZWZvsnZHdWnv
ShBFhDVghhTBgBBFRRgRCmCPCcpPbwCmLTcCmbpb
ZzlzsBzZnWnsBhFRvfvvLfWqfvMv
GgQGjjddHHPwpHpTGjPdHMvtvwJqLtJRFlRFRqMwLc
dgbbdjpGGgTHGGgQgdpmpgblrBrhrhCBSSznChsVhBsmNB
PhSwPdnpsmSWWcjjDFNqnc
GJGCTLbTZTrlfflVLFchHDHHDFcVVN
RhlhrllQZhCsPvRBvMtSvw
GVgnrgTWGVGjLVjWSpvvNmPTmpQmzvhf
tBbBDsFtszzSSbPZbh
BqlqdcqSJtFMdMjWrnGCWRrWGG
sJVJsQhMhPPSQMwdHRmmsmmwRmsr
zLFjLDTBFNWWwrqrffldlRdFRq
BLjzjTpzLpzWGTbQpMJvVMQwQhhMQM
RqSztDRhJDLmRMLlfvsP
dMdMMHZCsnbdvmbP
VHcZVVcZTwTQpgHQcgFMFBpDDzBqqqDhqJSjSjJjSD
rdMnMGjdHhfnjqWWDJPpGWPtvW
PTBSQSSzZSBSCzQFFSlZTFSvcZpWWcJvtJppvZpLLcDVcv
sgQCsBmmlFCPFFzTgTBgdNnrNndnMrrrfbrNjf
bpZdggTjHbgLglpHjldvHpjdhTVzmhzzzFPzmhFsFQSFnhhN
rPCDBcCCMPGcWDNNWQzQQSNQnNzQ
fCCJtDtGGGfGBtGqBrrcfRBcvPwpLgdZZvHdljvqpvdwbpvl
qpmsNldnlHlCqQlHsHNHwJpJMtwvvvjMvfWjpDtt
TccVBScrzBzzTGPbVTPQhWjfMjwwRtJtjMtWDWWfDS
FQFbzBGczGBFLnFmmqsCLg
qpblblvpvJzStJDrhrnGrdhDfFqf
ggNQNwBgmTcgCBTBTQQjNfDCnZRRRrRGCnrFfdnhrC
mjVFHQTHNjTwcmpzJzHltltbSssS
WChWmdcmzndhFcZrrbvrVMVssj
NQLDlDplpSJGpLfRRMZVBBGjVsGbbjbBZsGv
QNDfNqlpLgSfNfNgNfpgpqwndwWwnCCnnTFMdHndzn
ZGRPTngTZMSGMGnhSgRjQHsPbqjmsWHQCQWbNN
BFLLfpzVDBfDdlfQcsbVcNmQsqqbcC
zFvdplLDLtzFmrrwMMtTrShZ
nTdmnVCGqTsSBTqv
HlMPwMlHfPSfBBmFBfSL
trHHwRHRwMHPMJQJHnDhbdRhdpCZmChNnd
lwHWjzplvHqWHGsMLsLwLfgdfLdg
tPJNPQmQmSGcTtFmctGmSCBgsBBRbLBRVdLVLCBBLgVf
FPtTPQNPrPPQctTcNPSQJJPDjlzplnGDDjWWplWHhGvpnr
jwvvDbvsRsrrjrfvfrrZsPpCpmPJJPqlqWmzRJRTqq
HdLttdSQHdLHMMtNdLMSTtHpCmPplWhCzmzmPWlJhlNplP
BTSLtLLQtnVZDnffbwfw
snvQdrtrQprWpgmGLp
FhzwlwHccBcljFBSDmHmLpgRmPDCffWL
zFhllqjczzwJqqSqlZMsvJgVNMTbssVNnQbb
dLZHrWjWPFZWZnPjZttjddFnMDVMGJMQqvMVGVRVpjVpGVvv
zhzTwTlfTwCsShSgNhfzsQQqvMQStQMDGJJGvGQVvq
TTwCBfsfBwhzwTBCzlmHZdLmBBbtLnLbFnnF
BhBRLFmlBlmhgShHmhSlZlFgvbQNwvcsvMCcsQCwNQvNMsBw
ttWddDjrfjDcssscDbvH
jfjfPWdzdfjdnWpjtrzqnhmJGJFhSJRHSmSmlqlHmq
QvJTgvsvghHRHHNbZvNZTRSzBBCLrDqzrfDDtJSqSLBC
cPPwdcFFPDwfFrBrFfFfrC
nppwdplpRvllsgDH
BGLLWLLwHVZwHnNhwsMsrqMqhh
STlTpDpmjzmjjjgccqdsbNbBhlNnNMhsqs
pjmgjfSDSzmSgFzRZQfRRZLBVLVtZZ
WHjddztMtVLNNFFTmbFPFPRw
bJnvpQfqccQJZfpcbvCphcFGDPFGRwDGDDGwGsmPFnPF
rvffQJZJqrpZCJZJQrQpvBvStlSWSzVSWBbzBLzjtjWWWj
SJFMSMGSDLTsFgHvHL
mNzRrRRzjzqqgPHvLTHjlvWg
ZLbRpRnRnCrbmnmrRRNnwbGfMwDwfDDdSVMdVJdd
nsqTbhcDssPsPWsnchPJMSTSMmJMwTSTCJJfJw
DHvFvvdHpvpGFHDMVVJVplCCVpggCl
RdQjtvHtDQNGsZqzcqPqbNcq
GFzRjczzQJnLjJvvTj
mSfHrNHDzHDrDSSSBvTZLTNqWJWBWLlv
PfgCmfPzDVrtHsddVMsRFcVFQM
sfBgfBfBsHBHFGhsqfjgQZtQQMdZgbZQptbM
rNLRSzRTrrvvLSTWGpjpNZdQPtGtMdNM
wvSWLwzTGTCcwwwJwvwcrcRcVfFBqhhVhDqhBllBfFqBCDCs
LbTpDTcMTSzzMLhScnDnSppNQwVNZFBVnFsrwQQZrQrQrN
tJtJCRlGWljGWCtjJZVPsJBsVwQmrQNN
fvHRftqjGfWGwtfGqvLTzDTzzzchSbMDTd
JJhWZlhqLDHtBDrqrB
bwwmfrSmbmFjVSFQwSdpDvGdpPnRvDtHpGtGPG
VgFfcSQfFgmLLrNThllTZc
QmfvrpnvrrJGnBSCFTBMSWFS
NVMggbVPzCTgDFDD
NRqHRZjVRZdRVdZwNPrMrchGhGpcGfvhQlHJ
nlBdCldndlZTttSSBBccPfGWLLHcTTcWPbbW
jpsFzFmzDzNzDGChGcGGmPQHQf
CNzqvvVJNFqvgRtlqRtdnwSZ
MJtDbNHDDpmVPJVzzjLm
RslhvlfRTWvWWRwfllSZngmggznjSPznLjmSnz
TlhffRwWQhChDqbBQLFHqNrb
HWnmSbzflWltlzLfWWDzjMBvCjjCTCgcMvzBBB
qRRRZJwhZFGdRNfghVjMVVgfcghC
QFFqwNNNwdNZZpqqZfnDSHmmlDLtWtHWlQmD
JrFdNTTLRBTJrFVrBNdVLFBdlHbzQQsQzbPJtpbtltWsHbQw
gZffDfMlCfjCSqMcpHPWHszstzHjQwpb
GMnvfGlfvSqvcMMDgDDcfnqSVFRdmTmVdNBTdmRmBFVnLLBT
ZvRHtDcZntLZssMssQBrMdnC
jglqlVdlbqgVWjJMbrrBCpmQBBfrpm
GqVVPPjPNjFVllNjJjFDvzTLZRvcLRLvTGdGDv
fDVzvVfzzZPMsMbb
LHtBwLBdhFgdHLLthRwFGGMsmrHMmmbZSmqbMGGG
bblRwbTRlllfVQnCQn
fVZzjRzpzpVCRPZhVWQvvLsWWWFQlmjWmG
JDHgJdtwbZqJqsWBBDLlQlvLms
cHHtdbqwrqbbtSbTgSTcVCMRZnRRVNhVPNMPpfMc
fCMPBBdpMpsqMssQccnV
TlwGWDjDZHLjZHHlLGmnlnNcRllsJcqtsJRV
ZHhZHThLLrGwjDDjLwGWWWSjPpbpzrvBFBFdBBbqvCbpFfpg
bvDfDPtCVfFFVdWWpmLRmzWzzdBW
jgZTghhjrGrsswrsghHrlgTGzSRmMLwpJMSMzWLLWRzpRRSc
lpjTpGHlpsNGTHllHrCFnDNPtVnvfQtQtQNP
BwlQcwZBwwwQNqJTrrsRGCDTNt
bMpVPSfRvCbCtTqsCs
dPSRfRpPPjjmLMgZBZBLZZwFQnZn
TsVfggTqVnsLVTdTpmDdRhwPRtPRDRwD
ljHBSWZvvFWvBFPppnQPwnpmzR
MSHSjbBclBSjccLJgqgnLVqTbsTT
zncfVgRzVJgnTfVqNHvZJZNJNMpHbdvH
PCBpsLjPPmMGdHNdHBHZ
jSLlrhLPDWLrPrDCLPCfnpzcVRFcRTnlVncntT
ccvSgjHtRjcjSvjvSrBjzSHHwnJPbgwPPZVVVZnPpZlpwnlT
ffqNqGGsGWqLTNqZwdndPnnJJpZVJW
sNmqhsCMQsMTmjrcmrHrRj
gWWWzNVJDwDzVWVDGbGNnhTnHLsmhmhfsQTNSmHd
vtMPZvrZvqtqBHljrqSnnmTfLfdnQsjhjmhL
MMPZPBqZCrBtvZcrBlDbGbbbzHJCbbRwgwDz
hGSRhsMswhcNNGwhwncMnCqCJNrHJPJJrJtCJdqHJm
BgVTzWBdTfCmfCJH
dlbVFvvWVZhSRQDMnlhc
WfpzBZmgJlQVGvWF
wHSbrHwmccnrmrHsClGqFGbQjQjjQJQQGv
SHPwwsRcrrNtrNSsphmZLzpfzhghZPdD
DFDPRpmgbPQtmgBBQDDNJTMMBZsqsZGqGZTGCGSqWG
fVvVVLcJVzlvzhqfSTCsZsMGMHqq
zJdrrdnzcLlwczwbQmQngRDQPbtDpQ
HDZZrpFqwRrQfBqhjjlVlQ
czTgvvWPNgPGcTlsQflCVshClC
PgNvtSJNvGVMMzNzgGvPGGLHFDdFdmZSZRdDdRrmpFwL
SVHNVFVPBHJqHhgFCgzLmCwppm
DvDdsGZljDlfdZnjnnZGMzLpRgLfMCLmzfPLhmgp
jZDZlrvrZTrTrTQrDsjslHNJqtWbWHbqbPBWNVQWBJ
NmGGBdWWJDJTTZHm
hFVhcqFjncpcppSjqfppqDvzDDDbbDZvDZZbHfJgvJ
jrPqnnHnqSPwPGWPdWst
BfhbwMwbbPbHPPPlrdJjrlMJLrJVTd
pnQnGnWDjnJdlJCh
qshsWvpttzNNQDtzRRPvwfcPHBBBHwbw
SHzGRQjhwwhGzjjwRjfBqpqbNCqNnnqqQqPlQC
TZtgLmZgVmgdFgmZtdrbNqnqlNlpblnlrnBd
DvgmvvZgmWJJjwHHhJSzps
JjlrlJjPJgDjJjJnDRDjNwGGqMvSddvPvwQddqSVvq
SLpphFLhFZhWLzvswwWqsqVVQWdv
FSHtTLZpfzRDDrJgRNjT
wjCMvrMlqqWHvWqddrHqgnBNhcffthhVLtpgLBnw
GbQFZzZZphnpgNZV
FhFzRTDRPzsRQGQGTFlllrJHjdsJlHMqjjHr
LqDcTbmJcqSJSTmnrTcmJrfffplfjZsGZfGGZfQLdplj
hWddgBvzWFZfPsQlGh
RBWBRCdHtgHttVVzHBVNNNDwSTDcSSSbScDDwbwbnmRS
FFPzwlZVVrzFFlFLVlllZdHCHPQMnJQQbhhChdhCbb
BRRqGBgRfqvgvBDDDTRgghNCMMTQNNbVJMNJJdbbdT
DfpgjGfsRWrFVzwLcs
PMTSdSmFjhFpNTqvppvRBrRBrDqB
HnZZznJbzGZGlZtZWHlJGcGcwMvQBsrwRDQvcDgrgDgrqRvq
HGlGfnJZfMMCfNhm
nRssqlqVRppVwdMMQwFgtRFz
smTvLLTvvNLtwMMQNg
CmPGBvZGWvBSGGDmTZjZlhpJcpHDJsbDnlrrprpl
djcQGNQqdGdGqMCgndwgCLDMgW
nvBvHpBppnvPPnJTBWLJVMwVfWJfCbfWgW
hsHHpBsvRTHpsPszTBTTsRTslGqGqlcqlScnqmhZmmZSZSjl
DddBHCmfWCBTDBHTHfMpzhzpJJMJsFrGrz
tPVPmbnttjPnZvSvSbnmZPZPNpNGMpJNzzNrGJpvhsshMpFs
mwnZcbmmStbVtVjbZVlcLTBlcLCRHRDWCWWW`;

const divideString = (string: string): RucksacksObj => {
	const middleString = string.length / 2;
	const leftSide = string.slice(0, middleString);
	const rightSide = string.slice(middleString);
	return { leftSide, rightSide };
};

const checkEquality = ({ leftSide, rightSide }: RucksacksObj) => {
	const leftSideUnique = [...new Set(leftSide)];
	const rightSideUnique = [...new Set(rightSide)];
	const equals = leftSideUnique
		.filter((letter) => rightSideUnique.includes(letter))
		.join('');
	return equals;
};

const stringToValueCharCode = (sum: number, char: string) => {
	const charCode = char.charCodeAt(0);
	return sum + (charCode > 96 ? charCode - 96 : charCode - 38);
};

const sumValuePriority = (string: string) => {
	return [...string].reduce(stringToValueCharCode, 0);
};

const separateGroupOfThree = (array: string[]) => {
	let groupOfThree = [];
	const arrayGroupOfThree: string[][] = [];
	let count = 0;
	array.forEach((rucksack, index) => {
		if (index === array.length - 1) {
			groupOfThree.push(rucksack);
			arrayGroupOfThree.push(groupOfThree);
		} else if (count >= 3) {
			arrayGroupOfThree.push(groupOfThree);
			groupOfThree = [rucksack];
			count = 1;
		} else {
			groupOfThree.push(rucksack);
			count++;
		}
	});

	return arrayGroupOfThree;
};

const highestValuesOfEachGroup = (
	group: string[],
	groupIndex: number,
): HighestValuesOfEachGroup => {
	{
		const groupItems = [];

		group.forEach((rucksack) => {
			const items = [];

			for (let i = 0; i < rucksack.length; i++) {
				const item = rucksack[i];

				if (!items.includes(item)) {
					items.push(item);
				}
			}
			items.forEach((item) => {
				const groupItem = groupItems.find((groupItem) => groupItem.item === item);

				if (groupItem) {
					groupItem.value++;
				} else {
					groupItems.push({ item, value: 1 });
				}
			});
		});
		const highestValue = groupItems.reduce(
			(acc, item) => {
				return item.value > acc.value
					? { item: item.item, value: item.value }
					: acc;
			},
			{ item: '', value: 0 },
		);

		return { group: groupIndex, item: highestValue.item };
	}
};

const sumPrioritiesItemTypes = (rucksacksInput: RuckSacksInput) => {
	const arrayRucksacks = rucksacksInput.split('\n');
	const arrayGroupOfThree = separateGroupOfThree(arrayRucksacks);
	const divideArrayRucksacks = arrayRucksacks.map(divideString);

	const highestValues = arrayGroupOfThree.map(highestValuesOfEachGroup);
	const sumOfGroup = highestValues.reduce(
		(acc, item) => stringToValueCharCode(acc, item.item),
		0,
	);

	const sumPrioritiesItemTypes = divideArrayRucksacks.reduce(
		(acc, rucksack) => acc + sumValuePriority(checkEquality(rucksack)),
		0,
	);

	return { sumPrioritiesItemTypes, sumOfGroup };
};

console.log(sumPrioritiesItemTypes(rucksacksInput));
