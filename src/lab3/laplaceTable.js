//table parsed from https://math.semestr.ru/corel/table-laplas.php

/*var val1 = "0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.2,0.21,0.22,0.23,0.24,0.25,0.26,0.27,0.28,0.29,0.3,0.31,1.26,1.27,1.28,1.29,1.3,1.31,1.32,1.33,1.34,1.35,1.36,1.37,1.38,1.39,1.4,1.41,1.42,1.43,1.44,1.45,1.46,1.47,1.48,1.49,1.5,1.51,1.52,1.53,1.54,1.55,1.56,1.57,1.58";
var val1F = "0,0.004,0.008,0.012,0.016,0.0199,0.0239,0.0279,0.0319,0.0359,0.0398,0.0438,0.0478,0.0517,0.0557,0.0596,0.0636,0.0675,0.0714,0.0753,0.0793,0.0832,0.0871,0.091,0.0948,0.0987,0.1026,0.1064,0.1103,0.1141,0.1179,0.1217,0.3962,0.398,0.3997,0.4015,0.4032,0.4049,0.4066,0.4082,0.4099,0.4115,0.4131,0.4147,0.4162,0.4177,0.4192,0.4207,0.4222,0.4236,0.4251,0.4265,0.4279,0.4292,0.4306,0.4319,0.4332,0.4345,0.4357,0.437,0.4382,0.4394,0.4406,0.4418,0.4429";

var val2 = "0.32,0.33,0.34,0.35,0.36,0.37,0.38,0.39,0.4,0.41,0.42,0.43,0.44,0.45,0.46,0.47,0.48,0.49,0.5,0.51,0.52,0.53,0.54,0.55,0.56,0.57,0.58,0.59,0.6,0.61,0.62,0.63,1.59,1.6,1.61,1.62,1.63,1.64,1.65,1.66,1.67,1.68,1.69,1.7,1.71,1.72,1.73,1.74,1.75,1.76,1.77,1.78,1.79,1.8,1.81,1.82,1.83,1.84,1.85,1.86,1.87,1.88,1.89,1.9, 1.91"
var val2F = "0.1255,0.1293,0.1331,0.1368,0.1406,0.1443,0.148,0.1517,0.1554,0.1591,0.1628,0.1664,0.17,0.1736,0.1772,0.1808,0.1844,0.1879,0.1915,0.195,0.1985,0.2019,0.2054,0.2088,0.2123,0.2157,0.219,0.2224,0.2257,0.2291,0.2324,0.2357,0.4441,0.4452,0.4463,0.4474,0.4484,0.4495,0.4505,0.4515,0.4525,0.4535,0.4545,0.4554,0.4564,0.4573,0.4582,0.4591,0.4599,0.4608,0.4616,0.4625,0.4633,0.4641,0.4649,0.4656,0.4664,0.4671,0.4678,0.4686,0.4693,0.4699,0.4706,0.4713,0.4719"


var val3 = "0.64,0.65,0.66,0.67,0.68,0.69,0.7,0.71,0.72,0.73,0.74,0.75,0.76,0.77,0.78,0.79,0.8,0.81,0.82,0.83,0.84,0.85,0.86,0.87,0.88,0.89,0.9,0.91,0.92,0.93,0.94,0.95,1.92,1.93,1.94,1.95,1.96,1.97,1.98,1.99,2,2.02,2.04,2.06,2.08,2.1,2.12,2.14,2.16,2.18,2.2,2.22,2.24,2.26,2.28,2.3,2.32,2.34,2.36,2.38,2.4,2.42,2.44,2.46,2.48";
var val3F = "0.2389,0.2422,0.2454,0.2486,0.2517,0.2549,0.258,0.2611,0.2642,0.2673,0.2703,0.2734,0.2764,0.2794,0.2823,0.2852,0.2881,0.291,0.2939,0.2967,0.2995,0.3023,0.3051,0.3078,0.3106,0.3133,0.3159,0.3186,0.3212,0.3238,0.3264,0.3289,0.4726,0.4732,0.4738,0.4744,0.475,0.4756,0.4761,0.4767,0.4772,0.4783,0.4793,0.4803,0.4812,0.4821,0.483,0.4838,0.4846,0.4854,0.4861,0.4868,0.4875,0.4881,0.4887,0.4893,0.4898,0.4904,0.4909,0.4913,0.4918,0.4922,0.4927,0.4931,0.4934"

var val4 = "0.96,0.97,0.98,0.99,1,1.01,1.02,1.03,1.04,1.05,1.06,1.07,1.08,1.09,1.1,1.11,1.12,1.13,1.14,1.15,1.16,1.17,1.18,1.19,1.2,1.21,1.22,1.23,1.24,1.25,0,0,2.5,2.52,2.54,2.56,2.58,2.6,2.62,2.64,2.66,2.68,2.7,2.72,-2.74,2.76,2.78,2.8,2.82,2.84,2.86,2.88,2.9,2.92,2.94,2.96,2.98,3,3.2,3.4,3.6,3.8,4,4.5, 5"
var val4F = "0.3315,0.334,0.3365,0.3389,0.3413,0.3438,0.3461,0.3485,0.3508,0.3531,0.3554,0.3577,0.3599,0.3621,0.3643,0.3665,0.3686,0.3729,0.3749,0.377,0.379,0.381,0.383,0.3849,0.3869,0.3907,0.3925,0.3944,0,0,0.4938,0.4941,0.4945,0.4948,0.4951,0.4953,0.4956,0.4959,0.4961,0.4963,0.4965,0.4967,0.4969,0.4971,0.4973,0.4974,0.4976,0.4977,0.4979,0.498,0.4981,0.4982,0.4984,0.4985,0.4986,0.49865,0.49931,0.49966,0.49984,0.49992,0.49996,0.49999,0.49999"
*/
export default {
  "0":"0",
  "0.01":"0.004",
  "0.02":"0.008",
  "0.03":"0.012",
  "0.04":"0.016",
  "0.05":"0.0199",
  "0.06":"0.0239",
  "0.07":"0.0279",
  "0.08":"0.0319",
  "0.09":"0.0359",
  "0.1":"0.0398",
  "0.11":"0.0438",
  "0.12":"0.0478",
  "0.13":"0.0517",
  "0.14":"0.0557",
  "0.15":"0.0596",
  "0.16":"0.0636",
  "0.17":"0.0675",
  "0.18":"0.0714",
  "0.19":"0.0753",
  "0.2":"0.0793",
  "0.21":"0.0832",
  "0.22":"0.0871",
  "0.23":"0.091",
  "0.24":"0.0948",
  "0.25":"0.0987",
  "0.26":"0.1026",
  "0.27":"0.1064",
  "0.28":"0.1103",
  "0.29":"0.1141",
  "0.3":"0.1179",
  "0.31":"0.1217",
  "1.26":"0.3962",
  "1.27":"0.398",
  "1.28":"0.3997",
  "1.29":"0.4015",
  "1.3":"0.4032",
  "1.31":"0.4049",
  "1.32":"0.4066",
  "1.33":"0.4082",
  "1.34":"0.4099",
  "1.35":"0.4115",
  "1.36":"0.4131",
  "1.37":"0.4147",
  "1.38":"0.4162",
  "1.39":"0.4177",
  "1.4":"0.4192",
  "1.41":"0.4207",
  "1.42":"0.4222",
  "1.43":"0.4236",
  "1.44":"0.4251",
  "1.45":"0.4265",
  "1.46":"0.4279",
  "1.47":"0.4292",
  "1.48":"0.4306",
  "1.49":"0.4319",
  "1.5":"0.4332",
  "1.51":"0.4345",
  "1.52":"0.4357",
  "1.53":"0.437",
  "1.54":"0.4382",
  "1.55":"0.4394",
  "1.56":"0.4406",
  "1.57":"0.4418",
  "1.58":"0.4429",
  "0.32":"0.1255",
  "0.33":"0.1293",
  "0.34":"0.1331",
  "0.35":"0.1368",
  "0.36":"0.1406",
  "0.37":"0.1443",
  "0.38":"0.148",
  "0.39":"0.1517",
  "0.4":"0.1554",
  "0.41":"0.1591",
  "0.42":"0.1628",
  "0.43":"0.1664",
  "0.44":"0.17",
  "0.45":"0.1736",
  "0.46":"0.1772",
  "0.47":"0.1808",
  "0.48":"0.1844",
  "0.49":"0.1879",
  "0.5":"0.1915",
  "0.51":"0.195",
  "0.52":"0.1985",
  "0.53":"0.2019",
  "0.54":"0.2054",
  "0.55":"0.2088",
  "0.56":"0.2123",
  "0.57":"0.2157",
  "0.58":"0.219",
  "0.59":"0.2224",
  "0.6":"0.2257",
  "0.61":"0.2291",
  "0.62":"0.2324",
  "0.63":"0.2357",
  "1.59":"0.4441",
  "1.6":"0.4452",
  "1.61":"0.4463",
  "1.62":"0.4474",
  "1.63":"0.4484",
  "1.64":"0.4495",
  "1.65":"0.4505",
  "1.66":"0.4515",
  "1.67":"0.4525",
  "1.68":"0.4535",
  "1.69":"0.4545",
  "1.7":"0.4554",
  "1.71":"0.4564",
  "1.72":"0.4573",
  "1.73":"0.4582",
  "1.74":"0.4591",
  "1.75":"0.4599",
  "1.76":"0.4608",
  "1.77":"0.4616",
  "1.78":"0.4625",
  "1.79":"0.4633",
  "1.8":"0.4641",
  "1.81":"0.4649",
  "1.82":"0.4656",
  "1.83":"0.4664",
  "1.84":"0.4671",
  "1.85":"0.4678",
  "1.86":"0.4686",
  "1.87":"0.4693",
  "1.88":"0.4699",
  "1.89":"0.4706",
  "1.9":"0.4713",
  "1.91":"0.4719",
  "2":"0.4772",
  "0.64":"0.2389",
  "0.65":"0.2422",
  "0.66":"0.2454",
  "0.67":"0.2486",
  "0.68":"0.2517",
  "0.69":"0.2549",
  "0.7":"0.258",
  "0.71":"0.2611",
  "0.72":"0.2642",
  "0.73":"0.2673",
  "0.74":"0.2703",
  "0.75":"0.2734",
  "0.76":"0.2764",
  "0.77":"0.2794",
  "0.78":"0.2823",
  "0.79":"0.2852",
  "0.8":"0.2881",
  "0.81":"0.291",
  "0.82":"0.2939",
  "0.83":"0.2967",
  "0.84":"0.2995",
  "0.85":"0.3023",
  "0.86":"0.3051",
  "0.87":"0.3078",
  "0.88":"0.3106",
  "0.89":"0.3133",
  "0.9":"0.3159",
  "0.91":"0.3186",
  "0.92":"0.3212",
  "0.93":"0.3238",
  "0.94":"0.3264",
  "0.95":"0.3289",
  "1.92":"0.4726",
  "1.93":"0.4732",
  "1.94":"0.4738",
  "1.95":"0.4744",
  "1.96":"0.475",
  "1.97":"0.4756",
  "1.98":"0.4761",
  "1.99":"0.4767",
  "2.02":"0.4783",
  "2.04":"0.4793",
  "2.06":"0.4803",
  "2.08":"0.4812",
  "2.1":"0.4821",
  "2.12":"0.483",
  "2.14":"0.4838",
  "2.16":"0.4846",
  "2.18":"0.4854",
  "2.2":"0.4861",
  "2.22":"0.4868",
  "2.24":"0.4875",
  "2.26":"0.4881",
  "2.28":"0.4887",
  "2.3":"0.4893",
  "2.32":"0.4898",
  "2.34":"0.4904",
  "2.36":"0.4909",
  "2.38":"0.4913",
  "2.4":"0.4918",
  "2.42":"0.4922",
  "2.44":"0.4927",
  "2.46":"0.4931",
  "2.48":"0.4934",
  "1":"0.3413",
  "3":"0.49865",
  "4":"0.49996",
  "5":"0.49999",
  "0.96":"0.3315",
  "0.97":"0.334",
  "0.98":"0.3365",
  "0.99":"0.3389",
  "1.01":"0.3438",
  "1.02":"0.3461",
  "1.03":"0.3485",
  "1.04":"0.3508",
  "1.05":"0.3531",
  "1.06":"0.3554",
  "1.07":"0.3577",
  "1.08":"0.3599",
  "1.09":"0.3621",
  "1.1":"0.3643",
  "1.11":"0.3665",
  "1.12":"0.3686",
  "1.13":" 0.3708",
  "1.14":"0.3729",
  "1.15":"0.3749",
  "1.16":"0.377",
  "1.17":"0.379",
  "1.18":"0.381",
  "1.19":"0.383",
  "1.2":"0.3849",
  "1.21":"0.3869",
  "1.22":"0.3883",
  "1.23":"0.3907",
  "1.24":"0.3925",
  "1.25":"0.3944",
  "2.5":"0.4938",
  "2.52":"0.4941",
  "2.54":"0.4945",
  "2.56":"0.4948",
  "2.58":"0.4951",
  "2.6":"0.4953",
  "2.62":"0.4956",
  "2.64":"0.4959",
  "2.66":"0.4961",
  "2.68":"0.4963",
  "2.7":"0.4965",
  "2.72":"0.4967",
  "2.74":"0.4969",
  "2.76":"0.4971",
  "2.78":"0.4973",
  "2.8":"0.4974",
  "2.82":"0.4976",
  "2.84":"0.4977",
  "2.86":"0.4979",
  "2.88":"0.498",
  "2.9":"0.4981",
  "2.92":"0.4982",
  "2.94":"0.4984",
  "2.96":"0.4985",
  "2.98":"0.4986",
  "3.2":"0.49931",
  "3.4":"0.49966",
  "3.6":"0.49984",
  "3.8":"0.49992",
  "4.5":"0.49999"
}