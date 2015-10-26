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
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'curve',
                            type: 'image',
                            rect: ['96px', '0px', '324px', '400px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"curve.jpg",'0px','0px'],
                            transform: [[],[],[],['1','1.1']]
                        },
                        {
                            id: 'logo_ssk',
                            type: 'image',
                            rect: ['0px', '0px', '134px', '52px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo_ssk.png",'0px','0px']
                        },
                        {
                            id: 'oil_drop',
                            type: 'image',
                            rect: ['252px', '36px', '70px', '114px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"oil_drop.png",'0px','0px']
                        },
                        {
                            id: 'pack',
                            type: 'image',
                            rect: ['42px', '72px', '200px', '282px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pack.png",'0px','0px'],
                            transform: [[],[],[],['0.4','0.4']]
                        },
                        {
                            id: 'title',
                            type: 'image',
                            rect: ['479px', '41px', '313px', '23px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"title.png",'0px','0px']
                        },
                        {
                            id: 'btn_exotic',
                            type: 'image',
                            rect: ['396px', '119px', '141px', '140px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"circle_1_click.png",'0px','0px']
                        },
                        {
                            id: 'circle_2',
                            type: 'image',
                            rect: ['566px', '119px', '139px', '139px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"circle_2_click.png",'0px','0px']
                        },
                        {
                            id: 'circle_3',
                            type: 'image',
                            rect: ['735px', '117px', '143px', '143px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"circle_3_click.png",'0px','0px']
                        },
                        {
                            id: 'btn_findoutmore',
                            type: 'image',
                            rect: ['523px', '308px', '225px', '64px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"btn_findoutmore.jpg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '900px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid46",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${title}",
                            '0',
                            '0'
                        ],
                        [
                            "eid23",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${title}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            1250,
                            1250,
                            "linear",
                            "${title}",
                            '1',
                            '0.99000000953674'
                        ],
                        [
                            "eid97",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${btn_exotic}",
                            '119px',
                            '119px'
                        ],
                        [
                            "eid52",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${circle_2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid30",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${circle_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid50",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${btn_exotic}",
                            '0',
                            '0'
                        ],
                        [
                            "eid28",
                            "opacity",
                            1500,
                            250,
                            "linear",
                            "${btn_exotic}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${circle_3}",
                            '117px',
                            '117px'
                        ],
                        [
                            "eid95",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${circle_2}",
                            '119px',
                            '119px'
                        ],
                        [
                            "eid12",
                            "scaleY",
                            540,
                            250,
                            "linear",
                            "${curve}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid14",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${pack}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${pack}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid18",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${pack}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${btn_findoutmore}",
                            '0',
                            '0'
                        ],
                        [
                            "eid44",
                            "opacity",
                            2250,
                            250,
                            "linear",
                            "${btn_findoutmore}",
                            '0',
                            '1'
                        ],
                        [
                            "eid88",
                            "top",
                            290,
                            250,
                            "linear",
                            "${oil_drop}",
                            '36px',
                            '68px'
                        ],
                        [
                            "eid86",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${oil_drop}",
                            '0',
                            '0'
                        ],
                        [
                            "eid84",
                            "opacity",
                            290,
                            250,
                            "linear",
                            "${oil_drop}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "opacity",
                            540,
                            250,
                            "linear",
                            "${curve}",
                            '0',
                            '0.85'
                        ],
                        [
                            "eid56",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${circle_3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid32",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${circle_3}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("900x400_edgeActions.js");
})("EDGE-9910944");
