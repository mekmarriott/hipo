alert('Hello World');

            // Renders a line chart
            (function() {
                nv.addGraph(function() {
                    var chart = nv.models.lineChart()
                        .x(function(d) {
                            return d[0]
                        })
                        .y(function(d) {
                            return d[1] / 100
                        })
                        .color([
                            $.Pages.getColor('success'),
                            $.Pages.getColor('danger'),
                            $.Pages.getColor('primary'), //south america

                            $.Pages.getColor('complete'), //europe

                        ])
                        .useInteractiveGuideline(true);

                    chart.xAxis
                        .tickFormat(function(d) {
                            return d3.time.format('%x')(new Date(d))
                        });

                    chart.yAxis.tickFormat(d3.format(',.2f'));

                    d3.select('#nvd3-line svg')
                        .datum(data.nvd3.line)
                        .transition().duration(500)
                        .call(chart);

                    nv.utils.windowResize(chart.update);

                    $('#nvd3-line').data('chart', chart);

                    return chart;
                });
            })();

            // Renders a line chart
            (function() {
                nv.addGraph(function() {
                    var chart = nv.models.lineChart()
                        .x(function(d) {
                            return d[0]
                        })
                        .y(function(d) {
                            return d[1] / 100
                        })
                        .color([
                            $.Pages.getColor('success')
                        ])
                        .useInteractiveGuideline(true);

                    chart.xAxis
                        .tickFormat(function(d) {
                            return d3.time.format('%x')(new Date(d))
                        });

                    chart.yAxis.tickFormat(d3.format(',.2f'));

                    d3.select('#nvd3-line2 svg')
                        .datum(data.nvd3.monthSales)
                        .transition().duration(500)
                        .call(chart);


                    nv.utils.windowResize(function() {

                        chart.update();
                        setTimeout(function() {
                            d3.selectAll('#nvd3-line2 .nvd3 circle.nv-point').attr("r", "4");
                        }, 300);
                    });


                    $('#nvd3-line2').data('chart', chart);

                    return chart;
                }, function() {

                });
            })();

        });