$('.trigger').click(function(e) {
  	e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(300);
    }

  else {
        $this.next().toggleClass('show');
        $this.next().slideToggle(300);
    }
});
