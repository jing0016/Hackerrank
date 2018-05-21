class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function()
    {
      this.area = this.w * this.h;
        return this.area;
    };

class Square extends Rectangle{
        constructor(w){
            super(w,w);
        }
    }

function main()
{
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);

    console.log(rec.area());
    console.log(sqr.area());
}

main();
