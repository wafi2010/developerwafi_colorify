type CustomStyle = {
     textColor?: string
     bgColor?: string
     fontSize?: string
     bold?: boolean
     padding?: string
     border?: string
     borderRadius?: string
     textAlign?: "left" | "center" | "right"
     letterSpacing?: string
     textShadow?: string
     boxShadow?: string
     gradient?: string
     uppercase?: boolean
     lowercase?: boolean
}

export class Log {

     private static time() {
          return new Date().toLocaleTimeString()
     }

     private static print(msg: string, style: string) {
          console.log(`%c ${msg}`, style)
     }

     static success(msg: string) {
          this.print(
               `✔ [${this.time()}] ${msg}`,
               "color: green; font-weight: bold;"
          )
     }

     static danger(msg: string) {
          this.print(
               `✖ [${this.time()}] ${msg}`,
               "color: red; font-weight: bold;"
          )
     }

     static info(msg: string) {
          this.print(
               `ℹ [${this.time()}] ${msg}`,
               "color: black; background: yellow; padding:2px;"
          )
     }

     static custom(msg: string, options: CustomStyle = {}) {

          const {
               textColor = "black",
               bgColor = "transparent",
               fontSize = "14px",
               bold = false,
               padding = "4px",
               border,
               borderRadius,
               textAlign,
               letterSpacing,
               textShadow,
               boxShadow,
               gradient,
               uppercase,
               lowercase
          } = options

          if (uppercase) msg = msg.toUpperCase()
          if (lowercase) msg = msg.toLowerCase()

          const background = gradient
               ? `background: ${gradient};`
               : `background: ${bgColor};`

          const style = `
               color: ${textColor};
               ${background}
               font-size: ${fontSize};
               padding: ${padding};
               ${bold ? "font-weight: bold;" : ""}
               ${border ? `border: ${border};` : ""}
               ${borderRadius ? `border-radius: ${borderRadius};` : ""}
               ${textAlign ? `text-align: ${textAlign};` : ""}
               ${letterSpacing ? `letter-spacing: ${letterSpacing};` : ""}
               ${textShadow ? `text-shadow: ${textShadow};` : ""}
               ${boxShadow ? `box-shadow: ${boxShadow};` : ""}
          `

          this.print(msg, style)
     }
}