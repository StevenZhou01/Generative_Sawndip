let chr81 = {
  character: "厄",
  strokes: [
    "M 350 677 Q 386 665 472 679 Q 746 728 765 739 Q 765 740 766 740 Q 776 749 771 758 Q 764 771 731 781 Q 698 788 596 756 Q 445 723 340 713 Q 336 713 336 712 C 306 708 321 684 350 677 Z",
    "M 336 712 Q 321 725 298 735 Q 277 748 263 742 Q 250 735 257 720 Q 278 690 274 628 Q 256 429 229 326 Q 220 299 210 272 Q 168 158 80 29 Q 74 22 72 15 Q 69 3 81 6 Q 123 12 212 158 Q 222 179 235 201 Q 307 357 330 559 Q 339 667 350 677 C 357 697 357 697 336 712 Z",
  ],
};

let chr82 = {
  character: "匚",
  strokes: [
    "M 315 653 Q 357 635 406 643 Q 560 665 720 687 Q 793 699 804 708 Q 814 717 811 726 Q 804 741 771 751 Q 741 758 634 731 Q 468 695 310 689 Q 309 689 309 688 C 279 685 287 663 315 653 Z",
    "M 309 688 L 309 689 Q 263 714 242 716 Q 229 717 220 710 Q 210 703 224 685 Q 246 655 245 383 Q 242 149 205 73 Q 199 67 195 62 Q 173 43 186 24 Q 193 6 209 -7 Q 225 -20 245 -6 Q 252 3 318 26 Q 414 47 595 52 Q 779 55 844 46 Q 869 42 883 49 Q 895 55 895 63 Q 894 79 858 102 Q 822 123 801 122 Q 758 121 425 82 Q 298 61 288 75 Q 279 84 290 226 Q 284 257 306 546 Q 309 628 315 653 C 319 683 319 683 309 688 Z",
  ],
};

function setup() {
  createCanvas(500, 500);
  background(255);
  rectMode(CENTER);
  rect(width / 2, height / 2, 300, 300);
  line(width / 2, height / 2 - 300 / 2, width / 2, height / 2 + 300 / 2);
  line(width / 2 - 300 / 2, height / 2, width / 2 + 300 / 2, height / 2);

  translate(100, 370);

  push();
  translate(0, 10);
  scale(0.33, -0.33);
  let ctx81 = drawingContext;
  ctx81.fillStyle = "black";
  ctx81.strokeStyle = "black";
  for (let j = 0; j < chr81.strokes.length; j++) {
    p = new Path2D(chr81.strokes[j]);
    ctx81.fill(p);
  }

  translate(200, 60);
  scale(0.7, 0.7);
  let ctx82 = drawingContext;
  ctx82.fillStyle = "black";
  ctx82.strokeStyle = "black";
  for (let j = 0; j < chr82.strokes.length; j++) {
    p = new Path2D(chr82.strokes[j]);
    ctx82.fill(p);
  }
  pop();
}
