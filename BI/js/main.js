// JavaScript Document
$(function(){
	// 路径配置
	require.config({
	    paths: {
	        echarts: 'js/dist'
	    }
	});
	// 使用
	require(
	    [
	        'echarts',
	        // 使用图就加载bar模块，按需加载
	        'echarts/chart/line','echarts/chart/bar','echarts/chart/map'
	    ],
	    function (ec) {
	        // 每日入住率
	        var checkInChart = ec.init(document.getElementById('checkIn'));
	        var optionLine = {
			    tooltip : {
			        trigger: 'axis'
			    },
			   	grid:{
			   		x:80,
			   		y:50,
			   		x2:60,
			   		y2:75,
			   		borderWidth:1
			   	},
			    calculable : true,
			    xAxis : [
			        {
			            type : 'category',
			            name: '日期',
			            boundaryGap : false,
			            // axisTick:{onGap:false},
			            // 控制网格线是否显示
	                    splitLine: {
                            show: true,
                            //  改变轴线颜色
                            lineStyle: {
                                // 使用深浅的间隔色
                                color: ['#003574']
                            }
	                    },
	                    //  改变x轴颜色
	                    axisLine:{
	                    	lineStyle: {
                                // 使用深浅的间隔色
                                color:'#003574'
                            }
	                    },
			            //  改变x轴字体颜色和大小
	                    axisLabel: {
	                        textStyle: {
	                            color: '#A5BBD8'
	                        },
	                        interval:0,//横轴信息全部显示
	                        rotate:60 //倾斜角度
	                    },
	                    nameTextStyle:{
	                    	color: '#A5BBD8'
	                    },
			            data : ['11-8','11-9','11-10','11-11','11-12','11-13','11-14']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
			         	name:'开机率',
			            // 控制网格线是否显示
	                    splitLine: {
                            show: true,
                            //  改变轴线颜色
                            lineStyle: {
                                // 使用深浅的间隔色
                                color: ['#003574'],
                                width:8
                            }
	                    },
	                    //  改变y轴字体颜色和大小
	                    axisLabel: {
	                        textStyle: {
	                            color: '#A5BBD8'
	                        },
	                        formatter: '{value} %'
	                    },
	                    axisLine:{
	                    	lineStyle: {
                                // 使用深浅的间隔色
                                color:'#003574'
                            }
	                    },
	                    nameTextStyle:{
	                    	color: '#A5BBD8'
	                    }
			        }
			    ],
			    series : [
			        {
			            name:'入住率',
			            type:'line',
			            data:[61.74,63.47,60.83,75.58,80.18,62.92,58.75],
			            markPoint : {
			            	itemStyle: {
			                    normal: {
			                        borderWidth: 1,
			                        color: '#01FFFC'
			                    }
			                },
			                data : [
			                    {type : 'max', name: '最大值'}

			                ]
			            },
			            // markLine : {
			            // 	itemStyle: {
			            //         normal: {
			            //             borderWidth: 1,
			            //             color: '#01FFFC'
			            //         }
			            //     },
			            //     data : [
			            //         {type : 'average', name: '平均值'}
			            //     ]
			            // },
			            //设置折线颜色
		                itemStyle : {
		                    normal : {
		                        color:'#45CEF3',
		                        borderWidth: 3,
                                lineStyle:{
                                    color:'#45CEF3'
                                }
		                    }
		                }
			        }
			    ]
			};
	        checkInChart.setOption(optionLine);

	        // 全国活跃酒店分布
	        var placeList = [
			    {name:'三亚', geoCoord:[109.51, 18.25]},
			    {name:'漠河', geoCoord:[122.54,52.97]},
			    {name:'贵阳', geoCoord:[106.42,26.14]},
			    {name:'海门', geoCoord:[121.15, 31.89]},
			    {name:'齐齐哈尔', geoCoord:[123.97, 47.33]},
			    {name:'赤峰', geoCoord:[118.87, 42.28]},
			    {name:'泉州', geoCoord:[118.58, 24.93]},
			    {name:'南通', geoCoord:[121.05, 32.08]},
			    {name:'文登', geoCoord:[122.05, 37.2]},
			    {name:'承德', geoCoord:[117.93, 40.97]},
			    {name:'丹东', geoCoord:[124.37, 40.13]},
			    {name:'福州', geoCoord:[119.3, 26.08]},
			    {name:'玉溪', geoCoord:[102.52, 24.35]},
			    {name:'湖州', geoCoord:[120.1, 30.86]},
			    {name:'昆山', geoCoord:[120.95, 31.39]},
			    {name:'荣成', geoCoord:[122.41, 37.16]},
			    {name:'东莞', geoCoord:[113.75, 23.04]},
			    {name:'南宁', geoCoord:[108.33, 22.84]},
			    {name:'蓬莱', geoCoord:[120.75, 37.8]},
			    {name:'延安', geoCoord:[109.47, 36.6]},
			    {name:'昆明', geoCoord:[102.73, 25.04]},
			    {name:'深圳', geoCoord:[114.07, 22.62]},
			    {name:'铜川', geoCoord:[109.11, 35.09]},
			    {name:'江门', geoCoord:[113.06, 22.61]},
			    {name:'临汾', geoCoord:[111.5, 36.08]},
			    {name:'苏州', geoCoord:[120.62, 31.32]},
			    {name:'胶州', geoCoord:[120.03336, 36.264622]},
			    {name:'锦州', geoCoord:[121.15, 41.13]},
			    {name:'自贡', geoCoord:[104.778442, 29.33903]},
			    {name:'西宁', geoCoord:[101.74, 36.56]},
			    {name:'大同', geoCoord:[113.3, 40.12]},
			    {name:'北海', geoCoord:[109.12, 21.49]},
			    {name:'牡丹江', geoCoord:[129.58, 44.6]},
			    {name:'常州', geoCoord:[119.95, 31.79]},
			    {name:'南京', geoCoord:[118.78, 32.04]},
			    {name:'本溪', geoCoord:[123.73, 41.3]},
			    {name:'宝鸡', geoCoord:[107.15, 34.38]},
			    {name:'徐州', geoCoord:[117.2, 34.26]},
			    {name:'乌鲁木齐', geoCoord:[87.68, 43.77]},
			    {name:'鞍山', geoCoord:[122.85, 41.12]},
			    {name:'开封', geoCoord:[114.35, 34.79]},
			    {name:'九江', geoCoord:[115.97, 29.71]},
			    {name:'沧州', geoCoord:[116.83, 38.33]},
			    {name:'富阳', geoCoord:[119.95, 30.07]},
			    {name:'哈尔滨', geoCoord:[126.63, 45.75]},
			    {name:'平顶山', geoCoord:[113.29, 33.75]},
			    {name:'荆州', geoCoord:[112.239741, 30.335165]},
			    {name:'洛阳', geoCoord:[112.44, 34.7]},
			    {name:'莱芜', geoCoord:[117.67, 36.19]},
			    {name:'金华', geoCoord:[119.64, 29.12]},
			    {name:'廊坊', geoCoord:[116.7, 39.53]},
			    {name:'大庆', geoCoord:[125.03, 46.58]}
			];
			// var placeList = [
			// 	{name:'海门', geoCoord:[121.62, 38.92], value:'70'},
			//     {name:'鄂尔多斯', geoCoord:[111.5, 36.08], value: '100'},
			//     {name:'招远', geoCoord:[120.63, 31.16], value: '150'},
			//     {name:'舟山', geoCoord:[106.39, 39.04], value: '155'}
			// ]
			var mapChart = ec.init(document.getElementById('map'));
			var optionMap = {
			    // color: [
			    //     'rgba(255, 255, 255, 0.8)',
			    //     'rgba(14, 241, 242, 0.8)',
			    //     'rgba(37, 140, 249, 0.8)'
			    // ],
			    // legend: {
			    // 	orient: 'vertical',
			    //     x:'left',
			    //     data:['强'],
			    //     textStyle : {
			    //         color: '#fff'
			    //     }
			    // },
			    series : [
			        {
			            name: '地图',
			            type: 'map',
			            mapType: 'china',
			            itemStyle:{
			                normal:{
			                    borderColor:'rgba(100,149,237,1)',
			                    borderWidth:1.5,
			                    areaStyle:{
			                        color: '#1b1b1b'
			                    }
			                }
			            },
			            // hoverable: false,
			            data : [],
			            markPoint : {
			                symbol : 'pin',
			                symbolSize: 6,
			                large: true,
			                effect : {
			                    show: true,
			                    color : '#45CEF3',
			                 //    color : (function(){
			                 //    	// var num = placeData.length;
			                 //    	var colorList = ['#C1232B','#FCCE10','#45CEF3'];
				                //     for(var n in placeList){
			                 //            console.log(placeList[n].value);
				                //         if(placeList[n].value[2] < '75'){
				                //         	var a = colorList[0];
					               //      }else if(placeList[n].value > '100'){
					               //      	var a = colorList[1];
					               //      }else{
					               //      	var a = colorList[2];
					               //      }
				                //     }
				                //     return a;
				                // })()

			                },
			                data : (function(){
			                    var data = [];
			                    var len = placeList.length;
			                    while(len--) {
			                        data.push({
			                            name : placeList[len].name,
			                            geoCoord : placeList[len].geoCoord
			                        })
			                    }
			                    return data;
			                })()
			            }
			        }
			    ]
			};

	        mapChart.setOption(optionMap);

	        // 实时点播视频TOP
	        var playChart = ec.init(document.getElementById('play'));
			var optionPlay = {
				timeline:{
					show: false,
			        data:[
			            '2017-11-8','2017-11-9','2017-11-10','2017-11-11','2017-11-12','2017-11-13','2017-11-14'
			        ],
			        label : {
			            formatter : function(s) {
			                return s.slice(0, 4);
			            }
			        },
			        autoPlay : true,
			        playInterval : 3000
			    },
			    options:[
			        {
			        	title : {
			        		text:'2017-11-8',
						    x:'center',
			        		textStyle:{
						        color:'#fff',
						        fontWeight:'100',
						        fontSize: 12
						    }
			        	},

			            tooltip : {trigger:'axis'},
			            calculable : true,
			            grid : {x:105, y:25, x2:40, y2:40, borderWidth:1 },
			            xAxis : [{
			                type:'value',
		                    splitLine: {
	                            show: true,
	                            lineStyle: {
	                                color: ['#003574']
	                            }
		                    },
		                    axisLabel: {
		                        textStyle: {
		                            color: 'rgba(255,255,255,0)'
		                        },
		                        interval:0
		                    },
		                    axisLine:{
		                    	lineStyle: {
	                                color:'#003574'
	                            }
		                    }
			            }],
			            yAxis : [
			                {
			                    type:'category',
			                    data:['父子雄兵','蚁人','悟空传','碟中谍5','速度与激情8'],
			                    splitLine: {
		                            show: true,
		                            lineStyle: {
		                                color: ['#003574']
		                            }
			                    },
			                    axisLabel: {
			                        textStyle: {
			                            color: '#A5BBD8',
		                            	fontSize: 10
			                        }
			                    },
			                    axisLine:{
			                    	lineStyle: {
		                                color:'#003574'
		                            }
			                    }
			                }
			            ],
			            series : [
			                {
			                    name:'GDP',
			                    type:'bar',
			                    data: [637,670,1233,1260,1342],
			                    barWidth:'6',
					            itemStyle:{
		                            normal:{
		                                color:'#45CEF3'
		                            }
		                        }
			                }
			            ]
			        },
			        {
			            title : {text:'2017-11-9'},
			            yAxis : [
			                {
			                	data:['喜欢你','父子雄兵','速度与激情8','碟中谍5','悟空传'],
			                }
			            ],
			            series : [
			                {data: [1154,1311,1479,1865,1879]}
			            ]
			        },
			        {
			            title : {text:'2017-11-10'},
			            yAxis : [
			                {
			                	data:['喜欢你','父子雄兵','速度与激情8','碟中谍5','悟空传'],
			                }
			            ],
			            series : [
			                {data: [1180,1343,1491,1860,1862]}
			            ]
			        },
			        {
			            title : {text:'2017-11-11'},
			            yAxis : [
			                {
			                	data:['蜘蛛侠3','悟空传','绣春刀II','碟中谍5','速度与激情8'],
			                }
			            ],
			            series : [
			                {data: [1038,1156,1200,1943,2526]}
			            ]
			        },
			        {
			            title : {text:'2017-11-12'},
			            yAxis : [
			                {
			                	data:['父子雄兵','绣春刀II','喜欢你','速度与激情8','碟中谍5'],
			                }
			            ],
			            series : [
			                {data: [957,1237,1434,2127,2375]}
			            ]
			        },
			        {
			            title : {text:'2017-11-13'},
			            yAxis : [
			                {
			                	data:['观音山','悟空传','拯救大兵瑞恩','绣春刀II','速度与激情8'],
			                }
			            ],
			            series : [
			                {data: [3427,3836,4190,9279,9626]}
			            ]
			        },
			        {
			            title : {text:'2017-11-14'},
			            yAxis : [
			                {
			                	data:['速度与激情8','青禾男高','嫌疑人X的献身','喜欢你','京城81号2'],
			                }
			            ],
			            series : [
			                {data: [752,820,840,1179,1191]}
			            ]
			        }
			    ]
			};
	        playChart.setOption(optionPlay);

	        // 实时付费视频TOP
	        var payChart = ec.init(document.getElementById('pay'));
			var optionPay = {
				timeline:{
					show: false,
			        data:[
			            '2017-11-8','2017-11-9','2017-11-10','2017-11-11','2017-11-12','2017-11-13','2017-11-14'
			        ],
			        label : {
			            formatter : function(s) {
			                return s.slice(0, 4);
			            }
			        },
			        autoPlay : true,
			        playInterval : 3000
			    },
			    options:[
			        {
			        	title : {
			        		text:'2017-11-8',
						    x:'center',
			        		textStyle:{
						        color:'#fff',
						        fontWeight:'normal',
						        fontSize: 12
						    }
			        	},

			            tooltip : {trigger:'axis'},
			            calculable : true,
			            grid : {x:105, y:25, x2:40, y2:40, borderWidth:1 },
			            xAxis : [
			            {
			                type:'value',
		                    splitLine: {
	                            show: true,
	                            lineStyle: {
	                                color: ['#003574']
	                            }
		                    },
		                    axisLabel: {
		                        textStyle: {
		                            color: 'rgba(255,255,255,0)'
		                        },
		                        interval:0
		                    },
		                    axisLine:{
		                    	lineStyle: {
	                                color:'#003574'
	                            }
		                    }
			            }],
			            yAxis : [
			                {
			                    type:'category',
			                    data:['父子雄兵','碟中谍5','三生三世','速度与激情8','摔跤吧！爸爸'],
			                    splitLine: {
		                            show: true,
		                            lineStyle: {
		                                color: ['#003574']
		                            }
			                    },
			                    axisLabel: {
			                        textStyle: {
			                            color: '#A5BBD8',
		                            	fontSize: 10
			                        }
			                    },
			                    axisLine:{
			                    	lineStyle: {
		                                color:'#003574'
		                            }
			                    }
			                }
			            ],
			            series : [
			                {
			                    name:'GDP',
			                    type:'bar',
			                    data: [154,163,176,239,300],
			                    barWidth:'6',
					            itemStyle:{
		                            normal:{
		                                color:'#45CEF3'
		                            }
		                        }
			                }
			            ]
			        },
			        {
			            title : {text:'2017-11-9'},
			            yAxis : [
			                {
			                	data:['父子雄兵','碟中谍5','三生三世','速度与激情8','摔跤吧！爸爸'],
			                }
			            ],
			            series : [
			                {data: [171,174,180,238,314]}
			            ]
			        },
			        {
			            title : {text:'2017-11-10'},
			            yAxis : [
			                {
			                	data:['欲望监禁','速度与激情8','父子雄兵','碟中谍5','摔跤吧！爸爸'],
			                }
			            ],
			            series : [
			                {data: [161,163,188,190,284]}
			            ]
			        },
			        {
			            title : {text:'2017-11-11'},
			            yAxis : [
			                {
			                	data:['父子雄兵','京城81号2','摔跤吧！爸爸','欲望监禁','速度与激情8'],
			                }
			            ],
			            series : [
			                {data: [640,717,899,1224,2680]}
			            ]
			        },
			        {
			            title : {text:'2017-11-12'},
			            yAxis : [
			                {
			                	data:['父子雄兵','京城81号2','摔跤吧！爸爸','欲望监禁','速度与激情8'],
			                }
			            ],
			            series : [
			                {data: [645,700,710,868,1249]}
			            ]
			        },
			        {
			            title : {text:'2017-11-13'},
			            yAxis : [
			                {
			                	data:['欢乐好声音','碟中谍5','欲望监禁','父子雄兵','速度与激情8'],
			                }
			            ],
			            series : [
			                {data: [213,341,473,565,780]}
			            ]
			        },
			        {
			            title : {text:'2017-11-14'},
			            yAxis : [
			                {
			                	data:['欲望监禁','夜蒲女王','京城81号2','父子雄兵','摔跤吧！爸爸'],
			                }
			            ],
			            series : [
			                {data: [41,430,435,534,648]}
			            ]
			        }
			    ]
			};
	        payChart.setOption(optionPay);

            // 累计点播视频TOP
	        var totalChart = ec.init(document.getElementById('totalPlay'));
			var optionTotal = {
				timeline:{
					show: false,
			        data:[
			            '2017-11-8','2017-11-9','2017-11-10','2017-11-11','2017-11-12','2017-11-13','2017-11-14'
			        ],
			        label : {
			            formatter : function(s) {
			                return s.slice(0, 4);
			            }
			        },
			        autoPlay : true,
			        playInterval : 3000
			    },
			    options:[
			        {
			        	title : {
			        		text:'2017-11-8',
						    x:'center',
			        		textStyle:{
						        color:'#fff',
						        fontWeight:'normal',
						        fontSize: 12
						    }
			        	},

			            tooltip : {trigger:'axis'},
			            calculable : true,
			            grid : {x:105, y:25, x2:40, y2:40, borderWidth:1 },
			            xAxis : [{
			                type:'value',
		                    splitLine: {
	                            show: true,
	                            lineStyle: {
	                                color: ['#003574']
	                            }
		                    },
		                    axisLabel: {
		                        textStyle: {
		                            color: 'rgba(255,255,255,0)'
		                        },
		                        interval:0
		                    },
		                    axisLine:{
		                    	lineStyle: {
	                                color:'#003574'
	                            }
		                    }
			            }],
			            yAxis : [
			                {
			                    type:'category',
			                    data:['父子雄兵','蚁人','悟空传','碟中谍5','速度与激情8'],
			                    splitLine: {
		                            show: true,
		                            lineStyle: {
		                                color: ['#003574']
		                            }
			                    },
			                    axisLabel: {
			                        textStyle: {
			                            color: '#A5BBD8',
		                            	fontSize: 10
			                        }
			                    },
			                    axisLine:{
			                    	lineStyle: {
		                                color:'#003574'
		                            }
			                    }
			                }
			            ],
			            series : [
			                {
			                    name:'GDP',
			                    type:'bar',
			                    data: [1154,1311,1479,1865,1879],
			                    barWidth:'6',
					            itemStyle:{
		                            normal:{
		                                color:'#45CEF3'
		                            }
		                        }
			                }
			            ]
			        },
			        {
			            title : {text:'2017-11-9'},
			            yAxis : [
			                {
			                	data:['喜欢你','父子雄兵','速度与激情8','碟中谍5','悟空传'],
			                }
			            ],
			            series : [
			                {data: [637,670,1233,1260,1342]}
			            ]
			        },
			        {
			            title : {text:'2017-11-10'},
			            yAxis : [
			                {
			                	data:['喜欢你','父子雄兵','速度与激情8','碟中谍5','悟空传'],
			                }
			            ],
			            series : [
			                {data: [1180,1343,1491,1860,1862]}
			            ]
			        },
			        {
			            title : {text:'2017-11-11'},
			            yAxis : [
			                {
			                	data:['蜘蛛侠3','悟空传','绣春刀II','碟中谍5','速度与激情8'],
			                }
			            ],
			            series : [
			                {data: [1038,1156,1200,1943,2526]}
			            ]
			        },
			        {
			            title : {text:'2017-11-12'},
			            yAxis : [
			                {
			                	data:['速度与激情8','青禾男高','嫌疑人X的献身','喜欢你','京城81号2'],
			                }
			            ],
			            series : [
			                {data: [752,820,840,1179,1191]}
			            ]
			        },
			        {
			            title : {text:'2017-11-13'},
			            yAxis : [
			                {
			                	data:['观音山','悟空传','拯救大兵瑞恩','绣春刀II','速度与激情8'],
			                }
			            ],
			            series : [
			                {data: [3427,3836,4190,9279,9626]}
			            ]
			        },
			        {
			            title : {text:'2017-11-14'},
			            yAxis : [
			                {
			                	data:['父子雄兵','绣春刀II','喜欢你','速度与激情8','碟中谍5'],
			                }
			            ],
			            series : [
			                {data: [957,1237,1434,2127,2375]}
			            ]
			        }
			    ]
			};
	        totalChart.setOption(optionTotal);


	    }
	);
})