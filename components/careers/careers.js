+function () {
  var ROLE_PIC_MAP = {
    '1': '../../assets/img/teacher.png',
    '2': '../../assets/img/lawer.png',
    '3': '../../assets/img/police.png'
  };

  var getCareerJobs = function () {
    //var jobs = Profile.getJobs();
    var jobs = [{
      id: 1,
      title: '老師'
    }, {
      id: 2,
      title: '法官'
    }];

    return jobs;
  };

  var renderRole = function (job, roleId) {
    var $roleDom = $('#role-' + roleId),
        $roleImg = $('<img>');

    $roleImg.attr('src', ROLE_PIC_MAP[roleId]);

    $roleDom.removeClass('no-role')
	 .find('a')
	 .attr('href','#')
     .empty()
      .append($roleImg);

    $roleDom.find('.title').html(job.title);
	
	$roleDom.on('click',function(e){
		e.preventDefault();
		Cookies.set('current_job_id', job.id, { expires: 7 });
		window.location.href = "../../trainingRoom.html";	
	});	
	
  };

  var init = function () {
    var jobs = getCareerJobs();

    jobs.forEach(function (job, index) {
      renderRole(job, index + 1);
    });


  };

  $(init);

}();
