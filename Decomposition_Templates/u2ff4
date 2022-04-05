let chr41 = {
  character: "國", // outline
  strokes: [
    "M 248 751 Q 236 763 213 771 Q 201 777 188 772 Q 179 766 186 751 Q 211 655 213 647 Q 228 479 206 249 Q 200 194 182 128 Q 164 62 207 10 Q 220 -6 232 9 Q 242 22 245 36 L 250 78 Q 254 117 254 175 Q 264 665 268 697 Q 268 701 268 704 C 269 734 270 736 248 751 Z",
    "M 750 68 Q 771 47 795 -3 Q 805 -27 821 -26 Q 834 -25 844 -3 Q 877 57 853 252 Q 829 693 853 728 Q 854 734 859 737 Q 871 752 870 760 Q 869 773 834 797 Q 779 834 764 831 Q 754 831 745 827 Q 727 820 672 810 Q 510 791 317 755 Q 281 751 248 751 C 218 750 239 697 268 704 Q 278 705 295 710 Q 310 716 440 739 Q 603 767 728 777 Q 755 778 761 765 Q 788 738 788 416 Q 791 220 793 175 Q 797 124 786 103 Q 782 90 776 90 C 764 63 740 82 750 68 Z",
    "M 245 36 Q 252 36 260 37 Q 417 62 750 68 C 780 69 795 69 776 90 Q 769 100 749 116 Q 730 129 693 123 Q 447 86 250 78 C 220 77 215 34 245 36 Z",
  ],
};

let chr42 = {
  character: "三",
  strokes: [
    "M 326 667 Q 283 663 312 640 Q 369 610 428 623 Q 543 641 665 661 Q 720 671 729 678 Q 739 688 735 698 Q 728 711 693 722 Q 660 731 561 701 Q 420 673 326 667 Z",
    "M 329 421 Q 304 417 332 392 Q 348 379 385 383 Q 557 405 685 416 Q 721 420 709 440 Q 694 462 657 472 Q 621 479 558 466 Q 435 441 329 421 Z",
    "M 130 165 Q 102 162 122 139 Q 140 120 163 113 Q 191 104 212 110 Q 515 179 929 157 Q 930 158 933 157 Q 960 156 967 167 Q 974 183 953 201 Q 884 255 835 246 Q 643 210 130 165 Z",
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
  translate(0, 0);
  scale(0.3, -0.3);
  let ctx41 = drawingContext;
  ctx41.fillStyle = "black";
  ctx41.strokeStyle = "black";
  for (let j = 0; j < chr41.strokes.length; j++) {
    p = new Path2D(chr41.strokes[j]);
    ctx41.fill(p);
  }
  translate(230, 130);
  scale(0.55, 0.7);
  let ctx42 = drawingContext;
  ctx42.fillStyle = "black";
  ctx42.strokeStyle = "black";
  for (let j = 0; j < chr42.strokes.length; j++) {
    p = new Path2D(chr42.strokes[j]);
    ctx42.fill(p);
  }
  pop();
}
