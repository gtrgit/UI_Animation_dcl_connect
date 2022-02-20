import { GlobalCanvas } from "./dynamicimage/canvas";
import { DynamicImage } from "./dynamicimage/dynamicImage";

const imageSrc:string = "images/testimage.png"
export const imageTexture = new Texture(imageSrc)
//const imageTexture = new Texture(imageSrc)

const canvas = new UICanvas()


let icon = new UIImage(canvas, imageTexture)
icon.sourceWidth = 682
icon.sourceHeight = 787
icon.width = 42
icon.height = 42 
icon.positionX = 40
icon.positionY = 115
icon.hAlign = "center"
icon.vAlign = "center"
//icon.isPointerBlocker = false




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
 let test = audioIcon().show
  
//  test.moveTo(111,211,1)
//  test.moveTo(0,211,.1)
 

// audioIcon().moveTo(80,200,1000,undefined,undefined,100)

// log(audioIcon().checkIsAnimating())
// let test = audioIcon()
//test.show()
//test.enable()