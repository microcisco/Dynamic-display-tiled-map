
const debug = true;


import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;

const mapData:cc.Vec2[] = [{"x":0,"y":0,"data":9},{"x":2,"y":0,"data":7},{"x":4,"y":0,"data":6},{"x":6,"y":0,"data":0},{"x":8,"y":0,"data":0},{"x":10,"y":0,"data":0},{"x":12,"y":0,"data":0},{"x":14,"y":0,"data":0},{"x":16,"y":0,"data":0},{"x":18,"y":0,"data":0},{"x":20,"y":0,"data":0},{"x":22,"y":0,"data":0},{"x":24,"y":0,"data":0},{"x":26,"y":0,"data":0},{"x":28,"y":0,"data":0},{"x":30,"y":0,"data":0},{"x":32,"y":0,"data":0},{"x":34,"y":0,"data":0},{"x":36,"y":0,"data":0},{"x":38,"y":0,"data":0},{"x":-1,"y":1,"data":3},{"x":1,"y":1,"data":1},{"x":3,"y":1,"data":0},{"x":5,"y":1,"data":0},{"x":7,"y":1,"data":0},{"x":9,"y":1,"data":0},{"x":11,"y":1,"data":0},{"x":13,"y":1,"data":0},{"x":15,"y":1,"data":0},{"x":17,"y":1,"data":0},{"x":19,"y":1,"data":0},{"x":21,"y":1,"data":0},{"x":23,"y":1,"data":0},{"x":25,"y":1,"data":0},{"x":27,"y":1,"data":0},{"x":29,"y":1,"data":0},{"x":31,"y":1,"data":0},{"x":33,"y":1,"data":0},{"x":35,"y":1,"data":0},{"x":37,"y":1,"data":0},{"x":0,"y":2,"data":8},{"x":2,"y":2,"data":0},{"x":4,"y":2,"data":0},{"x":6,"y":2,"data":0},{"x":8,"y":2,"data":0},{"x":10,"y":2,"data":0},{"x":12,"y":2,"data":0},{"x":14,"y":2,"data":0},{"x":16,"y":2,"data":0},{"x":18,"y":2,"data":0},{"x":20,"y":2,"data":0},{"x":22,"y":2,"data":0},{"x":24,"y":2,"data":0},{"x":26,"y":2,"data":0},{"x":28,"y":2,"data":0},{"x":30,"y":2,"data":0},{"x":32,"y":2,"data":0},{"x":34,"y":2,"data":0},{"x":36,"y":2,"data":0},{"x":38,"y":2,"data":0},{"x":-1,"y":3,"data":0},{"x":1,"y":3,"data":0},{"x":3,"y":3,"data":0},{"x":5,"y":3,"data":0},{"x":7,"y":3,"data":0},{"x":9,"y":3,"data":0},{"x":11,"y":3,"data":0},{"x":13,"y":3,"data":0},{"x":15,"y":3,"data":0},{"x":17,"y":3,"data":0},{"x":19,"y":3,"data":0},{"x":21,"y":3,"data":0},{"x":23,"y":3,"data":0},{"x":25,"y":3,"data":0},{"x":27,"y":3,"data":0},{"x":29,"y":3,"data":0},{"x":31,"y":3,"data":0},{"x":33,"y":3,"data":0},{"x":35,"y":3,"data":0},{"x":37,"y":3,"data":0},{"x":0,"y":4,"data":8},{"x":2,"y":4,"data":0},{"x":4,"y":4,"data":0},{"x":6,"y":4,"data":0},{"x":8,"y":4,"data":0},{"x":10,"y":4,"data":0},{"x":12,"y":4,"data":0},{"x":14,"y":4,"data":0},{"x":16,"y":4,"data":0},{"x":18,"y":4,"data":0},{"x":20,"y":4,"data":0},{"x":22,"y":4,"data":0},{"x":24,"y":4,"data":0},{"x":26,"y":4,"data":0},{"x":28,"y":4,"data":0},{"x":30,"y":4,"data":0},{"x":32,"y":4,"data":0},{"x":34,"y":4,"data":0},{"x":36,"y":4,"data":0},{"x":38,"y":4,"data":0},{"x":-1,"y":5,"data":0},{"x":1,"y":5,"data":0},{"x":3,"y":5,"data":0},{"x":5,"y":5,"data":0},{"x":7,"y":5,"data":0},{"x":9,"y":5,"data":1},{"x":11,"y":5,"data":0},{"x":13,"y":5,"data":0},
    {"x":15,"y":5,"data":0},{"x":17,"y":5,"data":0},{"x":19,"y":5,"data":0},{"x":21,"y":5,"data":0},{"x":23,"y":5,"data":0},{"x":25,"y":5,"data":0},{"x":27,"y":5,"data":0},{"x":29,"y":5,"data":0},{"x":31,"y":5,"data":0},{"x":33,"y":5,"data":0},{"x":35,"y":5,"data":0},{"x":37,"y":5,"data":0},{"x":0,"y":6,"data":0},{"x":2,"y":6,"data":0},{"x":4,"y":6,"data":0},{"x":6,"y":6,"data":0},{"x":8,"y":6,"data":0},{"x":10,"y":6,"data":0},{"x":12,"y":6,"data":0},{"x":14,"y":6,"data":0},{"x":16,"y":6,"data":0},{"x":18,"y":6,"data":0},{"x":20,"y":6,"data":0},{"x":22,"y":6,"data":0},{"x":24,"y":6,"data":0},{"x":26,"y":6,"data":0},{"x":28,"y":6,"data":0},{"x":30,"y":6,"data":0},{"x":32,"y":6,"data":0},{"x":34,"y":6,"data":0},{"x":36,"y":6,"data":0},{"x":38,"y":6,"data":0},{"x":-1,"y":7,"data":0},{"x":1,"y":7,"data":0},{"x":3,"y":7,"data":0},{"x":5,"y":7,"data":0},{"x":7,"y":7,"data":0},{"x":9,"y":7,"data":0},{"x":11,"y":7,"data":0},{"x":13,"y":7,"data":0},{"x":15,"y":7,"data":0},{"x":17,"y":7,"data":0},{"x":19,"y":7,"data":0},{"x":21,"y":7,"data":0},{"x":23,"y":7,"data":0},{"x":25,"y":7,"data":0},{"x":27,"y":7,"data":0},{"x":29,"y":7,"data":0},{"x":31,"y":7,"data":0},{"x":33,"y":7,"data":0},{"x":35,"y":7,"data":0},{"x":37,"y":7,"data":0},{"x":0,"y":8,"data":0},{"x":2,"y":8,"data":0},{"x":4,"y":8,"data":0},{"x":6,"y":8,"data":0},{"x":8,"y":8,"data":0},{"x":10,"y":8,"data":0},{"x":12,"y":8,"data":0},{"x":14,"y":8,"data":0},{"x":16,"y":8,"data":0},{"x":18,"y":8,"data":0},{"x":20,"y":8,"data":0},{"x":22,"y":8,"data":0},{"x":24,"y":8,"data":0},{"x":26,"y":8,"data":0},{"x":28,"y":8,"data":0},{"x":30,"y":8,"data":0},{"x":32,"y":8,"data":0},{"x":34,"y":8,"data":0},{"x":36,"y":8,"data":0},{"x":38,"y":8,"data":0},{"x":-1,"y":9,"data":0},{"x":1,"y":9,"data":0},{"x":3,"y":9,"data":0},{"x":5,"y":9,"data":0},{"x":7,"y":9,"data":0},{"x":9,"y":9,"data":0},{"x":11,"y":9,"data":0},{"x":13,"y":9,"data":0},{"x":15,"y":9,"data":0},{"x":17,"y":9,"data":0},{"x":19,"y":9,"data":0},{"x":21,"y":9,"data":0},{"x":23,"y":9,"data":0},{"x":25,"y":9,"data":0},{"x":27,"y":9,"data":0},{"x":29,"y":9,"data":0},{"x":31,"y":9,"data":0},{"x":33,"y":9,"data":0},{"x":35,"y":9,"data":0},{"x":37,"y":9,"data":0},{"x":0,"y":10,"data":0},{"x":2,"y":10,"data":0},{"x":4,"y":10,"data":0},{"x":6,"y":10,"data":0},{"x":8,"y":10,"data":0},{"x":10,"y":10,"data":0},{"x":12,"y":10,"data":0},{"x":14,"y":10,"data":0},{"x":16,"y":10,"data":0},{"x":18,"y":10,"data":0},{"x":20,"y":10,"data":0},{"x":22,"y":10,"data":0},{"x":24,"y":10,"data":0},{"x":26,"y":10,"data":0},{"x":28,"y":10,"data":0},{"x":30,"y":10,"data":0},{"x":32,"y":10,"data":0},{"x":34,"y":10,"data":0},{"x":36,"y":10,"data":0},{"x":38,"y":10,"data":0},{"x":-1,"y":11,"data":0},{"x":1,"y":11,"data":0},{"x":3,"y":11,"data":0},{"x":5,"y":11,"data":0},{"x":7,"y":11,"data":0},{"x":9,"y":11,"data":0},{"x":11,"y":11,"data":0},{"x":13,"y":11,"data":0},{"x":15,"y":11,"data":0},{"x":17,"y":11,"data":0},{"x":19,"y":11,"data":0},{"x":21,"y":11,"data":0},{"x":23,"y":11,"data":0},{"x":25,"y":11,"data":0},{"x":27,"y":11,"data":0},{"x":29,"y":11,"data":0},{"x":31,"y":11,"data":0},{"x":33,"y":11,"data":0},{"x":35,"y":11,"data":0},{"x":37,"y":11,"data":0},{"x":0,"y":12,"data":0},{"x":2,"y":12,"data":0},{"x":4,"y":12,"data":0},{"x":6,"y":12,"data":0},{"x":8,"y":12,"data":0},{"x":10,"y":12,"data":0},{"x":12,"y":12,"data":0},{"x":14,"y":12,"data":0},{"x":16,"y":12,"data":0},{"x":18,"y":12,"data":0},{"x":20,"y":12,"data":0},{"x":22,"y":12,"data":0},{"x":24,"y":12,"data":0},{"x":26,"y":12,"data":0},{"x":28,"y":12,"data":0},{"x":30,"y":12,"data":0},{"x":32,"y":12,"data":0},{"x":34,"y":12,"data":0},{"x":36,"y":12,"data":0},{"x":38,"y":12,"data":0},{"x":-1,"y":13,"data":0},{"x":1,"y":13,"data":0},{"x":3,"y":13,"data":0},{"x":5,"y":13,"data":0},{"x":7,"y":13,"data":0},{"x":9,"y":13,"data":0},{"x":11,"y":13,"data":0},{"x":13,"y":13,"data":0},{"x":15,"y":13,"data":0},{"x":17,"y":13,"data":0},{"x":19,"y":13,"data":0},{"x":21,"y":13,"data":0},{"x":23,"y":13,"data":0},{"x":25,"y":13,"data":0},{"x":27,"y":13,"data":0},{"x":29,"y":13,"data":0},{"x":31,"y":13,"data":0},{"x":33,"y":13,"data":0},{"x":35,"y":13,"data":0},{"x":37,"y":13,"data":0},{"x":0,"y":14,"data":0},{"x":2,"y":14,"data":0},{"x":4,"y":14,"data":0},{"x":6,"y":14,"data":0},{"x":8,"y":14,"data":0},{"x":10,"y":14,"data":0},{"x":12,"y":14,"data":0},{"x":14,"y":14,"data":0},{"x":16,"y":14,"data":0},{"x":18,"y":14,"data":0},{"x":20,"y":14,"data":0},{"x":22,"y":14,"data":0},{"x":24,"y":14,"data":0},{"x":26,"y":14,"data":0},{"x":28,"y":14,"data":0},{"x":30,"y":14,"data":0},{"x":32,"y":14,"data":0},{"x":34,"y":14,"data":0},{"x":36,"y":14,"data":0},{"x":38,"y":14,"data":0},{"x":-1,"y":15,"data":0},{"x":1,"y":15,"data":0},{"x":3,"y":15,"data":0},{"x":5,"y":15,"data":0},{"x":7,"y":15,"data":0},{"x":9,"y":15,"data":0},{"x":11,"y":15,"data":0},{"x":13,"y":15,"data":0},{"x":15,"y":15,"data":0},{"x":17,"y":15,"data":0},{"x":19,"y":15,"data":0},{"x":21,"y":15,"data":0},{"x":23,"y":15,"data":0},{"x":25,"y":15,"data":0},{"x":27,"y":15,"data":0},{"x":29,"y":15,"data":0},{"x":31,"y":15,"data":0},{"x":33,"y":15,"data":0},{"x":35,"y":15,"data":0},{"x":37,"y":15,"data":0},{"x":0,"y":16,"data":0},{"x":2,"y":16,"data":0},{"x":4,"y":16,"data":0},{"x":6,"y":16,"data":0},{"x":8,"y":16,"data":0},{"x":10,"y":16,"data":0},{"x":12,"y":16,"data":0},{"x":14,"y":16,"data":0},{"x":16,"y":16,"data":0},{"x":18,"y":16,"data":0},{"x":20,"y":16,"data":0},{"x":22,"y":16,"data":0},{"x":24,"y":16,"data":0},{"x":26,"y":16,"data":0},{"x":28,"y":16,"data":0},{"x":30,"y":16,"data":0},{"x":32,"y":16,"data":0},{"x":34,"y":16,"data":0},{"x":36,"y":16,"data":0},{"x":38,"y":16,"data":0},{"x":-1,"y":17,"data":0},{"x":1,"y":17,"data":0},{"x":3,"y":17,"data":0},{"x":5,"y":17,"data":0},{"x":7,"y":17,"data":0},{"x":9,"y":17,"data":0},{"x":11,"y":17,"data":0},{"x":13,"y":17,"data":0},{"x":15,"y":17,"data":0},{"x":17,"y":17,"data":0},{"x":19,"y":17,"data":0},{"x":21,"y":17,"data":0},{"x":23,"y":17,"data":0},{"x":25,"y":17,"data":0},{"x":27,"y":17,"data":0},{"x":29,"y":17,"data":0},{"x":31,"y":17,"data":0},{"x":33,"y":17,"data":0},{"x":35,"y":17,"data":0},{"x":37,"y":17,"data":0},{"x":0,"y":18,"data":0},{"x":2,"y":18,"data":0},{"x":4,"y":18,"data":0},{"x":6,"y":18,"data":0},{"x":8,"y":18,"data":0},{"x":10,"y":18,"data":0},{"x":12,"y":18,"data":0},{"x":14,"y":18,"data":1},{"x":16,"y":18,"data":0},{"x":18,"y":18,"data":0},{"x":20,"y":18,"data":0},{"x":22,"y":18,"data":0},{"x":24,"y":18,"data":0},{"x":26,"y":18,"data":0},{"x":28,"y":18,"data":0},{"x":30,"y":18,"data":0},{"x":32,"y":18,"data":0},{"x":34,"y":18,"data":0},{"x":36,"y":18,"data":0},{"x":38,"y":18,"data":0},{"x":-1,"y":19,"data":0},{"x":1,"y":19,"data":0},{"x":3,"y":19,"data":0},{"x":5,"y":19,"data":0},{"x":7,"y":19,"data":0},{"x":9,"y":19,"data":0},{"x":11,"y":19,"data":0},{"x":13,"y":19,"data":0},{"x":15,"y":19,"data":0},{"x":17,"y":19,"data":0},{"x":19,"y":19,"data":0},{"x":21,"y":19,"data":0},{"x":23,"y":19,"data":0},{"x":25,"y":19,"data":0},{"x":27,"y":19,"data":0},{"x":29,"y":19,"data":0},{"x":31,"y":19,"data":0},{"x":33,"y":19,"data":0},{"x":35,"y":19,"data":0},{"x":37,"y":19,"data":0}]


/**
 * point  点是以菱形中心点为坐标原点
 * rhombus width和height都是整个长度不是一半
 * */
function inRhombus(point: cc.Vec2, rhombus: { width: number, height: number }) {
    //>0 在外面  ==0在菱形上   <0在菱形内
    return Math.abs(point.x * rhombus.height) + (Math.abs(point.y * rhombus.width)) - (rhombus.width * rhombus.height * 0.5) < 0;
}

@ccclass
export default class test2 extends cc.Component {
    @property({type: cc.SpriteFrame})
    sp: cc.SpriteFrame[] = [];
    @property({type: cc.Prefab})
    pref: cc.Prefab = null;

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

        this.rhombusWidthHalf = 265 * 0.5;
        this.rhombusHeightHalf = 128 * 0.5;
        this.rhombusHypotenuse = Math.sqrt(this.rhombusWidthHalf * this.rhombusWidthHalf + this.rhombusHeightHalf * this.rhombusHeightHalf);

        // this.rhombusWidthHalf = Math.cos(22.5 * (Math.PI / 180)) * this.rhombusHypotenuse;
        // this.rhombusHeightHalf = Math.sin(22.5 * (Math.PI / 180)) * this.rhombusHypotenuse;
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


    spMap:Map<number, cc.SpriteFrame> = new Map();
    initSp() {
        this.spMap.set(9, this.sp[0]);
        this.spMap.set(7, this.sp[1]);
        this.spMap.set(6, this.sp[2]);
        this.spMap.set(3, this.sp[3]);
        this.spMap.set(1, this.sp[4]);
        this.spMap.set(8, this.sp[5]);
    }

    scaleW: number = 1;
    protected onLoad() {
        this.calcRhombus();

        this.initSp();
        this.initMapDD();
        if(debug) {
            this.initMap();
        }

        let map = cc.Canvas.instance.node.getChildByName('map');
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_MOVE, (event:cc.Touch)=>{
            map.position = map.position.add(cc.v3(event.getDelta()))

            if(debug) {
                this.testRect();
            } else {
                this.showMap();
            }
        })
        cc.Canvas.instance.node.on(cc.Node.EventType.MOUSE_WHEEL, (evt: cc.Event.EventMouse)=>{
            let scrollY: number = evt.getScrollY();
            scrollY /= Math.abs(scrollY);

            let s = scrollY > 0?0.03:-0.03

            this.scaleW += s;
            if(this.scaleW < 0.1) {
                this.scaleW = 0.1;
            }
            map.scale = this.scaleW;

        }, this)
    }


    getMapStr(v2:cc.Vec2) {
        return `${v2.x}_${v2.y}`;
    }
    hasShowRc:Map<string, cc.Node> = new Map();
    showMap() {
        let map = cc.Canvas.instance.node.getChildByName('map');
        let rect = cc.Canvas.instance.node.getChildByName('rect');
        rect.active = true;
        let vec2 = map.convertToNodeSpaceAR(rect.convertToWorldSpaceAR(cc.Vec2.ZERO));

        let rect1 = cc.rect(vec2.x, vec2.y, rect.width, rect.height);
        let clipRect1 = this.clipRect(rect1);
        if(!clipRect1) {
            return;
        }
        this.hasShowRc.forEach(v=>v.destroy());
        this.hasShowRc.clear();

        for (const mapDatum of clipRect1) {
            let node = cc.instantiate(this.pref);
            let data:cc.SpriteFrame = this.mapFormData.get(this.getMapStr(mapDatum)) as cc.SpriteFrame;
            let spriteFrame;
            if(data && data['data']) {
                spriteFrame = this.spMap.get(data['data']);
            }
            if(spriteFrame) {
                node.getChildByName('pic').getComponentInChildren(cc.Sprite).spriteFrame = spriteFrame;
            } else {
                node.getChildByName('pic').getComponentInChildren(cc.Sprite).spriteFrame = null;
            }
            node.getComponentInChildren(cc.Label).string = `${mapDatum.x},${mapDatum.y}`
            node.position = cc.v3(this.rc2Px(mapDatum));
            node.zIndex = 100 - mapDatum.y;
            this.node.addChild(node);
            this.hasShowRc.set(`${mapDatum.x}_${mapDatum.y}`, node);
        }
    }

    testRect() {
        let map = cc.Canvas.instance.node.getChildByName('map');
        let rect = cc.Canvas.instance.node.getChildByName('rect');
        rect.active = true;

        let vec2 = map.convertToNodeSpaceAR(rect.convertToWorldSpaceAR(cc.Vec2.ZERO));

        let rect1 = cc.rect(vec2.x, vec2.y, rect.width, rect.height);

        let clipRect1 = this.clipRect(rect1);
        if(!clipRect1) {
            return;
        }

        this.rcTable.forEach((a)=>{
            a.opacity = 255;
        })

        for (const mapDatum of clipRect1) {
            let node = this.rcTable.get(`${mapDatum.x}_${mapDatum.y}`);
            if(node) {
                node.opacity = 10;
            }
        }
    }

    private mapFormData:Map<string, unknown> = new Map();
    initMapDD() {
        for (const mapDatum of mapData) {
            this.mapFormData.set(this.getMapStr(mapDatum), mapDatum);
        }
    }

    rcTable:Map<string, cc.Node> = new Map();
    initMap() {
        for (const mapDatum of mapData) {
            let node = cc.instantiate(this.pref);
            let spriteFrame = this.spMap.get(mapDatum['data']);
            if(spriteFrame) {
                node.getChildByName('pic').getComponentInChildren(cc.Sprite).spriteFrame = spriteFrame;
            } else {
                node.getChildByName('pic').getComponentInChildren(cc.Sprite).spriteFrame = null;
            }
            node.getComponentInChildren(cc.Label).string = `${mapDatum.x},${mapDatum.y}`
            node.position = cc.v3(this.rc2Px(mapDatum));
            node.zIndex = 100 - mapDatum.y;
            this.node.addChild(node);
            this.rcTable.set(`${mapDatum.x}_${mapDatum.y}`, node);
        }
    }

    private old;
    clipRect(rect:cc.Rect) {
        const p = cc.v2(rect.x, rect.y);
        const width = rect.width * (1 / this.scaleW);
        const height = rect.height * (1 / this.scaleW);

        //格子坐标
        let vecS = this.px2RC(p);
        //调大范围改这里
        vecS = cc.v2(vecS.x - 1, vecS.y - 1);
        const vv = vecS.clone();
        if(this.old && this.old.x === vecS.x && this.old.y === vecS.y) {
            return null;
        }
        let vecE = this.px2RC(p.add(cc.v2(width, height)));
        //调大范围改这里
        vecE = cc.v2(vecE.x + 1, vecE.y + 1);

        const res = [];
        let cur = cc.v2(vecS);
        while (cur.x < vecE.x || cur.y < vecE.y) {
            // cur = cur.clone();
            res.push(cc.v2(cur));
            if(cur.x % 2 === 0) {
                //偶数
                cur.x += 1;
                cur.y += 1;
            } else {
                //奇数
                cur.x += 1;
                cur.y -= 1;
            }
            if (cur.x > vecE.x) {
                //换行
                cur.x = vecS.x;
                vecS.y += 2;
                cur.y = vecS.y;
            }
        }
        return res;
    }

    rcAround(v2:cc.Vec2) {
        return [
            cc.v2(v2.x + 1, v2.y + 1),  //第一象限
            cc.v2(v2.x - 1, v2.y + 1),  //第二象限
            cc.v2(v2.x - 1, v2.y - 1),  //第三象限
            cc.v2(v2.x + 1, v2.y - 1),  //第四象限
        ];
    }


}