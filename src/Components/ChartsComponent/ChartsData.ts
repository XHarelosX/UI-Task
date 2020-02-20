// ----------- Chart 1 -------------->
export const chart_1_Data: object = {
    labels: ["Websites", "Logo", "Social Media", "Adwords", "E-Commerce"],

    datasets: [
        {
            data: [10, 30, 50, 40, 20],

            backgroundColor: [
                "#4b74e0",
                "#4164c2",
                "#3755a4",
                "#25396e",
                "#5584ff"
            ],
            borderWidth: 0
        }
    ]
};
export const chart_1_Options: object = {
    legend: {
        position: "right",
        labels: {
            padding: 13,
            boxWidth: 12,
            fontSize: 14,
            usePointStyle: true
        }
    },
    layout: {
        padding: {
            left: 0,
            right: 20,
            top: 0,
            bottom: 50
        }
    },
    cutoutPercentage: 60
};

// ----------- Chart 2 -------------->
export const chart_2_Data: object = {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    datasets: [
        {
            data: [86, 114, 90, 256, 600, 300, 350, 150, 190, 170, 300, 280],
            borderColor: "#3e95cd",
            fill: false,
            pointRadius: 0
        }
    ]
};
export const chart_2_Options: object = {
    legend: {
        display: false
    },
    scales: {
        yAxes: [
            {
                stacked: true
            }
        ]
    },
    layout: {
        padding: {
            left: 20,
            right: 30,
            top: 20,
            bottom: 0
        }
    }
};
