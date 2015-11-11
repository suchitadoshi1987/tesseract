var applicationAlgo = [
	{
		algo_class: "Linear Algebra",
		application_name: "K-means vary data size",
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "High",
		Best_Arch: "GPU",
		data_cpu: [88388174000, 2.52E+11, 4.88E+11, 7.99E+11],
		data_gpu: [61459157667, 1.45E+11, 2.50E+11, 3.82E+11],
		data_phi: [69873352000, 1.87E+11, 3.32E+11, 5.42E+11],
		xAxis_data: ['500k', '1000k', '1500k', '2000k']
	},

	{
		algo_class: "Linear Algebra",
		application_name: "K-means vary cluster",
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "High",
		Best_Arch: "GPU",
		data_cpu: [89235730500, 117437000000, 163636000000, 200448000000],
		data_gpu: [62073469000, 73555883000, 85750884000, 85439524000],
		data_phi: [70455173000, 95425038000, 104966000000, 115035000000],
		xAxis_data: ['500k50', '500k100', '500k150', '500k200']
	},

	{
		algo_class: "Linear Algebra",
		application_name: "K-means vary dimensions",
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "XEON PHI",
		data_cpu: [5304398000, 6338923000, 11316303000, 23204284000],
		data_gpu: [4581220000, 5941186000, 12314336000, 15059839000],
		data_phi: [4083983000, 5844113000, 12319174000, 15585343000],
		xAxis_data: ['500k50', '500k100', '500k150', '500k200']
	},

	{
		algo_class: "Linear Algebra",
		application_name: "Lower Upper Decomposition LUD",
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "High",
		Best_Arch: "GPU",
		data_cpu: [2.154, 5.588, 10.85333333, 150.3953333],
		data_gpu: [1.796, 7.118333333, 15.54033333, 138.803],
		data_phi: [4.441333333, 16.92966667, 33.11766667, 237.623],
		xAxis_data: ['64', '256', '512', '2048']
	},

	{
		algo_class: "Linear Algebra",
		application_name: "Sparse Matrix Vector SPMV",
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "Low",
		Best_Arch: "GPU",
		data_cpu: [7447000, 29739000, 115856000, 454111000],
		data_gpu: [5470000, 18207000, 69586000, 268913000],
		data_phi: [50997000, 127442000, 355330000, 1246570000],
		xAxis_data: ['16384', '32768', '65536', '131072']
	},

	{
		algo_class: "Linear Algebra",
		application_name: "Triad",
		time_complexity: "Low",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "High",
		Best_Arch: "GPU",
		data_cpu: [1, 2, 3, 4],
		data_gpu: [1.1, 2.1, 3.1, 4.1],
		data_phi: [1.2, 2.2, 3.2, 4.2],
		xAxis_data: ['A', 'B', 'C', 'D']
	},


	{
		algo_class: "Divide and conquer",
		application_name: "Reduction",
		time_complexity: "Low",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "Low",
		Best_Arch: "XEON PHI",
		data_cpu: [1, 2, 3, 4],
		data_gpu: [1.1, 2.1, 3.1, 4.1],
		data_phi: [1.2, 2.2, 3.2, 4.2],
		xAxis_data: ['A', 'B', 'C', 'D']
	},

	{
		algo_class: "Divide and conquer",
		application_name: "Fast Fourier Transform FFT",
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "Low",
		Best_Arch: "GPU",
		data_cpu: [1, 2, 3, 4],
		data_gpu: [1.1, 2.1, 3.1, 4.1],
		data_phi: [1.2, 2.2, 3.2, 4.2],
		xAxis_data: ['A', 'B', 'C', 'D']
	},

	{
		algo_class: "Divide and conquer",
		application_name: "Scan",
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "High",
		Best_Arch: "GPU",
		data_cpu: [1, 2, 3, 4],
		data_gpu: [1.1, 2.1, 3.1, 4.1],
		data_phi: [1.2, 2.2, 3.2, 4.2],
		xAxis_data: ['A', 'B', 'C', 'D']
	},

	{
		algo_class: "Divide and conquer",
		application_name: "Stencil 2D",
		time_complexity: "Low",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "High",
		Best_Arch: "GPU",
		data_cpu: [1, 2, 3, 4],
		data_gpu: [1.1, 2.1, 3.1, 4.1],
		data_phi: [1.2, 2.2, 3.2, 4.2],
		xAxis_data: ['A', 'B', 'C', 'D']
	},


	{
		algo_class: "Grid",
		application_name: "Speckle Reducing Anisotropic Filter SRAD",
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "High",
		Best_Arch: "GPU",
		data_cpu: [1, 2, 3, 4],
		data_gpu: [1.1, 2.1, 3.1, 4.1],
		data_phi: [1.2, 2.2, 3.2, 4.2],
		xAxis_data: ['A', 'B', 'C', 'D']
	},

	{
		algo_class: "Grid",
		application_name: "Computational Fluid Dynamics",
		time_complexity: "Low",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "XEON PHI",
		data_cpu: [1, 2, 3, 4],
		data_gpu: [1.1, 2.1, 3.1, 4.1],
		data_phi: [1.2, 2.2, 3.2, 4.2],
		xAxis_data: ['A', 'B', 'C', 'D']
	},


	{
		algo_class: "N-Body",
		application_name: "GEM",
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "XEON PHI",
		data_cpu: [1, 2, 3, 4],
		data_gpu: [1.1, 2.1, 3.1, 4.1],
		data_phi: [1.2, 2.2, 3.2, 4.2],
		xAxis_data: ['A', 'B', 'C', 'D']
	},

	{
		algo_class: "N-Body",
		application_name: "LavaMD",
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "Low",
		Best_Arch: "GPU",
		data_cpu: [1, 2, 3, 4],
		data_gpu: [1.1, 2.1, 3.1, 4.1],
		data_phi: [1.2, 2.2, 3.2, 4.2],
		xAxis_data: ['A', 'B', 'C', 'D']
	},

	{
		algo_class: "Logic",
		application_name: "Time Division Multiplexing TDM",
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "CPU",
		data_cpu: [1, 2, 3, 4],
		data_gpu: [1.1, 2.1, 3.1, 4.1],
		data_phi: [1.2, 2.2, 3.2, 4.2],
		xAxis_data: ['A', 'B', 'C', 'D']
	},

	{
		algo_class: "Logic",
		application_name: "Cyclic Redundancy Check",
		time_complexity: "Low",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "Low",
		Best_Arch: "CPU",
		data_cpu: [1, 2, 3, 4],
		data_gpu: [1.1, 2.1, 3.1, 4.1],
		data_phi: [1.2, 2.2, 3.2, 4.2],
		xAxis_data: ['A', 'B', 'C', 'D']
	},


	{
		algo_class: "Dynamic Programming",
		application_name: "Smith-Waterman SWAT",
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "CPU",
		data_cpu: [0.2931, 0.352475, 0.466777, 0.661598, 1.108814],
		data_gpu: [1.327765, 1.376845, 1.417224, 1.461248, 1.516661],
		data_phi: [2.022166, 2.151572, 2.250196, 2.465868, 2.794739],
		xAxis_data: ['1k', '2k', '3k', '4k']
	},

	{
		algo_class: "Dynmaic Programming",
		application_name: "Needleman-Wunsch",
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "CPU",
		data_cpu: [0.349833, 0.441113, 0.846273, 2.241366, 8.211932],
		data_gpu: [1.32914, 1.42353, 1.729119, 2.734046, 6.834454],
		data_phi: [0.887091, 1.039292, 1.582725, 3.920679, 12.625132],
		xAxis_data: ['1024', '2048', '4096', '8192']
	},


	{
		algo_class: "Branch and Bound",
		application_name: "A*",
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "CPU",
		data_cpu: [1, 2, 3, 4],
		data_gpu: [1.1, 2.1, 3.1, 4.1],
		data_phi: [1.2, 2.2, 3.2, 4.2],
		xAxis_data: ['A', 'B', 'C', 'D']
	},


	{
		algo_class: "Graph Models",
		application_name: "Hidden Markov Model HMM",
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "XEON PHI",
		data_cpu: [1, 2, 3, 4],
		data_gpu: [1.1, 2.1, 3.1, 4.1],
		data_phi: [1.2, 2.2, 3.2, 4.2],
		xAxis_data: ['A', 'B', 'C', 'D']
	},


	{
		algo_class: "Graph Traversal",
		application_name: "Breadth First Search BFS",
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "CPU",
		data_cpu: [1, 2, 3, 4],
		data_gpu: [1.1, 2.1, 3.1, 4.1],
		data_phi: [1.2, 2.2, 3.2, 4.2],
		xAxis_data: ['A', 'B', 'C', 'D']
	},

	{
		algo_class: "Sort",
		application_name: "Radix Sort",
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "XEON PHI",
		data_cpu: [1, 2, 3, 4],
		data_gpu: [1.1, 2.1, 3.1, 4.1],
		data_phi: [1.2, 2.2, 3.2, 4.2],
		xAxis_data: ['A', 'B', 'C', 'D']
	}


];

var truthTable = [
	{
		time_complexity: "Low",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "Low",
		Best_Arch: "CPU"
	},
	{
		time_complexity: "Low",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "XEON PHI"
	},
	{
		time_complexity: "Low",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "Low",
		Best_Arch: "XEON PHI"
	},
	{
		time_complexity: "Low",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "High",
		Best_Arch: "GPU"
	},

	{
		time_complexity: "Low",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "Low",
		Best_Arch: "XEON PHI"
	},
	{
		time_complexity: "Low",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "XEON PHI"
	},
	{
		time_complexity: "Low",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "Low",
		Best_Arch: "CPU"
	},
	{
		time_complexity: "Low",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "High",
		Best_Arch: "GPU"
	},

	{
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "Low",
		Best_Arch: "XEON PHI"
	},
	{
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "CPU"
	},
	{
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "Low",
		Best_Arch: "XEON PHI"
	},
	{
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "High",
		Best_Arch: "XEON PHI"
	},

	{
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "Low",
		Best_Arch: "XEON PHI"
	},
	{
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "XEON PHI"
	},
	{
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "Low",
		Best_Arch: "GPU"
	},
	{
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "High",
		Best_Arch: "GPU"
	},
];
var chartCount = 0;
$(document).ready(function () {
	var navListItems = $('div.setup-panel div a'),
		allWells = $('.setup-content'),
		allNextBtn = $('.nextBtn');
	$(".nav-link").click(function (event) {
		var linkTo = $(event.currentTarget).data('linkto');
		$('.nav-content').addClass('hidden');
		$('.nav-content.' + linkTo).removeClass('hidden');
	});
	allWells.hide();

	$('.show-graph').click(function () {
		var selectedApplication = applicationAlgo.filter(function (item) {
			return item.application_name === $('.matching-application').val()
		})[0];

		var $highchartSelector = $('#highchart-container-result');
		$highchartSelector.html('');
		$highchartSelector.highcharts({
			chart: {
				type: 'line'
			},
			title: {
				text: 'Architecture Comparision'
			},
			xAxis: {
				categories: selectedApplication.xAxis_data
			},
			yAxis: {
				title: {
					text: ''
				}
			},
			series: [{
				name: 'CPU',
				data: selectedApplication.data_cpu
			}, {
				name: 'GPU',
				data: selectedApplication.data_gpu
			}, {
				name: 'Xeon Phi',
				data: selectedApplication.data_phi
			}
			]
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

	$('.result-algorithm').on('change', function (event) {
		var optionValues = applicationAlgo.filter(function (item) {
			return item.algo_class === $(event.currentTarget).val()
		});
		$('.matching-application').html('');
		optionValues.forEach(function (optionValue) {
			var str = "<option value='" + optionValue.application_name + "'>" + optionValue.application_name + "</option>";
			$('.matching-application').append(str);
		});
	});
	$('.try-tesseract-algorithm').on('change', function (event) {
		var $currentEle = $(event.currentTarget);
		var optionValues = applicationAlgo.filter(function (item) {
			return item.algo_class === $(event.currentTarget).val()
		});
		$('.try-tesseract-matching-application').html('');
		optionValues.forEach(function (optionValue) {
			var str = "<option value='" + optionValue.application_name + "'>" + optionValue.application_name + "</option>";
			$('.try-tesseract-matching-application').append(str);
		});
		$('.try-tesseract-matching-application').append('<option value="Other">Other</option>');
		if (($(event.currentTarget).val() === 'Other') || ($('.try-tesseract-matching-application').val() === 'Other')) {
			$('.option-select-algorithm').removeClass('hidden');
		}
		else {
			var currentObj = applicationAlgo.filter(function(item){return item.application_name === $('.try-tesseract-matching-application').val()})[0];
			$('input[name="time_complexity"][value="'+currentObj.time_complexity+'"]').prop('checked', true);
			$('input[name="dominant_memory_access_ratio"][value="'+currentObj.dominant_memory_access_ratio+'"]').prop('checked', true);
			$('input[name="FLOPs_ratio"][value="'+currentObj.FLOPs_ratio+'"]').prop('checked', true);
			$('input[name="memory_access_frequency"][value="'+currentObj.memory_access_frequency+'"]').prop('checked', true);
			if (!$('.option-select-algorithm').hasClass('hidden')) {
				$('.option-select-algorithm').addClass('hidden');
			}
		}
	});
	var initialAppValue = applicationAlgo.filter(function(item){return item.application_name === 'K-means vary data size'})[0];
	$('#highchart-container-initial').highcharts({
		chart: {
			type: 'line'
		},
		title: {
			text: 'Architecture Comparision'
		},
		xAxis: {
			categories: initialAppValue.xAxis_data
		},
		yAxis: {
			title: {
				text: ''
			}
		},
		series: [{
			name: 'CPU',
			data: initialAppValue.data_cpu
		}, {
			name: 'GPU',
			data: initialAppValue.data_gpu
		}, {
			name: 'Xeon Phi',
			data: initialAppValue.data_phi
		}
		]
	});
	$('input[name="time_complexity"][value="'+initialAppValue.time_complexity+'"]').prop('checked', true);
	$('input[name="dominant_memory_access_ratio"][value="'+initialAppValue.dominant_memory_access_ratio+'"]').prop('checked', true);
	$('input[name="FLOPs_ratio"][value="'+initialAppValue.FLOPs_ratio+'"]').prop('checked', true);
	$('input[name="memory_access_frequency"][value="'+initialAppValue.memory_access_frequency+'"]').prop('checked', true);
	$('.try-tesseract-matching-application').on('change', function (event) {
		if (($(event.currentTarget).val() === 'Other')) {
			$('.option-select-algorithm').removeClass('hidden');
		}
		else {
			var currentObj = applicationAlgo.filter(function(item){return item.application_name === $(event.currentTarget).val()})[0];
			$('input[name="time_complexity"][value="'+currentObj.time_complexity+'"]').prop('checked', true);
			$('input[name="dominant_memory_access_ratio"][value="'+currentObj.dominant_memory_access_ratio+'"]').prop('checked', true);
			$('input[name="FLOPs_ratio"][value="'+currentObj.FLOPs_ratio+'"]').prop('checked', true);
			$('input[name="memory_access_frequency"][value="'+currentObj.memory_access_frequency+'"]').prop('checked', true);
			if (!$('.option-select-algorithm').hasClass('hidden')) {
				$('.option-select-algorithm').addClass('hidden');
			}
		}
	});

	$('.step2wizard').on('click', function () {
		var timeCom = $('input[name="time_complexity"]:checked').val();
		var domi = $('input[name="dominant_memory_access_ratio"]:checked').val();
		var flop = $('input[name="FLOPs_ratio"]:checked').val();
		var memAcc = $('input[name="memory_access_frequency"]:checked').val();
		var bestAlgo = truthTable.filter(function (item) {
			return item.time_complexity === timeCom && item.dominant_memory_access_ratio === domi && item.FLOPs_ratio === flop && item.memory_access_frequency === memAcc
		});
		$('.best-architecture').html('Best Architecture: '+ bestAlgo[0].Best_Arch)
	});

	$('.step3wizard').on('click', function () {
		var timeCom = $('input[name="time_complexity"]:checked').val();
		var domi = $('input[name="dominant_memory_access_ratio"]:checked').val();
		var flop = $('input[name="FLOPs_ratio"]:checked').val();
		var memAcc = $('input[name="memory_access_frequency"]:checked').val();
		$('.evaluate-chart').html('');
		if($('.try-tesseract-algorithm').val()=== 'Other' && $('.try-tesseract-matching-application').val() === 'Other'){
			var matchingApplications = applicationAlgo.filter(function(item) {
				return item.time_complexity === timeCom && item.dominant_memory_access_ratio === domi && item.FLOPs_ratio === flop && item.memory_access_frequency === memAcc;
			});

			matchingApplications.forEach(function (app) {

				var chartContainer = '<div class="row col-md-offset-1"> <div class="row "> <p class="evaluate-algorithm">Algorithm: '+app.algo_class+'</p> </div> <div class="row try-radio"> <p class="evaluate-architecture">Architecture: '+app.application_name+'</p> </div> </div> <div class="row"> <div id="highchart-container-'+(chartCount)+'" style="width: 300px; height:300px;"></div> </div>'
				$('.evaluate-chart').append(chartContainer);

				$('#highchart-container-'+chartCount).highcharts({
					chart: {
						type: 'line'
					},
					title: {
						text: 'Architecture Comparision'
					},
					xAxis: {
						categories: app.xAxis_data
					},
					yAxis: {
						title: {
							text: ''
						}
					},
					series: [{
						name: 'CPU',
						data: app.data_cpu
					}, {
						name: 'GPU',
						data: app.data_gpu
					}, {
						name: 'Xeon Phi',
						data: app.data_phi
					}
					]
				});
				chartCount++;
			});
		}
		else {
			var selectedApplication = applicationAlgo.filter(function (item) {
				return item.application_name === $('.try-tesseract-matching-application').val()
			})[0];

			var chartContainer = '<div class="row col-md-offset-1"> <div class="row "> <p class="evaluate-algorithm">Algorithm: '+selectedApplication.algo_class+'</p> </div> <div class="row try-radio"> <p class="evaluate-architecture">Application: '+selectedApplication.application_name+'</p> </div> </div> <div class="row"> <div id="highchart-container-'+(chartCount)+'" style="width: 300px; height:300px;"></div> </div>'
			$('.evaluate-chart').append(chartContainer);
			$('#highchart-container-'+chartCount).highcharts({
				chart: {
					type: 'line'
				},
				title: {
					text: 'Architecture Comparision'
				},
				xAxis: {
					categories: selectedApplication.xAxis_data
				},
				yAxis: {
					title: {
						text: ''
					}
				},
				series: [{
					name: 'CPU',
					data: selectedApplication.data_cpu
				}, {
					name: 'GPU',
					data: selectedApplication.data_gpu
				}, {
					name: 'Xeon Phi',
					data: selectedApplication.data_phi
				}
				]
			});
		}
	});

	$('.try-tesseract-top-link').on('click', function () {
		$('.step1wizard').click();
	});
});



