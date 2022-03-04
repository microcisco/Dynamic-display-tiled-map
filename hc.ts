
const {ccclass, property} = cc._decorator;

@ccclass
export default class hc extends cc.Component {

    @property({type: cc.SpriteFrame})
    sp: cc.SpriteFrame[] = [];

    private pic:cc.Sprite;

    private tb:Map<number, cc.SpriteFrame> = new Map<number, cc.SpriteFrame>()
    start () {
        this.ink();
    }

    ink() {
        if(this.pic) {
            return;
        }
        this.pic = this.node.getChildByName('pic').getComponent(cc.Sprite);
        for (const spElement of this.sp) {
            this.tb.set(parseInt(spElement.name), spElement);
        }
    }

    public id:number = 0;
    init(id:number) {
        this.ink();
        let spriteFrame = this.tb.get(id);
        if(!spriteFrame) {
            console.error('非法id');
        }
        this.pic.spriteFrame = spriteFrame;
        this.id = id;
    }

}
