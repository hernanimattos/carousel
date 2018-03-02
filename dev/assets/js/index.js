class Carousel {

	constructor(){
		this.dots = document.querySelectorAll(".dots");
		this.wrapper = document.querySelectorAll(".carrousel-wrapper")[0];
		this.cellWidth = Array.from(document.querySelectorAll(".cell-custom"));
		this.getDotClicked();
		this.calculateWrapper();
		;
	}

	 getDotClicked(){
		 Array.from(this.dots).map((d, i)=>{
			 d.addEventListener('click', (e)=>{
				 this.moveSlide(i);
			 })
		 })
	 }
	 moveSlide(index){
		 console.log(this.cellWidth[index].clientWidth + this.calculateWrapper()[index]);

		 this.wrapper.style.marginLeft = `-${(this.cellWidth[index].clientWidth * index) + this.calculateWrapper()[index]}px`;
		console.log(this.wrapper.style.marginLeft);
	 }
	 calculateWrapper(){
		const margins = this.cellWidth.map(p=>{
			const elem = window.getComputedStyle(p);
			const marginArray = parseInt(elem.marginLeft.replace("px", ""), 10) + parseInt(elem.marginRight.replace("px", ""), 10);
			return marginArray;
		})
		return margins;
	 }

}
const car  = new Carousel();

