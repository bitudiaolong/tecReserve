layer.config({
	path: '/js/pluging/layer/', //layer.js所在的目录，可以是绝对目录，也可以是相对目录
	extend: 'extend/layer.ext.js'
});

function initCalendar(eventsData) {
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		editable: true,
		eventColor: '#ff0000',
		eventTextColor: '#0000ff',
		eventBackgroundColor: '#0000ff',
		dayClick: function(date, allDay, jsEvent, view) {
			calendarCreate(date, allDay, jsEvent, view);
		},
		eventDrop: function(event, delta, revertFunc) {
			fcalendarUpdate(event, delta, revertFunc);
		},
		eventClick: function(event, element) {
			calendarDelete(event, element); 
		},
		events: eventsData,
	});
}

function fcalendarAdd(key) {
	$.ajax({
		type: "post",
		url: url + "fcalendarAdd",
		async: false,
		data: key.parame,
		success: function(data) {
			(data.errcode == 0) ? key.success(data): layer.msg(data.errmsg);
		}
	});
}

function fcalendarSelect() {
	$.ajax({
		type: "post",
		url: url + "fcalendarSelect",
		async: false,
		data: "",
		success: function(data) {
			(data.errcode == 0) ? initCalendar(data.data): layer.msg(data.errmsg);
		}
	});
}

function fcalendarDelete(event, element) {
	$.ajax({
		type: "post",
		url: url + "fcalendarDelete",
		async: false,
		data: {
			id: event.id,
			userId: sessionStorage.userId
		},
		success: function(data) {
			if(data.errcode == 0) {
				$('#calendar').fullCalendar('removeEvents', event.id);
				$('#calendar').fullCalendar('updateEvent', event);
			} else {
				layer.msg(data.errmsg);
			}
		}
	});
}

function fcalendarUpdate(event, delta, revertFunc) {
	$.ajax({
		type: "post",
		url: url + "fcalendarUpdate",
		async: false,
		data: {
			id: event.id,
			start: event.start
		},
		success: function(data) {
			layer.msg(data.errmsg);
		}
	});
}

function calendarDelete(event, element) {
	var index = layer.confirm('确定要删除该事件吗？', {
		btn: ['确定', '取消'] //按钮
	}, function() {
		fcalendarDelete(event, element);
		layer.close(index);
	}, function() {});

}

function calendarCreate(date, allDay, jsEvent, view) {
	layer.prompt({
		formType: 0,
		value: '',
		move: false,
		title: '请输入事件标题内容',
	}, function(value, index, elem) {
		fcalendarAdd({
			parame: {
				title: value,
				start: date.toUTCString(),
				allDay: (allDay) ? 0 : 1,
				userId: Number(sessionStorage.userId)
			},
			success: function(data) {
				var dataObj = {
					title: value,
					start: date.toUTCString(),
					allDay: allDay
				}
				$('#calendar').fullCalendar('renderEvent', dataObj, true);
			}
		})
		layer.close(index);
	});
}

fcalendarSelect();
var vm = new Vue({
	el:'#container',
	data:{
		nav:nav
	}
})