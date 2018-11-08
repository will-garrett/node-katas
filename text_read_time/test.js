const readTime = require("./read_time");
const fs = require('fs');

try {  
    var war_n_peace = fs.readFileSync("./text_read_time/wrnpc.txt", 'utf8');
} catch(e) {
    console.log('Error:', e.stack);
}

let war_and_peace = war_n_peace.replace(/(\r\n|\r)/gm," ");
let lorem_400 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas massa non nibh tincidunt, nec finibus augue dictum. Sed sem nibh, fermentum sit amet lacus id, imperdiet vulputate augue. Sed non lacus sed enim fringilla vulputate. Etiam accumsan finibus massa, lobortis aliquam sem aliquet sit amet. Sed vitae ante pulvinar odio ornare pretium quis ac magna. Cras tempus vehicula leo eget vestibulum. Donec egestas erat non ex consequat laoreet. Mauris at volutpat sem. Vestibulum augue massa, mattis eget imperdiet sit amet, ullamcorper blandit ipsum. Ut imperdiet tellus a mauris lacinia, at efficitur nibh faucibus. Duis ac dui sem. In vel eleifend eros. Nulla nibh massa, suscipit id odio eu, posuere commodo velit. Vestibulum luctus felis sed feugiat porta. Donec tincidunt accumsan odio nec fringilla. Nullam pretium leo at efficitur varius. Duis ac imperdiet est. Sed elementum commodo libero, nec hendrerit sem fermentum sed. Sed mollis nibh ut faucibus porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In rutrum, justo at vehicula congue, mauris tortor consectetur orci, sit amet tempor leo purus eu erat. Donec sed lorem vel mi fermentum egestas id a nisi. Curabitur eget consequat purus. Curabitur feugiat pharetra fringilla. Duis elementum diam nunc, et laoreet justo rhoncus eget. Aenean et orci malesuada, mollis elit vel, consequat lectus. Sed interdum, eros in interdum convallis, erat eros placerat mi, tincidunt facilisis justo magna vitae felis. Praesent ac lobortis velit. Quisque et consequat erat. Curabitur mattis tellus eu porttitor aliquet. Praesent viverra eleifend est a cursus. Fusce pulvinar justo massa, ac lobortis massa condimentum a. Vivamus bibendum mauris at sapien semper congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed porta faucibus lorem, sed euismod tellus imperdiet pharetra. Maecenas vulputate congue nibh, a lacinia magna ullamcorper vitae. Nam ornare hendrerit enim, pulvinar mollis est ullamcorper non. Etiam id congue dolor. Praesent facilisis urna eu leo blandit tempor. Proin mauris est, volutpat vel elementum id, pretium et diam. In non facilisis erat. Proin malesuada tincidunt felis nec vehicula. Donec posuere massa sed euismod mattis. Vivamus quis consequat dolor. Duis porttitor sem augue. Aliquam luctus metus lacus, auctor faucibus tortor suscipit a. Morbi in fermentum mauris, non eleifend sapien. Suspendisse viverra a lorem in aliquet. Phasellus at odio at turpis suscipit ornare. Cras vel diam posuere dui tempor vehicula. Curabitur vel scelerisque lorem. Morbi porta dolor dolor, sit amet egestas metus.";

var lorem_420 = "Vestibulum eget aliquam tortor. Maecenas vitae ex dui. Curabitur convallis tincidunt leo semper imperdiet. Sed sit amet vestibulum dui. Duis non vehicula libero. Duis varius lorem sed diam pretium porta. Etiam lobortis enim non magna rutrum, quis accumsan arcu bibendum. Morbi feugiat ante et quam suscipit feugiat. Mauris sed quam velit. Mauris in odio nec eros suscipit sollicitudin. Duis maximus id eros at laoreet. Aliquam in ipsum eget tellus viverra mattis in id enim. Vestibulum egestas facilisis vehicula. Sed at elit rutrum, ornare mauris in, luctus nibh. Ut a ornare enim. Nullam nec tincidunt augue, quis vulputate mauris. Donec faucibus libero eget risus porta, at tempor sapien consectetur. Donec blandit risus pharetra neque congue gravida. In dictum libero in lectus laoreet, id sagittis est finibus. Maecenas consectetur odio sit amet cursus iaculis. Maecenas a consequat purus. Nullam eget finibus ligula. Proin volutpat in nulla et pharetra. Fusce vitae sagittis risus. Ut vel nisi non nunc feugiat scelerisque nec vel nibh. Sed ultricies imperdiet egestas. Fusce justo ex, interdum quis felis ac, pharetra eleifend erat. Etiam volutpat diam sit amet mauris volutpat, at dignissim mauris pretium. Fusce euismod quis nisi vel vulputate. Phasellus non scelerisque sem. Duis vitae tempor mauris. In sit amet erat odio. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris consequat lectus vel mollis venenatis. Aliquam aliquet magna ut leo tempor cursus. Suspendisse quis maximus est. Sed semper mauris eget tempus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet neque a dui mattis commodo vel vel lectus. Curabitur vestibulum justo malesuada lacus tincidunt, a ullamcorper tellus vestibulum. Aliquam nec ligula molestie, sollicitudin metus a, mollis dui. Suspendisse placerat accumsan magna, ut pretium neque viverra a. Nullam blandit neque sed dolor maximus ultricies. Proin massa ex, luctus sit amet erat in, rhoncus maximus felis. Donec ac arcu nec leo commodo mattis sit amet et turpis. Vivamus at dolor vel augue tempor consectetur. Quisque mattis vitae dui sed tincidunt. Pellentesque sit amet sodales tellus, et aliquet neque. Nullam eu nisl in neque feugiat viverra. Maecenas facilisis tempus blandit. Nullam ullamcorper maximus nisl eu suscipit. Quisque egestas ipsum sed sem scelerisque hendrerit. Etiam vehicula urna nec nibh consectetur congue. Maecenas vestibulum posuere tortor, vel pulvinar leo vestibulum vel. Aenean mattis leo felis, quis varius tellus scelerisque sit amet. Aliquam tincidunt sodales consectetur. Ut ut magna dictum, maximus nisi quis, sodales magna. Aliquam eu tristique nibh. Suspendisse potenti. Donec dapibus elementum blandit. Nunc tincidunt eros et neque finibus, in. ";
    

beforeEach(() => {

});
test('should return 1 minute', () => {
    var test = "Anything lower than the equivalent average wpm will return 1 minute"
    expect(readTime(test)).toEqual({ minutes: 1});
});

test('should return 2 minutes', () => {
    // 400 words
    var lorem = lorem_400;
    expect(readTime(lorem)).toEqual({ minutes: 2});
});

test('should return 4 minutes for slower readers', () => {
    // 420 words
    expect(readTime(lorem_420, false, 100)).toEqual({minutes: 4});
});

test('should return 4 minutes for slower readers', () => {
    // 420 words
    expect(readTime(lorem_420, true, 100)).toEqual({minutes: 4, seconds: 13});
});

test('should return 0 minutes 2 seconds', () => {
    var test = "This should take two seconds";
    expect(readTime(test, true)).toEqual({ minutes: 0, seconds: 2});
});

test('should return 0 minutes 1 second', () => {
    var test = "A second";
    expect(readTime(test, true)).toEqual({ minutes: 0, seconds: 1});
});

test('should return 2883 minutes to read `War and Peace` By Leo Tolstoy \n\t via project gutenberg', () => {
    expect(readTime(war_and_peace, false, 200)).toEqual({ minutes: 2883 });
});

