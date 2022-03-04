import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;

const mapData = [{"x":0,"y":0,"data":9},{"x":2,"y":0,"data":7},{"x":4,"y":0,"data":6},{"x":6,"y":0,"data":0},{"x":8,"y":0,"data":0},{"x":10,"y":0,"data":0},{"x":12,"y":0,"data":0},{"x":14,"y":0,"data":0},{"x":16,"y":0,"data":0},{"x":18,"y":0,"data":0},{"x":20,"y":0,"data":0},{"x":22,"y":0,"data":0},{"x":24,"y":0,"data":0},{"x":26,"y":0,"data":0},{"x":28,"y":0,"data":0},{"x":30,"y":0,"data":0},{"x":32,"y":0,"data":0},{"x":34,"y":0,"data":0},{"x":36,"y":0,"data":0},{"x":38,"y":0,"data":0},{"x":-1,"y":1,"data":3},{"x":1,"y":1,"data":1},{"x":3,"y":1,"data":0},{"x":5,"y":1,"data":0},{"x":7,"y":1,"data":0},{"x":9,"y":1,"data":0},{"x":11,"y":1,"data":0},{"x":13,"y":1,"data":0},{"x":15,"y":1,"data":0},{"x":17,"y":1,"data":0},{"x":19,"y":1,"data":0},{"x":21,"y":1,"data":0},{"x":23,"y":1,"data":0},{"x":25,"y":1,"data":0},{"x":27,"y":1,"data":0},{"x":29,"y":1,"data":0},{"x":31,"y":1,"data":0},{"x":33,"y":1,"data":0},{"x":35,"y":1,"data":0},{"x":37,"y":1,"data":0},{"x":0,"y":2,"data":8},{"x":2,"y":2,"data":0},{"x":4,"y":2,"data":0},{"x":6,"y":2,"data":0},{"x":8,"y":2,"data":0},{"x":10,"y":2,"data":0},{"x":12,"y":2,"data":0},{"x":14,"y":2,"data":0},{"x":16,"y":2,"data":0},{"x":18,"y":2,"data":0},{"x":20,"y":2,"data":0},{"x":22,"y":2,"data":0},{"x":24,"y":2,"data":0},{"x":26,"y":2,"data":0},{"x":28,"y":2,"data":0},{"x":30,"y":2,"data":0},{"x":32,"y":2,"data":0},{"x":34,"y":2,"data":0},{"x":36,"y":2,"data":0},{"x":38,"y":2,"data":0},{"x":-1,"y":3,"data":0},{"x":1,"y":3,"data":0},{"x":3,"y":3,"data":0},{"x":5,"y":3,"data":0},{"x":7,"y":3,"data":0},{"x":9,"y":3,"data":0},{"x":11,"y":3,"data":0},{"x":13,"y":3,"data":0},{"x":15,"y":3,"data":0},{"x":17,"y":3,"data":0},{"x":19,"y":3,"data":0},{"x":21,"y":3,"data":0},{"x":23,"y":3,"data":0},{"x":25,"y":3,"data":0},{"x":27,"y":3,"data":0},{"x":29,"y":3,"data":0},{"x":31,"y":3,"data":0},{"x":33,"y":3,"data":0},{"x":35,"y":3,"data":0},{"x":37,"y":3,"data":0},{"x":0,"y":4,"data":8},{"x":2,"y":4,"data":0},{"x":4,"y":4,"data":0},{"x":6,"y":4,"data":0},{"x":8,"y":4,"data":0},{"x":10,"y":4,"data":0},{"x":12,"y":4,"data":0},{"x":14,"y":4,"data":0},{"x":16,"y":4,"data":0},{"x":18,"y":4,"data":0},{"x":20,"y":4,"data":0},{"x":22,"y":4,"data":0},{"x":24,"y":4,"data":0},{"x":26,"y":4,"data":0},{"x":28,"y":4,"data":0},{"x":30,"y":4,"data":0},{"x":32,"y":4,"data":0},{"x":34,"y":4,"data":0},{"x":36,"y":4,"data":0},{"x":38,"y":4,"data":0},{"x":-1,"y":5,"data":0},{"x":1,"y":5,"data":0},{"x":3,"y":5,"data":0},{"x":5,"y":5,"data":0},{"x":7,"y":5,"data":0},{"x":9,"y":5,"data":1},{"x":11,"y":5,"data":0},{"x":13,"y":5,"data":0},
    {"x":15,"y":5,"data":0},{"x":17,"y":5,"data":0},{"x":19,"y":5,"data":0},{"x":21,"y":5,"data":0},{"x":23,"y":5,"data":0},{"x":25,"y":5,"data":0},{"x":27,"y":5,"data":0},{"x":29,"y":5,"data":0},{"x":31,"y":5,"data":0},{"x":33,"y":5,"data":0},{"x":35,"y":5,"data":0},{"x":37,"y":5,"data":0},{"x":0,"y":6,"data":0},{"x":2,"y":6,"data":0},{"x":4,"y":6,"data":0},{"x":6,"y":6,"data":0},{"x":8,"y":6,"data":0},{"x":10,"y":6,"data":0},{"x":12,"y":6,"data":0},{"x":14,"y":6,"data":0},{"x":16,"y":6,"data":0},{"x":18,"y":6,"data":0},{"x":20,"y":6,"data":0},{"x":22,"y":6,"data":0},{"x":24,"y":6,"data":0},{"x":26,"y":6,"data":0},{"x":28,"y":6,"data":0},{"x":30,"y":6,"data":0},{"x":32,"y":6,"data":0},{"x":34,"y":6,"data":0},{"x":36,"y":6,"data":0},{"x":38,"y":6,"data":0},{"x":-1,"y":7,"data":0},{"x":1,"y":7,"data":0},{"x":3,"y":7,"data":0},{"x":5,"y":7,"data":0},{"x":7,"y":7,"data":0},{"x":9,"y":7,"data":0},{"x":11,"y":7,"data":0},{"x":13,"y":7,"data":0},{"x":15,"y":7,"data":0},{"x":17,"y":7,"data":0},{"x":19,"y":7,"data":0},{"x":21,"y":7,"data":0},{"x":23,"y":7,"data":0},{"x":25,"y":7,"data":0},{"x":27,"y":7,"data":0},{"x":29,"y":7,"data":0},{"x":31,"y":7,"data":0},{"x":33,"y":7,"data":0},{"x":35,"y":7,"data":0},{"x":37,"y":7,"data":0},{"x":0,"y":8,"data":0},{"x":2,"y":8,"data":0},{"x":4,"y":8,"data":0},{"x":6,"y":8,"data":0},{"x":8,"y":8,"data":0},{"x":10,"y":8,"data":0},{"x":12,"y":8,"data":0},{"x":14,"y":8,"data":0},{"x":16,"y":8,"data":0},{"x":18,"y":8,"data":0},{"x":20,"y":8,"data":0},{"x":22,"y":8,"data":0},{"x":24,"y":8,"data":0},{"x":26,"y":8,"data":0},{"x":28,"y":8,"data":0},{"x":30,"y":8,"data":0},{"x":32,"y":8,"data":0},{"x":34,"y":8,"data":0},{"x":36,"y":8,"data":0},{"x":38,"y":8,"data":0},{"x":-1,"y":9,"data":0},{"x":1,"y":9,"data":0},{"x":3,"y":9,"data":0},{"x":5,"y":9,"data":0},{"x":7,"y":9,"data":0},{"x":9,"y":9,"data":0},{"x":11,"y":9,"data":0},{"x":13,"y":9,"data":0},{"x":15,"y":9,"data":0},{"x":17,"y":9,"data":0},{"x":19,"y":9,"data":0},{"x":21,"y":9,"data":0},{"x":23,"y":9,"data":0},{"x":25,"y":9,"data":0},{"x":27,"y":9,"data":0},{"x":29,"y":9,"data":0},{"x":31,"y":9,"data":0},{"x":33,"y":9,"data":0},{"x":35,"y":9,"data":0},{"x":37,"y":9,"data":0},{"x":0,"y":10,"data":0},{"x":2,"y":10,"data":0},{"x":4,"y":10,"data":0},{"x":6,"y":10,"data":0},{"x":8,"y":10,"data":0},{"x":10,"y":10,"data":0},{"x":12,"y":10,"data":0},{"x":14,"y":10,"data":0},{"x":16,"y":10,"data":0},{"x":18,"y":10,"data":0},{"x":20,"y":10,"data":0},{"x":22,"y":10,"data":0},{"x":24,"y":10,"data":0},{"x":26,"y":10,"data":0},{"x":28,"y":10,"data":0},{"x":30,"y":10,"data":0},{"x":32,"y":10,"data":0},{"x":34,"y":10,"data":0},{"x":36,"y":10,"data":0},{"x":38,"y":10,"data":0},{"x":-1,"y":11,"data":0},{"x":1,"y":11,"data":0},{"x":3,"y":11,"data":0},{"x":5,"y":11,"data":0},{"x":7,"y":11,"data":0},{"x":9,"y":11,"data":0},{"x":11,"y":11,"data":0},{"x":13,"y":11,"data":0},{"x":15,"y":11,"data":0},{"x":17,"y":11,"data":0},{"x":19,"y":11,"data":0},{"x":21,"y":11,"data":0},{"x":23,"y":11,"data":0},{"x":25,"y":11,"data":0},{"x":27,"y":11,"data":0},{"x":29,"y":11,"data":0},{"x":31,"y":11,"data":0},{"x":33,"y":11,"data":0},{"x":35,"y":11,"data":0},{"x":37,"y":11,"data":0},{"x":0,"y":12,"data":0},{"x":2,"y":12,"data":0},{"x":4,"y":12,"data":0},{"x":6,"y":12,"data":0},{"x":8,"y":12,"data":0},{"x":10,"y":12,"data":0},{"x":12,"y":12,"data":0},{"x":14,"y":12,"data":0},{"x":16,"y":12,"data":0},{"x":18,"y":12,"data":0},{"x":20,"y":12,"data":0},{"x":22,"y":12,"data":0},{"x":24,"y":12,"data":0},{"x":26,"y":12,"data":0},{"x":28,"y":12,"data":0},{"x":30,"y":12,"data":0},{"x":32,"y":12,"data":0},{"x":34,"y":12,"data":0},{"x":36,"y":12,"data":0},{"x":38,"y":12,"data":0},{"x":-1,"y":13,"data":0},{"x":1,"y":13,"data":0},{"x":3,"y":13,"data":0},{"x":5,"y":13,"data":0},{"x":7,"y":13,"data":0},{"x":9,"y":13,"data":0},{"x":11,"y":13,"data":0},{"x":13,"y":13,"data":0},{"x":15,"y":13,"data":0},{"x":17,"y":13,"data":0},{"x":19,"y":13,"data":0},{"x":21,"y":13,"data":0},{"x":23,"y":13,"data":0},{"x":25,"y":13,"data":0},{"x":27,"y":13,"data":0},{"x":29,"y":13,"data":0},{"x":31,"y":13,"data":0},{"x":33,"y":13,"data":0},{"x":35,"y":13,"data":0},{"x":37,"y":13,"data":0},{"x":0,"y":14,"data":0},{"x":2,"y":14,"data":0},{"x":4,"y":14,"data":0},{"x":6,"y":14,"data":0},{"x":8,"y":14,"data":0},{"x":10,"y":14,"data":0},{"x":12,"y":14,"data":0},{"x":14,"y":14,"data":0},{"x":16,"y":14,"data":0},{"x":18,"y":14,"data":0},{"x":20,"y":14,"data":0},{"x":22,"y":14,"data":0},{"x":24,"y":14,"data":0},{"x":26,"y":14,"data":0},{"x":28,"y":14,"data":0},{"x":30,"y":14,"data":0},{"x":32,"y":14,"data":0},{"x":34,"y":14,"data":0},{"x":36,"y":14,"data":0},{"x":38,"y":14,"data":0},{"x":-1,"y":15,"data":0},{"x":1,"y":15,"data":0},{"x":3,"y":15,"data":0},{"x":5,"y":15,"data":0},{"x":7,"y":15,"data":0},{"x":9,"y":15,"data":0},{"x":11,"y":15,"data":0},{"x":13,"y":15,"data":0},{"x":15,"y":15,"data":0},{"x":17,"y":15,"data":0},{"x":19,"y":15,"data":0},{"x":21,"y":15,"data":0},{"x":23,"y":15,"data":0},{"x":25,"y":15,"data":0},{"x":27,"y":15,"data":0},{"x":29,"y":15,"data":0},{"x":31,"y":15,"data":0},{"x":33,"y":15,"data":0},{"x":35,"y":15,"data":0},{"x":37,"y":15,"data":0},{"x":0,"y":16,"data":0},{"x":2,"y":16,"data":0},{"x":4,"y":16,"data":0},{"x":6,"y":16,"data":0},{"x":8,"y":16,"data":0},{"x":10,"y":16,"data":0},{"x":12,"y":16,"data":0},{"x":14,"y":16,"data":0},{"x":16,"y":16,"data":0},{"x":18,"y":16,"data":0},{"x":20,"y":16,"data":0},{"x":22,"y":16,"data":0},{"x":24,"y":16,"data":0},{"x":26,"y":16,"data":0},{"x":28,"y":16,"data":0},{"x":30,"y":16,"data":0},{"x":32,"y":16,"data":0},{"x":34,"y":16,"data":0},{"x":36,"y":16,"data":0},{"x":38,"y":16,"data":0},{"x":-1,"y":17,"data":0},{"x":1,"y":17,"data":0},{"x":3,"y":17,"data":0},{"x":5,"y":17,"data":0},{"x":7,"y":17,"data":0},{"x":9,"y":17,"data":0},{"x":11,"y":17,"data":0},{"x":13,"y":17,"data":0},{"x":15,"y":17,"data":0},{"x":17,"y":17,"data":0},{"x":19,"y":17,"data":0},{"x":21,"y":17,"data":0},{"x":23,"y":17,"data":0},{"x":25,"y":17,"data":0},{"x":27,"y":17,"data":0},{"x":29,"y":17,"data":0},{"x":31,"y":17,"data":0},{"x":33,"y":17,"data":0},{"x":35,"y":17,"data":0},{"x":37,"y":17,"data":0},{"x":0,"y":18,"data":0},{"x":2,"y":18,"data":0},{"x":4,"y":18,"data":0},{"x":6,"y":18,"data":0},{"x":8,"y":18,"data":0},{"x":10,"y":18,"data":0},{"x":12,"y":18,"data":0},{"x":14,"y":18,"data":1},{"x":16,"y":18,"data":0},{"x":18,"y":18,"data":0},{"x":20,"y":18,"data":0},{"x":22,"y":18,"data":0},{"x":24,"y":18,"data":0},{"x":26,"y":18,"data":0},{"x":28,"y":18,"data":0},{"x":30,"y":18,"data":0},{"x":32,"y":18,"data":0},{"x":34,"y":18,"data":0},{"x":36,"y":18,"data":0},{"x":38,"y":18,"data":0},{"x":-1,"y":19,"data":0},{"x":1,"y":19,"data":0},{"x":3,"y":19,"data":0},{"x":5,"y":19,"data":0},{"x":7,"y":19,"data":0},{"x":9,"y":19,"data":0},{"x":11,"y":19,"data":0},{"x":13,"y":19,"data":0},{"x":15,"y":19,"data":0},{"x":17,"y":19,"data":0},{"x":19,"y":19,"data":0},{"x":21,"y":19,"data":0},{"x":23,"y":19,"data":0},{"x":25,"y":19,"data":0},{"x":27,"y":19,"data":0},{"x":29,"y":19,"data":0},{"x":31,"y":19,"data":0},{"x":33,"y":19,"data":0},{"x":35,"y":19,"data":0},{"x":37,"y":19,"data":0}]

@ccclass
export default class test1 extends cc.Component {

    @property({type: cc.Node})
    nd: cc.Node;

    protected onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this)
        this.calcRhombus();
    }

    //菱形斜边长
    rhombusHypotenuse = 100;
    //菱形宽度
    rhombusWidth = 0
    //菱形高度
    rhombusHeight = 0
    //菱形宽度一半
    rhombusWidthHalf = 0
    //菱形高度一半
    rhombusHeightHalf = 0
    //菱形对应的矩形左下角和菱形下部位置的偏移（暂不可改）
    fixOffset:cc.Vec2 = cc.v2();
    //坐标原点和菱形对应被包围的矩形左下角位置的偏移(可改)
    rectOffset:cc.Vec2 = cc.v2();

    //计算菱形数据
    calcRhombus() {
        this.rhombusWidthHalf = Math.cos(22.5 * (Math.PI / 180)) * this.rhombusHypotenuse;
        this.rhombusHeightHalf = Math.sin(22.5 * (Math.PI / 180)) * this.rhombusHypotenuse;
        this.rhombusWidth = this.rhombusWidthHalf * 2;
        this.rhombusHeight = this.rhombusHeightHalf * 2;
        this.fixOffset = cc.v2(this.rhombusWidthHalf, 0);
        //偏移改这个
        this.rectOffset = cc.v2(0, 0)
    }

    //像素坐标转菱形锚点像素坐标
    transformOrigin(v2: cc.Vec2) {
        let x1 = Math.floor(v2.x / this.rhombusWidth);
        let y1 = Math.floor(v2.y / this.rhombusHeight);
        //可能的菱形像素坐标
        let maybePos = cc.v2(x1 * this.rhombusWidth + this.fixOffset.x, y1 * this.rhombusHeight + this.fixOffset.y);

        let vec = v2.sub(maybePos);
        //将点转成以菱形中心点为坐标原点
        vec.y -= this.rhombusHeight * 0.5;

        if (inRhombus(vec, {width: this.rhombusWidth, height: this.rhombusHeight})) {
            //在菱形内
        } else {
            if (vec.x > 0 && vec.y > 0) {
                //第一象限
                maybePos.x += this.rhombusWidthHalf;
                maybePos.y += this.rhombusHeightHalf;
            } else if (vec.x < 0 && vec.y > 0) {
                //第二象限
                maybePos.x -= this.rhombusWidthHalf;
                maybePos.y += this.rhombusHeightHalf;
            } else if (vec.x < 0 && vec.y < 0) {
                //第三象限
                maybePos.x -= this.rhombusWidthHalf;
                maybePos.y -= this.rhombusHeightHalf;
            } else if (vec.x > 0 && vec.y < 0) {
                //第四象限
                maybePos.x += this.rhombusWidthHalf;
                maybePos.y -= this.rhombusHeightHalf;
            } else {

            }
        }
        return maybePos;
    }

    //菱形锚点像素坐标转RC坐标
    origin2RC(v2: cc.Vec2) {
        //处理0.99999的问题
        return cc.v2(Math.floor((v2.x - this.fixOffset.x) / this.rhombusWidthHalf + 0.00001),
            Math.floor((v2.y - this.fixOffset.y) / this.rhombusHeightHalf + 0.00001));
    }

    //像素转格子坐标
    px2RC(v2: cc.Vec2) {
        return this.origin2RC(this.transformOrigin(v2.sub(this.rectOffset)));
    }

    //格子转像素
    rc2Px(v2: cc.Vec2) {
        return cc.v2(v2.x * this.rhombusWidthHalf + this.fixOffset.x + this.rectOffset.x,
            v2.y * this.rhombusHeightHalf + this.fixOffset.y + this.rectOffset.y);
    }

    //菱形格子转像素
    onClick(e: cc.Event.EventTouch) {
        let vec2 = e.getLocation();
        vec2.x -= cc.winSize.width * 0.5
        vec2.y -= cc.winSize.height * 0.5

        // let vec1 = this.px2RC(vec2);
        // let data = this.rc2Px(vec1);
        // console.log(`x=${data.x} y= ${data.y}`)
        // {
        //     data.x += 1;
        //     data.y += 1;
        //     let vec11 = this.px2RC(data);
        //     let data1 = this.rc2Px(vec11);
        //     console.log(`x=${data1.x} y= ${data1.y}`)
        // }

        // console.log(vec2);

        // vec2 = vec2.sub(this.rectOffset)
        //
        // let vec1 = this.transformOrigin(vec2);
        // let data = this.origin2RC(vec1);
        // console.log(`x=${data.x} y= ${data.y}`)

        return
        //相对坐标
        let vec = vec2.sub(cc.v2(this.node.x, this.node.y));

        //再转
        const bc = 100;
        //一半的宽
        const wh = Math.cos(22.5 * (Math.PI / 180)) * bc
        //一半的高
        const hh = Math.sin(22.5 * (Math.PI / 180)) * bc

        //调整坐标到菱形中间
        vec.y -= hh;

        console.log(inRhombus(vec, {width: wh * 2, height: hh * 2}))
        // console.log(f(vec, {width:wh * 0.5, height: hh*0.5}))


    }


}

/**
 * point  点是以菱形中心点为坐标原点
 * rhombus width和height都是整个长度不是一半
 * */
function inRhombus(point: cc.Vec2, rhombus: { width: number, height: number }) {
    //>0 在外面  ==0在菱形上   <0在菱形内
    return Math.abs(point.x * rhombus.height) + (Math.abs(point.y * rhombus.width)) - (rhombus.width * rhombus.height * 0.5) < 0;
}

//像素坐标转格子做
function f1() {

}

//海伦公式
function f2() {

}