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

    //???????????????
    rhombusHypotenuse = 100;
    //????????????
    rhombusWidth = 0
    //????????????
    rhombusHeight = 0
    //??????????????????
    rhombusWidthHalf = 0
    //??????????????????
    rhombusHeightHalf = 0
    //??????????????????????????????????????????????????????????????????????????????
    fixOffset:cc.Vec2 = cc.v2();
    //?????????????????????????????????????????????????????????????????????(??????)
    rectOffset:cc.Vec2 = cc.v2();

    //??????????????????
    calcRhombus() {
        this.rhombusWidthHalf = Math.cos(22.5 * (Math.PI / 180)) * this.rhombusHypotenuse;
        this.rhombusHeightHalf = Math.sin(22.5 * (Math.PI / 180)) * this.rhombusHypotenuse;
        this.rhombusWidth = this.rhombusWidthHalf * 2;
        this.rhombusHeight = this.rhombusHeightHalf * 2;
        this.fixOffset = cc.v2(this.rhombusWidthHalf, 0);
        //???????????????
        this.rectOffset = cc.v2(0, 0)
    }

    //???????????????????????????????????????
    transformOrigin(v2: cc.Vec2) {
        let x1 = Math.floor(v2.x / this.rhombusWidth);
        let y1 = Math.floor(v2.y / this.rhombusHeight);
        //???????????????????????????
        let maybePos = cc.v2(x1 * this.rhombusWidth + this.fixOffset.x, y1 * this.rhombusHeight + this.fixOffset.y);

        let vec = v2.sub(maybePos);
        //?????????????????????????????????????????????
        vec.y -= this.rhombusHeight * 0.5;

        if (inRhombus(vec, {width: this.rhombusWidth, height: this.rhombusHeight})) {
            //????????????
        } else {
            if (vec.x > 0 && vec.y > 0) {
                //????????????
                maybePos.x += this.rhombusWidthHalf;
                maybePos.y += this.rhombusHeightHalf;
            } else if (vec.x < 0 && vec.y > 0) {
                //????????????
                maybePos.x -= this.rhombusWidthHalf;
                maybePos.y += this.rhombusHeightHalf;
            } else if (vec.x < 0 && vec.y < 0) {
                //????????????
                maybePos.x -= this.rhombusWidthHalf;
                maybePos.y -= this.rhombusHeightHalf;
            } else if (vec.x > 0 && vec.y < 0) {
                //????????????
                maybePos.x += this.rhombusWidthHalf;
                maybePos.y -= this.rhombusHeightHalf;
            } else {

            }
        }
        return maybePos;
    }

    //???????????????????????????RC??????
    origin2RC(v2: cc.Vec2) {
        //??????0.99999?????????
        return cc.v2(Math.floor((v2.x - this.fixOffset.x) / this.rhombusWidthHalf + 0.00001),
            Math.floor((v2.y - this.fixOffset.y) / this.rhombusHeightHalf + 0.00001));
    }

    //?????????????????????
    px2RC(v2: cc.Vec2) {
        return this.origin2RC(this.transformOrigin(v2.sub(this.rectOffset)));
    }

    //???????????????
    rc2Px(v2: cc.Vec2) {
        return cc.v2(v2.x * this.rhombusWidthHalf + this.fixOffset.x + this.rectOffset.x,
            v2.y * this.rhombusHeightHalf + this.fixOffset.y + this.rectOffset.y);
    }

    //?????????????????????
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
        //????????????
        let vec = vec2.sub(cc.v2(this.node.x, this.node.y));

        //??????
        const bc = 100;
        //????????????
        const wh = Math.cos(22.5 * (Math.PI / 180)) * bc
        //????????????
        const hh = Math.sin(22.5 * (Math.PI / 180)) * bc

        //???????????????????????????
        vec.y -= hh;

        console.log(inRhombus(vec, {width: wh * 2, height: hh * 2}))
        // console.log(f(vec, {width:wh * 0.5, height: hh*0.5}))


    }


}

/**
 * point  ???????????????????????????????????????
 * rhombus width???height??????????????????????????????
 * */
function inRhombus(point: cc.Vec2, rhombus: { width: number, height: number }) {
    //>0 ?????????  ==0????????????   <0????????????
    return Math.abs(point.x * rhombus.height) + (Math.abs(point.y * rhombus.width)) - (rhombus.width * rhombus.height * 0.5) < 0;
}

//????????????????????????
function f1() {

}

//????????????
function f2() {

}