export class TorchModel { 
    c: CanvasRenderingContext2D ;
    canvas: any ;
    gradient: any;
    centerX: number;
    centerY: number;
    triangleHeight: number;
    gap: number;
    torches: {color: string; angle: number, height: number}[];
    constructor(canvas: any, torches) { 
        this.torches = torches;
        canvas.width  = window.innerWidth ;
        this.c = canvas.getContext("2d") ;
        this.canvas = canvas; 
        this.centerX = canvas.width / 2 ;
        this.centerY = canvas.height  ;
        this.triangleHeight = this.canvas.height * 0.5 ;
        this.gap = Math.PI / 12 ;
    }

    startAnimation = () => {
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for(let i = 0; i < this.torches.length; i++) {
            this.triangleHeight = this.torches[i].height ;
            this.drawTriangle(this.torches[i].angle, this.torches[i].color);
            this.torches[i].angle += Math.PI / 180 ;
        }
    }   

    drawTriangle = (angle: number, color: string) => {
        // angle => will be the angle in radians w.r.to vertical.
        let w = this.canvas.width ;
        let h = this.canvas.height; 
        let l = this.triangleHeight ;  

        this.c.beginPath();
        this.c.moveTo(this.centerX, this.centerY);
        let p1 = {
            x: (w / 2 ) + l * Math.sin(angle),
            y: h - l * Math.cos(angle)
        }

        let p2 = { 
            x: ( w / 2 ) + l * Math.sin(angle + this.gap),
            y: h -  l * Math.cos(angle + this.gap)
        }

        const gradient = this.c.createLinearGradient(this.centerX, this.centerY, p2.x - p1.x, p2.y - p1.y);
        gradient.addColorStop(0, 'red');   
        gradient.addColorStop(0.5, 'rgba(0, 0, 255, 0.307)');
        gradient.addColorStop(1, 'rgba(0, 0, 255, 0)');

        this.c.lineTo(p1.x, p1.y);
        this.c.lineTo(p2.x, p2.y);
        // this.c.fillStyle = color;
        this.c.fillStyle = gradient;
        this.c.fill();
        this.c.closePath();
    }

    getRandomAngle = () => {
        const randomFactor = Math.random() * 2 - 1;
        const minAngle = -60;
        const maxAngle = 60;
        const randomAngle = randomFactor * (maxAngle - minAngle) + minAngle;
        const radians = randomAngle * (Math.PI / 180);
        return radians;
      }
}