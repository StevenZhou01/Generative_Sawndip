let chrb1 = {
  character: "丫",
  strokes: [
    "M 244 729 Q 295 678 355 604 Q 370 583 385 579 Q 392 578 401 586 Q 414 599 404 643 Q 391 703 246 759 Q 237 765 235 753 Q 234 740 244 729 Z",
    "M 536 529 Q 608 583 651 621 Q 744 708 783 726 Q 810 739 795 760 Q 779 781 746 798 Q 715 814 700 810 Q 684 807 690 791 Q 699 740 597 637 Q 557 594 514 544 C 494 521 512 511 536 529 Z",
    "M 456 92 Q 447 49 472 -7 Q 479 -23 486 -27 Q 493 -34 500 -26 Q 527 -4 525 54 Q 524 87 527 390 Q 527 453 539 495 Q 546 510 544 523 Q 543 526 536 529 L 514 544 Q 502 554 483 565 Q 459 581 439 566 Q 435 560 441 546 Q 462 516 467 431 Q 467 152 466 143 Q 462 119 456 92 Z",
  ],
};

let chrb2 = {
  character: "乙",
  strokes: [
    "M 873 94 Q 904 107 894 147 Q 875 205 863 295 Q 862 313 854 322 Q 847 331 841 305 Q 828 226 810 175 Q 798 150 772 136 Q 634 76 381 108 Q 345 115 324 129 Q 287 150 281 180 Q 253 270 379 434 Q 434 507 575 635 Q 612 669 654 691 Q 670 697 673 707 Q 680 722 661 736 Q 627 760 585 772 Q 575 776 559 769 Q 474 735 426 725 Q 356 712 253 709 Q 240 710 235 702 Q 231 695 245 682 Q 261 666 278 661 Q 315 652 512 707 Q 525 711 531 704 Q 537 697 524 685 Q 260 379 237 252 Q 236 249 235 243 Q 225 186 239 148 Q 245 120 273 97 Q 375 4 674 36 Q 680 37 686 38 Q 771 48 873 94 Z",
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
  scale(0.3, -0.3);
  let ctxb1 = drawingContext;
  ctxb1.fillStyle = "black";
  ctxb1.strokeStyle = "black";
  for (let j = 0; j < chrb1.strokes.length; j++) {
    p = new Path2D(chrb1.strokes[j]);
    ctxb1.fill(p);
  }

  translate(200, 130);
  scale(0.7, 0.7);
  let ctxb2 = drawingContext;
  ctxb2.fillStyle = "black";
  ctxb2.strokeStyle = "black";
  for (let j = 0; j < chrb2.strokes.length; j++) {
    p = new Path2D(chrb2.strokes[j]);
    ctxb2.fill(p);
  }
  pop();
}
