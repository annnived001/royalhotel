/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='',
        aud='media/',
        vid='media/',
        js='',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'girl-selfie',
                            type: 'image',
                            rect: ['173px', '-19px', '191px', '191px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"girl-selfie.jpg",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'name_caption',
                            type: 'image',
                            rect: ['102px', '67px', '65px', '19px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"name_caption.png",'0px','0px']
                        },
                        {
                            id: 'txt-1',
                            type: 'image',
                            rect: ['278px', '23px', '234px', '44px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-1.png",'0px','0px']
                        },
                        {
                            id: 'flash',
                            type: 'image',
                            rect: ['307px', '-8px', '47px', '50px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"flash.png",'0px','0px']
                        },
                        {
                            id: 'pack3',
                            type: 'image',
                            rect: ['102px', '5px', '65px', '91px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pack.jpg",'0px','0px'],
                            transform: [[],[],[],['0.4','0.4']]
                        },
                        {
                            id: 'txt-2',
                            type: 'image',
                            rect: ['183px', '23px', '247px', '44px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-2.png",'0px','0px']
                        },
                        {
                            id: 'oil_drop',
                            type: 'image',
                            rect: ['447px', '-29px', '47px', '77px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"oil_drop.png",'0px','0px']
                        },
                        {
                            id: 'sunsilk-logo',
                            type: 'image',
                            rect: ['0px', '0px', '81px', '29px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sunsilk-logo.jpg",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '726px', '88px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '728px', '90px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 5582,
                    autoPlay: true,
                    data: [
                        [
                            "eid25",
                            "left",
                            1951,
                            299,
                            "linear",
                            "${txt-1}",
                            '378px',
                            '278px'
                        ],
                        [
                            "eid45",
                            "left",
                            3500,
                            332,
                            "linear",
                            "${txt-1}",
                            '278px',
                            '330px'
                        ],
                        [
                            "eid8",
                            "opacity",
                            436,
                            314,
                            "linear",
                            "${name_caption}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            1500,
                            314,
                            "linear",
                            "${name_caption}",
                            '1',
                            '0'
                        ],
                        [
                            "eid60",
                            "top",
                            5082,
                            500,
                            "linear",
                            "${oil_drop}",
                            '-29px',
                            '6px'
                        ],
                        [
                            "eid20",
                            "left",
                            1814,
                            299,
                            "linear",
                            "${girl-selfie}",
                            '173px',
                            '78px'
                        ],
                        [
                            "eid39",
                            "left",
                            3500,
                            332,
                            "linear",
                            "${girl-selfie}",
                            '78px',
                            '0px'
                        ],
                        [
                            "eid19",
                            "top",
                            1814,
                            0,
                            "linear",
                            "${girl-selfie}",
                            '-19px',
                            '-19px'
                        ],
                        [
                            "eid38",
                            "top",
                            3500,
                            0,
                            "linear",
                            "${girl-selfie}",
                            '-19px',
                            '-19px'
                        ],
                        [
                            "eid52",
                            "scaleY",
                            4082,
                            500,
                            "linear",
                            "${pack3}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid6",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${girl-selfie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            3500,
                            332,
                            "linear",
                            "${girl-selfie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid59",
                            "opacity",
                            5082,
                            500,
                            "linear",
                            "${oil_drop}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "left",
                            5582,
                            0,
                            "linear",
                            "${oil_drop}",
                            '447px',
                            '447px'
                        ],
                        [
                            "eid4",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${girl-selfie}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid30",
                            "opacity",
                            750,
                            150,
                            "linear",
                            "${flash}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            900,
                            100,
                            "linear",
                            "${flash}",
                            '1',
                            '0'
                        ],
                        [
                            "eid32",
                            "opacity",
                            1000,
                            135,
                            "linear",
                            "${flash}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            1135,
                            75,
                            "linear",
                            "${flash}",
                            '1',
                            '0'
                        ],
                        [
                            "eid62",
                            "border-width",
                            5582,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid61",
                            "border-color",
                            5582,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgb(0, 0, 0)',
                            'rgb(0, 0, 0)'
                        ],
                        [
                            "eid53",
                            "opacity",
                            4082,
                            500,
                            "linear",
                            "${pack3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "top",
                            1951,
                            0,
                            "linear",
                            "${txt-1}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid44",
                            "top",
                            3500,
                            0,
                            "linear",
                            "${txt-1}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid28",
                            "opacity",
                            1951,
                            299,
                            "linear",
                            "${txt-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            3500,
                            332,
                            "linear",
                            "${txt-1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid55",
                            "opacity",
                            4582,
                            500,
                            "linear",
                            "${txt-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid5",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${girl-selfie}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid51",
                            "scaleX",
                            4082,
                            500,
                            "linear",
                            "${pack3}",
                            '0.4',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("728x90_edgeActions.js");
})("EDGE-36621176");
