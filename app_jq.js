var data = [];

$(document).ready(function(){
	
	$(".title").text("Vue.js With JinYoung!!!");
	
	$(".frm").on("submit",function(e){
		e.preventDefault();
		if($("[name=newTodo]").val()!=''){
			data.push(
				{
				"title": $("[name=newTodo]").val(),
				"done": false
				}
			);
			redraw();
		}
	});
	
	$(document).on("click",".remove",function(){
		var todoIdx = $(".remove").index(this);
		data.splice(todoIdx, 1);
		redraw();
	});
	
	$(document).on("click",".chk",function(){
		var todoIdx = $(".chk").index(this);
		data[todoIdx]["done"] = !data[todoIdx]["done"];
		
		if(data[todoIdx]["done"]) 
			$(this).closest("li").find("span").addClass("done");
		else
			$(this).closest("li").find("span").removeClass("done");
	});
	
	$(".alldone").on("click",function(){
		$(".chk").click();
	});
	
});

function redraw(){
	console.log(data);
	var html = '';
	data.forEach(function(item,idx){
		var ck = item['done']?'checked':'';
		html+='<li>';
		html+='	<input class="chk" type="checkbox" '+ck+'>';
		html+='	<span>'+item['title']+'</span>';
		html+='	<button class="remove" type="button">삭제</button>';
		html+='</li>';
	});
	$(".list").html(html);
}