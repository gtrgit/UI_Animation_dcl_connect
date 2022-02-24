import { GlobalCanvas } from "./dynamicimage/canvas";
import { DynamicImage } from "./dynamicimage/dynamicImage";
import { DCLConnectEase } from "./dynamicimage/ease";




const imageSrc:string = "images/testimage.png"
export const imageTexture = new Texture(imageSrc)
//const imageTexture = new Texture(imageSrc)

const canvas = new UICanvas()


// let icon = new UIImage(canvas, imageTexture)
// icon.sourceWidth = 682
// icon.sourceHeight = 787
// icon.width = 42
// icon.height = 42 
// icon.positionX = 40
// icon.positionY = 115
// icon.hAlign = "center"
// icon.vAlign = "center"
// //icon.isPointerBlocker = false


export interface GUIImageOptions {
    width: number | string
    height: number | string
    sourceWidth: number
    sourceHeight: number
    sourceX: number
    sourceY: number
    positionX: number
    positionY: number
    vAlign: string
    hAlign: string
}


export const createImage = (
    name: string,
    imageTexture: Texture,
    options: GUIImageOptions
): UIImage => {
    let image =  new UIImage(GlobalCanvas, imageTexture)
    image.name = name
    image.width = options.width
    image.height = options.height
    image.sourceLeft = options.sourceX
    image.sourceTop = options.sourceY
    image.sourceWidth = options.sourceWidth//typeof options.width == 'string' ? 0 : options.width
    image.sourceHeight = options.sourceHeight//typeof options.height == 'string' ? 0 : options.height
    image.positionX = options.positionX
    image.positionY = options.positionY
    image.vAlign = options.vAlign
    image.hAlign = options.hAlign
    image.sizeInPixels = true
    image.opacity = 1
    return image
}



export const audioIcon = () : DynamicImage => {
    let image = createImage("audioIcon", imageTexture, {
        width: 42,
        height: 42,
        sourceWidth: 682,
        sourceHeight: 787,
        sourceX: 0,
        sourceY: 0,
        positionX: 0,
        positionY: 115,
        vAlign: "center",
        hAlign: "center",
    })
    image.opacity = 1
    return new DynamicImage(image)
}
 let test = audioIcon()

  test.moveTo(111,211,1,DCLConnectEase.easeInBounce)


/////////////////////////////////////////////////////


///////////////////
export const topLeftBorder = new Texture("images/top_left_white_corner.png")
export const bottomLeftBorder = new Texture("images/bottom_left_white_corner.png")
export const topRightBorder = new Texture("images/top_right_white_corner.png")
export const bottomRightBorder = new Texture("images/bottom_right_white_corner.png")
export const uiOnIcon = new Texture("images/testimage.png")
export const uiOffIcon = new Texture("images/ui_off.png")
export const rectangle = new Texture("images/rectangle.png")


 const polyGraph = new Texture("images/pgHeader.png")






 const uiOnOffRect = new UIContainerRect(canvas)
 uiOnOffRect.positionX = 500
 uiOnOffRect.positionY = 45
 uiOnOffRect.width = 70
 uiOnOffRect.height = 50
 uiOnOffRect.visible = true
 uiOnOffRect.hAlign = "left"
 uiOnOffRect.vAlign = "top"
 uiOnOffRect.color = Color4.Black()
 uiOnOffRect.opacity = .6
 //uiOnOffRect.isPointerBlocker = true
 

 let uiText = new UIText(uiOnOffRect)
 uiText.value = "UI"
 uiText.fontSize = 10
 uiText.height = 15
 uiText.positionY = 20
 uiText.positionX = 15
 uiText.hAlign = "center"
 uiText.vAlign = "top"
 
 const onIcon = new UIImage(uiOnOffRect,uiOnIcon)
 onIcon.sourceWidth = 687//128
 onIcon.sourceHeight = 728//64
 onIcon.positionY = 0
 onIcon.width = 32
 onIcon.height = 16 

 onIcon.isPointerBlocker = true
 onIcon.visible = true
 onIcon.opacity = 1
 onIcon.onClick = new OnPointerDown(()=>{

    log('clicked off')
    //uiOnOffRect.visible = false
     topLeft().hide()

//  uiLoad("topLeft",topLeftBorder,2,11,11,600,40).moveTo(420,50,.5,DCLConnectEase.easeOutSine)
//  uiLoad("topRight",topRightBorder,2,11,11,650,40).moveTo(750,50,.5,DCLConnectEase.easeOutSine)
//  uiLoad("bottomRight",bottomRightBorder,2,11,11,650,30).moveTo(750,5,.5,DCLConnectEase.easeOutSine)
//  uiLoad("bottomLeft",bottomLeftBorder,2,11,11,600,30).moveTo(420,5,.5,DCLConnectEase.easeOutSine,() => { 
     
         
//      uiLoad("rectangle2",rectangle,1,333,47,421,49)

//      uiLoad("topLeft",topLeftBorder,3,11,11,440,30).moveTo(430,45,.5,DCLConnectEase.easeOutSine)
//      uiLoad("topRight",topRightBorder,3,11,11,450,30).moveTo(470,45,.5,DCLConnectEase.easeOutSine)
//      uiLoad("bottomRight",bottomRightBorder,3,11,11,450,25).moveTo(470,10,.5,DCLConnectEase.easeOutSine)
//      uiLoad("bottomLeft",bottomLeftBorder,3,11,11,440,25).moveTo(430,10,.5,DCLConnectEase.easeOutSine,() => {
         
//              uiLoad("rectangle3",rectangle,1,42,38,431,44)

//          })

     
//      })

 })








    
    const uiLoad = (
        name: string,
        uiImage: Texture,
        scale: number,
        sourceWidth: number,
        sourceHeight: number,
        posX: number,
        posY: number
    ) : DynamicImage => {
        let image = createImage(name, uiImage, {
            width: sourceWidth / scale,
            height: sourceHeight / scale,
            sourceWidth: sourceWidth,   
            sourceHeight: sourceHeight,
            sourceX: 0,
            sourceY: 0,
            positionX: posX,
            positionY: posY,
            vAlign: "top",
            hAlign: "left",
        })
        image.opacity = 1
        return new DynamicImage(image)
    }


// uiLoad("topLeft",topLeftBorder,2,11,11,300,40).moveTo(200,50,.5,DCLConnectEase.easeOutSine)
// uiLoad("topRight",topRightBorder,2,11,11,350,40).moveTo(410,50,.5,DCLConnectEase.easeOutSine)
// uiLoad("bottomRight",bottomRightBorder,2,11,11,350,30).moveTo(410,5,.5,DCLConnectEase.easeOutSine)
// uiLoad("bottomLeft",bottomLeftBorder,2,11,11,300,30).moveTo(200,5,.5,DCLConnectEase.easeOutSine,() => { 
//     // let logoRect = new UIContainerRect(canvas)
//     // openUI(logoRect,"logoRect",200,50,290,50),
//     // openUI()
//     uiLoad("rectangle1",rectangle,1,214,48,201,49).fadeIn(.1),

//     uiLoad("polyGraph",polyGraph,1.7,861,109,210,35).fadeIn(2),
    
//     uiLoad("topLeft",topLeftBorder,2,11,11,400,30).moveTo(370,45,.5,DCLConnectEase.easeOutSine)
//     uiLoad("topRight",topRightBorder,2,11,11,400,30).moveTo(400,45,.5,DCLConnectEase.easeOutSine)
//     uiLoad("bottomRight",bottomRightBorder,2,11,11,400,30).moveTo(400,10,.5,DCLConnectEase.easeOutSine)
//     uiLoad("bottomLeft",bottomLeftBorder,2,11,11,400,30).moveTo(370,10,.5,DCLConnectEase.easeOutSine,() => { 
//         //loadRect()
//         uiOnOffRect.visible = true
//     })

// })








export const topLeft = () : DynamicImage => {
    let image = createImage("topLeft", topLeftBorder, {
        width: 11,
        height: 11,
        sourceWidth: 11,
        sourceHeight: 11,
        sourceX: 0,
        sourceY: 0,
        positionX: 300,
        positionY: 30,
        vAlign: "top",
        hAlign: "left",
    })
    image.opacity = 1
    return new DynamicImage(image)
}
topLeft().moveTo(200,50,.5,DCLConnectEase.easeOutSine)



// // function openUI(rectName:UIContainerRect,id:string,posX: number, posY:number,width: number,height:number) {
// //     rectName = new UIContainerRect(canvas)
// //     rectName.positionX = posX
// //     rectName.positionY = posY
// //     rectName.width = width
// //     rectName.height = height
// //     rectName.visible = true
// //     rectName.hAlign = "left"
// //     rectName.vAlign = "top"
// //     rectName.color = Color4.Black()
// //     rectName.opacity = .3
// //     rectName.name = id
// //     log(rectName.name)
// //     }


//     function openUI() {
//         const UIRect = new UIContainerRect(canvas)
//         UIRect.positionX = 200
//         UIRect.positionY = 50
//         UIRect.width = 213
//         UIRect.height = 50
//         UIRect.visible = true
//         UIRect.hAlign = "left"
//         UIRect.vAlign = "top"
//         UIRect.color = Color4.Black()
//         UIRect.opacity = .3
        
//         }
    

        
//     function uiOnReact() {
//         const UIRect = new UIContainerRect(canvas)
//         UIRect.positionX = 420
//         UIRect.positionY = 50
//         UIRect.width = 320
//         UIRect.height = 50
//         UIRect.visible = true
//         UIRect.hAlign = "left"
//         UIRect.vAlign = "top"
//         UIRect.color = Color4.Black()
//         UIRect.opacity = .3
        
//         }
    
    

 
// function uiOff(){

// }