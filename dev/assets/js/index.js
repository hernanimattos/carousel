// const  utils  = require('./utils/index.js')

class Carousel {
  constructor() {
    this.dots = document.querySelectorAll(".dots");
    this.wrapper = document.querySelectorAll(".carousel-wrapper")[0];
    this.cellWidth = Array.from(document.querySelectorAll(".cell-item"));
    this.trashItem = Array.from(document.querySelectorAll(".value-trash"));
    this.dataValues = Array.from(document.querySelectorAll("[data-value]"));
    this.totalCash = document.getElementById("total-cash");

    this.getDotClicked();
	this.getItemToRemove();

  }

  getDotClicked() {
    const dots = Array.from(this.dots)
    dots.map((d, i) => {
      d.addEventListener("click", e => {
		dots.map(i=> i.classList.remove('active'));
		e.target.classList.add("active");
        this.moveSlide(i);
      });
    });
  }
  moveSlide(index) {
    if (index === 0) {
      this.wrapper.style.marginLeft = `${this.calculateWrapper() / 4}px`;
    }
    const total = this.calculateWrapper() * index - this.calculateWrapper() / 4;

    this.wrapper.style.marginLeft = `-${total}px`;
  }
  calculateWrapper() {
    const margins = this.cellWidth.map(p => {

      const elem = window.getComputedStyle(p);
	  const marginArray = parseInt(elem.marginLeft.replace("px", ""), 10) + parseInt(elem.marginRight.replace("px", ""), 10);

      return marginArray;
    });

    return parseInt(margins, 10) + parseInt(this.cellWidth[0].clientWidth, 10);
  }
  getItemToRemove() {
    const item = this.trashItem.map(trash => {
      trash.addEventListener("click", (e)=> {
		const parent = e.target.parentNode.parentNode;
        const item = new Promise((resolve, reject) => {
          const addClass = parent.classList.add("remove");
          setTimeout(() => {
            resolve(addClass);
		  }, 500);
        });

        item.then(() => {

			parent.remove();

        }).then(()=>{

			this.setTotalValue();
			this.calculateTotal();

		});
      });
    });
  }
  calculateTotal() {

    let total = this.dataValues
      .map(e => this.cleanValue(e.dataset.value))
      .reduce((a, b) => {
        return parseInt(a) + parseInt(b);
      }, 0);

	return total;

  }
  setTotalValue() {

	this.dataValues = Array.from(document.querySelectorAll("[data-value]"));
	if(this.calculateTotal() == 0){

		this.totalCash.textContent = 'Você faliu';
	}else{

		this.totalCash.textContent = `R$ ${this.formatReal(this.calculateTotal())}`;
	}
  }
  formatReal(int) {
    let tmp = int + "";
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    return tmp;
  }
  cleanValue(valueString) {
    return valueString.replace(/[!@#$%^&*.,]/g, "");
  }
}
new Carousel();

