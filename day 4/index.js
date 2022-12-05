const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]

function fitsInOneBox(boxes) {
  return boxes
    .sort((a,b) => a.l - b.l)
    .every((box, i) => {
      const previousBox = boxes[i - 1];
      return (
        i === 0 || (box.l > previousBox.l && box.w > previousBox.w && box.h > previousBox.h)
      ); 
    });
};

console.log(fitsInOneBox(boxes))