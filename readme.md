### 动态显示tiled交错地图
* 主要功能
  1. 将tiled地图数据转为自定义地图数据
  2. 只渲染摄像机内的菱形(rect)
  2. 以当前屏幕中心缩放显示
  3. 简单的合成功能
  4. test1场景是左上角为原点显示地图
  5. test3场景是左上角为原点显示地图
* 代码api
```
//修改这里可以看到一些调试信息
const debug = false;
//像素转格子
this.px2RC(vec2);
//格子转像素
let vec2 = this.rc2Px(vec);
//如果是左上角为原点需要再转一下因为cocos是右手坐标系
let vec3 = this.pxLD2LUChild(this.rc2Px(this.hctemp.pos)); 
//当前矩形中包含的菱形
let clipRect1 = this.clipRect(rect1);                    
```
* 效果
  1. 合成
  [![baSc1P.gif](https://s4.ax1x.com/2022/03/04/baSc1P.gif)](https://imgtu.com/i/baSc1P)
  2. 调试
  [![baSUOO.gif](https://s4.ax1x.com/2022/03/04/baSUOO.gif)](https://imgtu.com/i/baSUOO)