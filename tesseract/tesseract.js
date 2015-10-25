

$(document).ready(function(){
	var navListItems = $('div.setup-panel div a'),
		allWells = $('.setup-content'),
		allNextBtn = $('.nextBtn');
	$(".nav-link").click(function(event){
		var linkTo = $(event.currentTarget).data('linkto');
		$('.nav-content').addClass('hidden');
		$('.nav-content.'+linkTo).removeClass('hidden');
	});
	$("input[name='radioGroup']").change(function(event) {
		$('.try-part1').addClass('hidden');
		$('.try-part2').removeClass('hidden');
		$('#tree').tree({
			/* specify here your options */
		});

		allWells.hide();
	});

	$('.show-graph').click(function() {
		$('#highchart-container-result').highcharts({
			chart: {
				type: 'line'
			},
			title: {
				text: 'Architecture Comparision'
			},
			xAxis: {
				categories: ['GPU', 'CPU', 'MIC']
			},
			yAxis: {
				title: {
					text: ''
				}
			},
			series: [{
				name: 'Intel ABC',
				data: [1, 5, 4]
			}, {
				name: 'Nvidia XYZ',
				data: [5, 7, 3]
			}]
		});
	});

	navListItems.click(function (e) {
		e.preventDefault();
		var $target = $($(this).attr('href')),
			$item = $(this);

		if (!$item.hasClass('disabled')) {
			navListItems.removeClass('btn-primary').addClass('btn-default');
			$item.addClass('btn-primary');
			allWells.hide();
			$target.show();
			$target.find('input:eq(0)').focus();
		}
	});
	$('#highchart-container').highcharts({
		chart: {
			type: 'line'
		},
		title: {
			text: 'Architecture Comparision'
		},
		xAxis: {
			categories: ['GPU', 'CPU', 'MIC']
		},
		yAxis: {
			title: {
				text: ''
			}
		},
		series: [{
			name: 'Intel ABC',
			data: [1, 5, 4]
		}, {
			name: 'Nvidia XYZ',
			data: [5, 7, 3]
		}]
	});
});



