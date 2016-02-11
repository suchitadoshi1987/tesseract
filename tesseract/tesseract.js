var applicationAlgo = [
	{
		algo_class: "Linear Algebra",
		application_name: "K-means vary data size",
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "High",
		Best_Arch: "GPU",
		data_cpu: [88.388174, 252, 488, 799],
		data_gpu: [61.459157667, 145, 250, 382],
		data_phi: [69.873352, 187, 332, 542],
		xAxis_data: ['500k', '1000k', '1500k', '2000k'],
		obv_Arch: "GPU",
		x_label:"DATA SIZE"
	},

	{
		algo_class: "Linear Algebra",
		application_name: "K-means vary cluster",
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "High",
		Best_Arch: "GPU",
		data_cpu: [89.2357305, 117, 164, 200],
		data_gpu: [62.073469, 73.555883, 85.750884, 85.439524],
		data_phi: [70.455173, 95.425038, 105, 115],
		xAxis_data: ['500k50', '500k100', '500k150', '500k200'],
		obv_Arch: "GPU",
		x_label:"MIN MAX CLUSTER VALUES"
	},

	{
		algo_class: "Linear Algebra",
		application_name: "K-means vary dimensions",
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "GPU",
		data_cpu: [5.304398, 6.338923, 11.316303, 23.204284],
		data_gpu: [4.58122, 5.941186, 12.314336, 15.059839],
		data_phi: [4.083983, 5.844113, 12.319174, 15.585343],
		xAxis_data: ['500k50', '500k100', '500k150', '500k200'],
		obv_Arch: "GPU",
		x_label:"DIAMETER D"
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
		xAxis_data: ['64', '256', '512', '2048'],
		obv_Arch: "GPU",
		x_label:"DATA SIZE"
	},

	{
		algo_class: "Linear Algebra",
		application_name: "Sparse Matrix Vector SPMV",
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "Low",
		Best_Arch: "GPU",
		data_cpu: [7.447, 29.739, 115.856, 454.111],
		data_gpu: [5.47, 18.207, 69.586, 268.913],
		data_phi: [50.997, 127.442, 355.33, 1246.57],
		xAxis_data: ['16384', '32768', '65536', '131072'],
		obv_Arch: "GPU",
		x_label:"DATA SIZE"
	},

	{
		algo_class: "Linear Algebra",
		application_name: "Triad",
		time_complexity: "Low",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "High",
		Best_Arch: "GPU",
		data_cpu: [0.0249766, 0.0215641, 0.0216114, 0.0216457, 0.0216818, 0.0216796, 0.021649, 0.0252988, 0.0216301, 0.021554],
		data_gpu: [0.00860666, 0.00824272, 0.00823485, 0.00823142, 0.00823926, 0.00850208, 0.00860666, 0.00850144, 0.0085464, 0.00850253],
		data_phi: [0.00867249, 0.00867641, 0.00867249, 0.00872512, 0.00868416, 0.00876684, 0.00867407, 0.00873315, 0.00874061, 0.00873828],
		xAxis_data: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9'],
		obv_Arch: "GPU",
		x_label:"TRIAL NUMBER"
	},


	{
		algo_class: "Divide and conquer",
		application_name: "Reduction",
		time_complexity: "Low",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "Low",
		Best_Arch: "XEON PHI",
		data_cpu: [0.0006524, 0.005398, 0.02341, 0.0484],
		data_gpu: [0.00019, 0.0014052, 0.005578, 0.0111018],
		data_phi: [0.000627, 0.00283, 0.0101, 0.0191],
		xAxis_data: ['1 MB', '8 MB', '48 MB' , '96 MB'],
		obv_Arch: "GPU",
		x_label:"PROBLEM SIZE MB"
	},

	{
		algo_class: "Divide and conquer",
		application_name: "Fast Fourier Transform FFT",
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "Low",
		Best_Arch: "GPU",
		data_cpu: [0.000973729, 0.00960265, 0.144348, 0.388722],
		data_gpu: [0.000463484, 0.00343868, 0.0398, 0.106],
		data_phi: [0.000919067, 0.00611975, 0.115651, 0.301879],
		xAxis_data: ['65536', '524288', '6291456', '16777216'],
		obv_Arch: "GPU",
		x_label:"NUMBER OF ELEMENTS"
	},

	{
		algo_class: "Divide and conquer",
		application_name: "Scan",
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "High",
		Best_Arch: "GPU",
		data_cpu: [0.00160442, 0.00952461, 0.0398683, 0.079995],
		data_gpu: [0.000436943, 0.00285128, 0.0112817, 0.0224926],
		data_phi: [0.0011868, 0.0055438, 0.019363, 0.0368608],
		xAxis_data: ['131072', '1048576', '4194304', '8388608'],
		obv_Arch: "GPU",
		x_label:"NUMBER OF ELEMENTS"
	},

	{
		algo_class: "Divide and conquer",
		application_name: "Stencil 2D",
		time_complexity: "Low",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "High",
		Best_Arch: "GPU",
		data_cpu: [0.574978, 1.85435, 5.55319, 24.9189],
		data_gpu: [0.0760698, 0.231855, 0.84361, 3.33868],
		data_phi: [1.19073, 3.0476, 9.76195, 35.6084],
		xAxis_data: ['512x512', '1024x1024', '2048x2048', '4096x4096'],
		obv_Arch: "GPU",
		x_label:"SIZE OF MATRIX"
	},


	{
		algo_class: "Grid",
		application_name: "Speckle Reducing Anisotropic Filter SRAD",
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "High",
		Best_Arch: "GPU",
		data_cpu: [1.370475, 4.559999, 18.831808, 72.423335, 163.464418],
		data_gpu: [1.658712, 2.559021, 6.566177, 22.687956, 49.911433],
		data_phi: [2.297683, 5.662703, 18.087546, 66.062827, 140.300742],
		xAxis_data: ['1024', '2048', '4096', '8192', '12288'],
		obv_Arch: "GPU",
		x_label:"INPUT SIZE"
	},

	{
		algo_class: "Grid",
		application_name: "Computational Fluid Dynamics",
		time_complexity: "Low",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "XEON PHI",
		data_cpu: [6.786569, 13.330695, 15.717012],
		data_gpu: [7.138944, 13.00784, 15.56318],
		data_phi: [8.572833, 14.585241, 17.572076],
		xAxis_data: ['fvcorr.097k', 'fvcorr.193k', 'missile.0.2M'],
		obv_Arch: "CPU, GPU",
		x_label:"INPUT SIZE"
	},


	{
		algo_class: "N-Body",
		application_name: "GEM",
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "GPU",
		data_cpu: [0.302023, 0.412428, 17.1301, 662.28605],
		data_gpu: [1.342539, 1.398127, 3.784541, 55.54715],
		data_phi: [1.176967, 1.227809, 6.480024, 191.8663],
		xAxis_data: ['24, 382', '91, 1441', '1268, 25086', '30780, 476040'],
		obv_Arch: "GPU",
		x_label:"INPUT SIZE(RESIDUE,ATOM)"
	},

	{
		algo_class: "N-Body",
		application_name: "LavaMD",
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "Low",
		Best_Arch: "GPU",
		data_cpu: [2.661411047, 20.00541687, 163.8613892, 493.776001, 935.944],
		data_gpu: [1.451621056, 1.912907, 5.827931881, 16.62577057, 25.68288803],
		data_phi: [0.529384971, 2.540766954, 25.98606872, 63.95332718, 101.3195496],
		xAxis_data: ['1000', '8000', '64000', '216000', '343000'],
		obv_Arch: "GPU",
		x_label:"NUMBER OF BOXES"
	},

	{
		algo_class: "Logic",
		application_name: "Time Division Multiplexing TDM",
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "CPU",
		data_cpu: [0.7173, 1.0222, 1.2346, 1.5271, 1.9587],
		data_gpu: [1.4064, 1.5103, 1.6646, 1.9942, 2.9827],
		data_phi: [1.489, 1.522, 1.714, 1.972, 2.985],
		xAxis_data: ['20', '50', '100', '200', '500'],
		obv_Arch: "CPU",
		x_label:"INPUT SIZE"
	},

	{
		algo_class: "Logic",
		application_name: "Cyclic Redundancy Check",
		time_complexity: "Low",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "High",
		memory_access_frequency: "Low",
		Best_Arch: "XEON PHI",
		data_cpu: [0.415, 1.187, 2.271, 9.38],
		data_gpu: [1.985, 14.327, 28.4, 56.659],
		data_phi: [27.162, 132.326, 283.636, 610.038],
		xAxis_data: ['64', '512', '1024', '2048'],
		obv_Arch: "CPU",
		x_label:"DATA SIZE"
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
		xAxis_data: ['1k', '2k', '3k', '4k'],
		obv_Arch: "CPU",
		x_label:"SAMPLE SIZE X1000"
	},

	{
		algo_class: "Dynamic Programming",
		application_name: "Needleman-Wunsch",
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "CPU",
		data_cpu: [0.349833, 0.441113, 0.846273, 2.241366, 8.211932],
		data_gpu: [1.32914, 1.42353, 1.729119, 2.734046, 6.834454],
		data_phi: [0.887091, 1.039292, 1.582725, 3.920679, 12.625132],
		xAxis_data: ['1024', '2048', '4096', '8192'],
		obv_Arch: "CPU",
		x_label:"INPUT SIZE"
	},


	{
		algo_class: "Branch and Bound",
		application_name: "A*",
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "CPU",
		data_cpu: [0.000815262, 0.003145866, 0.006443062, 0.010622811, 0.016691867, 0.025641205, 0.033222871, 0.044053442],
		data_gpu: [0.011965056, 0.129883712, 0.671902976, 2.659486144, 6.879269952, 16.61673261, 32.57981994, 63.84808339],
		data_phi: [0.003773585, 0.004906746, 0.006096071, 0.086529579, 0.115360849, 0.131576543, 0.140047279, 0.143620557],
		xAxis_data: ['50', '100', '150', '200', '250', '300', '350', '400'],
		obv_Arch: "CPU",
		x_label:"NO. OF CITIES"
	},



	{
		algo_class: "Graph Traversal",
		application_name: "Breadth First Search BFS",
		time_complexity: "High",
		FLOPs_ratio: "Low",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "CPU",
		data_cpu: [12.968819, 33.983694, 59.297548, 169.893526],
		data_gpu: [14.117008, 32.95483, 51.444328, 170.448213],
		data_phi: [15.976316, 34.256417, 51.89453, 178.98505],
		xAxis_data: ['128000', '256000', '512000', '1002496'],
		obv_Arch: "GPU",
		x_label:"NUMBER OF VERTICES"
	},

	{
		algo_class: "Sort",
		application_name: "Radix Sort",
		time_complexity: "High",
		FLOPs_ratio: "High",
		dominant_memory_access_ratio: "Low",
		memory_access_frequency: "High",
		Best_Arch: "GPU",
		data_cpu: [0.00933659, 0.070001, 0.2393, 0.4762],
		data_gpu: [0.003656, 0.0206686, 0.0792817, 0.157255],
		data_phi: [0.0194, 0.0749, 0.2832, 0.5291],
		xAxis_data: ['1 MB', '8 MB', '48 MB' , '96 MB'],
		obv_Arch: "GPU",
		x_label:"PROBLEM SIZE MB"
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
		Best_Arch: "GPU"
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
		Best_Arch: "GPU"
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


		$('.predicted-architecture').html('<p>Predicted Architecture: '+selectedApplication.Best_Arch+'</p>');
		$('.observed-architecture').html('<p>Observed Architecture: '+selectedApplication.obv_Arch+'</p>');
		$('.result-table').html('<tr><td>Time Complexity</td><td>'+selectedApplication.time_complexity+'</td>' +
			'<tr><td>FLOP-to-NON FLOP Ratio</td><td>'+selectedApplication.FLOPs_ratio+'</td></tr>' +
			'<tr><td>Dominant Memory Access Ratio</td><td>'+selectedApplication.dominant_memory_access_ratio+'</td></tr>' +
			'<tr><td>Memory Access Frequency</td><td>'+selectedApplication.memory_access_frequency+'</td></tr>')
		var $highchartSelector = $('#highchart-container-result');
		$highchartSelector.html('');
		$highchartSelector.highcharts({
			credits: {
				enabled: false
			},
			chart: {
				type: 'line'
			},
			title: {
				text: 'Architecture Comparision'
			},
			xAxis: {
				categories: selectedApplication.xAxis_data,
				title: {
					text: selectedApplication.x_label
				}
			},
			yAxis: {
				title: {
					text: 'TIME(S)'
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
		credits: {
			enabled: false
		},
		chart: {
			type: 'line'
		},
		title: {
			text: 'Architecture Comparision'
		},
		xAxis: {
			categories: initialAppValue.xAxis_data,
			title: {
				text: initialAppValue.x_label
			}
		},
		yAxis: {
			title: {
				text: 'TIME(S)'
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
	//
	//$('.find-match').on('click', function () {
	//	var timeCom = $('input[name="time_complexity"]:checked').val();
	//	var domi = $('input[name="dominant_memory_access_ratio"]:checked').val();
	//	var flop = $('input[name="FLOPs_ratio"]:checked').val();
	//	var memAcc = $('input[name="memory_access_frequency"]:checked').val();
	//
	//});

	$('.find-match').on('click', function () {
		$('#step-3').show();
		var timeCom = $('input[name="time_complexity"]:checked').val();
		var domi = $('input[name="dominant_memory_access_ratio"]:checked').val();
		var flop = $('input[name="FLOPs_ratio"]:checked').val();
		var memAcc = $('input[name="memory_access_frequency"]:checked').val();
		var bestAlgo = truthTable.filter(function (item) {
			return item.time_complexity === timeCom && item.dominant_memory_access_ratio === domi && item.FLOPs_ratio === flop && item.memory_access_frequency === memAcc
		});
		$('.best-architecture').html('Best Architecture: '+ bestAlgo[0].Best_Arch)
		$('.evaluate-chart').html('');

			var matchingApplications = applicationAlgo.filter(function(item) {
				return item.time_complexity === timeCom && item.dominant_memory_access_ratio === domi && item.FLOPs_ratio === flop && item.memory_access_frequency === memAcc;
			});

			matchingApplications.forEach(function (app) {

				var chartContainer = '<div class="col-md-6 chart-section"> <div class="row "> <p class="evaluate-algorithm">Algorithm: '+app.algo_class+'</p> </div> <div class="row try-radio"> <p class="evaluate-architecture">Application: '+app.application_name+'</p> </div> <div id="highchart-container-'+(chartCount)+'" style="width: 300px; height:300px;"></div> </div>'
				$('.evaluate-chart').append(chartContainer);

				$('#highchart-container-'+chartCount).highcharts({
					credits: {
						enabled: false
					},
					chart: {
						type: 'line'
					},
					title: {
						text: 'Architecture Comparision'
					},
					xAxis: {
						categories: app.xAxis_data,
						title: {
							text: app.x_label
						}
					},
					yAxis: {
						title: {
							text: 'TIME(S)'
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


	});

	$('.try-tesseract-top-link').on('click', function () {
		$('#step-1').show();
	});
});



