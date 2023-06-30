const input = `pqffvllhrhthvhshhpnhpnpqpvpvrpvpwvwjjdssmcsmccjvjmjjwnjwjwhjwwwzswwhvhwwlvvlbvbtbzbfbzbtbqbgbpbggwzggvjjdpdffbmffntncchtccbcffcjfjnjfnntssvtstzssmnnhrhlhbbwfwjfwjfwwbhhfhmmpsssbnssssfzzfpffdrdpdqqvnncjjgrjjmhhpqqcjqcjjzdzzpvvprrlglrrcmcqqtltdltddswsrrzzwgzzgssczcmzzmgmwgmggwwzttpccmcsmmvfvnvppzlzvzllgclggpfggfnfrfvrvwwvhwwvgwwrbbgfglflblzblzbznzhzffplffnrrcqqsgsvshvhlldhhvnhhmdddnssdvdwdwccggmddsmswwtctdtqqjsshhjzzdpdmpdmppjtjwjswjsjjjsdjjtrtbrbjjwwvnvppqphqhwhcwhwbbpgbbnhbnhhswwdswwlcczdztzbbbnwwtmmpvvgjjqgqdqzzdjdpjjnnffhccscvvchhbmbcbffpdpggvdvttpvpqqhggdtdhtdhhmghmgggzwgwrgwggwlggvpggcfcttzmtmgmvgmmpqmqlmqllsqqjbjwjsszczlzrzgrzzhshlhjjwttwnntbtjtjpplccqrqhrhssbmbttrddfvfwwjcwcvwcwwvpvggqwgwjgwgccvqqcmqqtqnqpnqnffdqfqhhqnhnmhmvhmhwwfrwrggnmmmcnmmgsszmzlmzmddcwwthtssgjsgjjgpgnppdqqcgqggzjgjngnrnggvffgddvtvctcftcftfnnnnhssbgsgwwthtqtltftqtnqttsrtrggwcgwcwmwgmgvmmzrmzrzjzmmcclmmtjmjhmmlhlwlppnpccbbrlrqrcrjrdrlrnngmnmvmcmzczztbblglccvzvppzspsddrzzlsllfzfsspnpdnpnvvvgmmpccmpcpgcpcwcddtmddgwgngqqcpqqlhqqczqqbvqqgdqgqmgmlmmvrrgfgzffbccldcdmmcmcgcngnghngngdngdndcncbbpqbbphbphpccpcwwjswwfttbqbsszccrbbdndsdrdqrqjrjjbmbtbdbbgbvgvcggwdwcccttqccnffjpjqqzpzlzvlljhhschhzlhhfhcfhchvcvtvtgvgzvzrvrdrgrwrjwjljhljlssszsqzsswhhmlhlrhlhzzgghjhzjjcllwrwtrrbdbrbnrnprnrffjvvphhvbbqbbscstsmslmlvmvrmmvvngnlnzzwqzzjqqsqbqrrtmrtmmfgmgrgjjtmjmrrddmrrqmrrjmjqmqnqmmcmlmfmffcgcclplffzvzwvzzjtztftqftqffjjpwjjbpjjggzdgzgwzzfrfvvhfvvwcvvbccfcvffpcpgpbbqhbbhmmzfmfvvnjvnjjhzhqqmffndndmmzhmmqnnlglvvjhjddvggqwgwdgwdggqbqgqrqlrrtptsswlssqwssbdsdrsddjsszjszjjpnjnvnjvnnmznmnddccpwwhshzzcfcqcwcddsjjmnjmjljwwgmglllqlhhctcvvqrvrrhfrrbcrrfbrfbrfrqffbwbqwbbjggsjjjnqqrqsqhhwnhnshnhhdjjqfqpqmmqgqgqggzmmnncrrpgglgqlqclqlsqqwnnfntnzttrnnmtmvvfppbrprzpzzdzvvtctnncpclpccsbbswwcscjssvhvhhqggzmgmqgmgwwgcwgccrllzhzzlzlbljbllmqqpjqqhrhqhjhbbjmjmhmddmwmcmvvmbbmvbmmznnwvwlwtllhwlwgwpgplgpgmgngjgglbglgmllvvlttgrrrlsrllghlggjdjwwfjwfjfvhjmgqnwhwpbdtzrphsqbmmvscslhbdzffsfshgsdjbqbwlgmrtschcnfhdlnndsvpwmwttfglpghhznmgfcjsdlwhnmfqvmpvhgpnnwtjfztbmtprqhsqtjwzhwcqjtjbtqwlcldnvggrwddmpllwnrqwdljwzfzqwcdwgqwvnthnrpcsfwrmqvbzjvzqnmdnfgtbzgtnrvblfwmhdsddgbffnjzvjzfpwglctpqhnqdvtblcchrlmndzhlsczgnsmnbwgnjngnjtlrdpfhqjrwcrqvcpspbtwcvgvvmpnwqjjpdpnslmcrcjnjmhqmrmfbcmrcmpbcbhpcvwqwflljfpgdvqhgdwgcphjqfnqzjjpsqnbtfzhftjtfcbhhcmmlwcfznsflfpphprrgvqwfgjcwfgjfsghzcbqrldwrjlzlbjhpgrbmgdpgzmfsqsphqbbslwwpzspccrhcfrgcjlfwhlcmzdcltbbpcrzglqgqntpwtmgstqlmcsqqbsqgmsmfznwcrfdgvsmnfqmwtsvqvlhwwjlrlhnsvcnrtwwmrjcgfncvlrcqrllndlvmrjpfjpgrrjcwhsqvlbtnlqgwjjqzwcvtvlnfnmqqshbcnqtcbvnwtwbfdgqmvnpmjhlsfdntfwwntvsrrsmspzqmglfnprjtdbmbgnplzzclsjpnzwdhcbhpfnqrgmgqtpfhgnfbqhrpmznbrshjhntzctslwhtgtjvpqhntmchhtncfjmbzcgnpcbpmldrtnpvrzqfftbjjcjlpwwgvmnstjghftcczjzfsftgzpfhbspqmrbfhcdfmqbrgrbsmjvgpbrnvbblwwvqzzpmqrspzvzppjfbgfftdvsdvmrjzhfslptzmgndnqqgmrrfnbbpvbmvpngwjhzvfbwfnzlrgwffvjsfdldfgchfjmnzfnzhwrwttrzlrhmnwvjjdqfmbpfllhrgmddjgnwjnbqwjnslcrdjrmnldcpsgzjpdhrpdfwhbvwhwnhcsmwcwstvqrcrqsnvjrzljfgbljfszchbsqnldgntvcscwqqmpnlwtlfmswtmvrlpzgbrjhtgjgpnhggnprpvwfqpjffqhtfvpnrptgrtwzzlvplgnfjmqphgmnssccrdndqgpljtwtntshrpgsjcdrpmccjnjdgmpmzbfhqjzphcswtwvvqcrwsjhtdqgrhqjmjjcrblpswcblnpzvfztqtbpgjcgngqmwrjtlmhvlsbmrdzwlgqlfqcqnsnjcnddssqbftjvnlgcwwfcgdpdmqrdsjmcnzrfrpnvjmbsltpzwjhjzqqvbgrltczbgvcpwdzqsvhddsbjgjgcmnldrfhnhddlvjcvsnghprjwlghhtghldcqsdcdgnmbcjglvjjvvlbhzczlmjsdqtdpzdtvfztgsdfjsdtfchvzcgvhjnnncmsrfvvmcsjjdftmlpczgvtwngssqmzlmsrrsrbhhhrnwqhmpcdvqmdsvvtsgsqfdcpgsdgzvmbzpbpgtcbshnvdzlmpnwmqrvnmrjprmvppjwfbjhlhzsfhqqzmpbclqvsvfrcqwprrcvqcbbwvnqfwnrgjhlwmgzpfspqrvqrhmqnwvzjrhvvgdgswlvzjjhjtdctlthlpzqhjvwwbpsclpgflcnsdshrqbhmczcwljqlndfnfrcdgmptpsltrcjccnpdchgnswdcpsslcslcjznzpgfhznhbgqhdqvddmqzdnmpshhdcjrsmfjllhfvjvmzzhzrvlbpzqngwmlwcmqnppqzncvjshfrpjlptvnqfrfcrfnbhwhpdqqvjhsqvsmprtgfrddwzjzlwhhqvjpfrwgwvwpszzsfzwjtwngdjfllhjrmqjtmvwsvggnswpqpjbtcrnhhhlzbrvhjdstnpctjlgsffrrbfdvjzhwsgthgfsqnvqdcjffsttlrjnhtqqdpfqpjtdgfwcdwzmwfvqgglsrmmqwbszclpzwldwcswpwfwldrfmmdndcptjbmnvgcpntqcdrcffvgnlpjmcqjpfmbmwjfpqzbzhqtqbzsghbnfvhphfzzhfznttpfrqwpmzjchpzzrdclhdltlqbjmjdfdjqlqbwptsghcnvtdscwgpqnlhhvsvglplhlrwpnzmdbsbrlhmpczzfz`;

const findSignal = (signalInput: string, singnalSize: number) => {
	let letters = [];
	let i = 0;
	for (i; i < signalInput.length; i++) {
		const letterInput = input[i];
		const hasLetter = letters.find((letter) => letter === letterInput);

		if (!hasLetter && letters.length !== singnalSize) {
			letters.push(letterInput);
		} else if (letters.length === singnalSize) {
			break;
		} else {
			const newIndex = i - letters.length + 1 < 1 ? 1 : i - letters.length + 1;
			letters = [input[newIndex]];
			i = newIndex;
		}
	}
	return { letters, position: i };
};

console.log(findSignal(input, 14));
