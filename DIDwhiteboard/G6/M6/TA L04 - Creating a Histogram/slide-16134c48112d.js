const { ggb1, Separator2, feedback1, text1, buttonGroup1, table1 } = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateData({
      buttons: [
        { disabled: false, text: 'Width: 2' },
        { disabled: true, text: 'Width: 10' },
      ],
    });
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerClientListener(scoreDisplay);

function scoreDisplay(a) {
  if (a.type == 'select') {
    if (a.target == 'Atlanta') {
      ggb1.instance.setTextValue('teamText', '\\text{Atlanta Hawks: }131');
    } else if (a.target == 'Boston') {
      ggb1.instance.setTextValue('teamText', '\\text{Boston Celtics: }114');
    } else if (a.target == 'Brooklyn') {
      ggb1.instance.setTextValue('teamText', '\\text{Brooklyn Nets: }104');
    } else if (a.target == 'Charlotte') {
      ggb1.instance.setTextValue('teamText', '\\text{Charlotte Hornets: }109');
    } else if (a.target == 'Chicago') {
      ggb1.instance.setTextValue('teamText', '\\text{Chicago Bulls: }108');
    } else if (a.target == 'Cleveland') {
      ggb1.instance.setTextValue(
        'teamText',
        '\\text{Cleveland Cavaliers: }103'
      );
    } else if (a.target == 'Dallas') {
      ggb1.instance.setTextValue('teamText', '\\text{Dallas Mavericks: }113');
    } else if (a.target == 'Denver') {
      ggb1.instance.setTextValue('teamText', '\\text{Denver Nuggets: }97');
    } else if (a.target == 'Detroit') {
      ggb1.instance.setTextValue('teamText', '\\text{Detroit Pistons: }106');
    } else if (a.target == 'GoldenState') {
      ggb1.instance.setTextValue(
        'teamText',
        '\\text{Golden State Warriors: }107'
      );
    } else if (a.target == 'Houston') {
      ggb1.instance.setTextValue('teamText', '\\text{Houston Rockets: }117');
    } else if (a.target == 'Indiana') {
      ggb1.instance.setTextValue('teamText', '\\text{Indiana Pacers: }111');
    } else if (a.target == 'LAClippers') {
      ggb1.instance.setTextValue(
        'teamText',
        '\\text{Los Angeles Clippers: }131'
      );
    } else if (a.target == 'LALakers') {
      ggb1.instance.setTextValue('teamText', '\\text{Los Angeles Lakers: }102');
    } else if (a.target == 'Memphis') {
      ggb1.instance.setTextValue('teamText', '\\text{Memphis Grizzlies: }115');
    } else if (a.target == 'Miami') {
      ggb1.instance.setTextValue('teamText', '\\text{Miami Heat: }98');
    } else if (a.target == 'Milwaukee') {
      ggb1.instance.setTextValue('teamText', '\\text{Milwaukee Bucks: }95');
    } else if (a.target == 'Minnesota') {
      ggb1.instance.setTextValue(
        'teamText',
        '\\text{Minnesota Timberwolves: }111'
      );
    } else if (a.target == 'NewOrleans') {
      ggb1.instance.setTextValue(
        'teamText',
        '\\text{New Orleans Pelicans: }120'
      );
    } else if (a.target == 'NewYork') {
      ggb1.instance.setTextValue('teamText', '\\text{New York Knicks: }136');
    } else if (a.target == 'OKC') {
      ggb1.instance.setTextValue(
        'teamText',
        '\\text{Oklahoma City Thunder: }105'
      );
    } else if (a.target == 'Orlando') {
      ggb1.instance.setTextValue('teamText', '\\text{Orlando Magic: }120');
    } else if (a.target == 'Philly') {
      ggb1.instance.setTextValue('teamText', '\\text{Philadelphia 76ers: }124');
    } else if (a.target == 'Phoenix') {
      ggb1.instance.setTextValue('teamText', '\\text{Phoenix Suns: }105');
    } else if (a.target == 'Portland') {
      ggb1.instance.setTextValue(
        'teamText',
        '\\text{Portland Trail Blazers: }121'
      );
    } else if (a.target == 'Sacramento') {
      ggb1.instance.setTextValue('teamText', '\\text{Sacramento Kings: }113');
    } else if (a.target == 'SanAntonio') {
      ggb1.instance.setTextValue('teamText', '\\text{San Antonio Spurs: }119');
    } else if (a.target == 'Toronto') {
      ggb1.instance.setTextValue('teamText', '\\text{Toronto Raptors: }101');
    } else if (a.target == 'Utah') {
      ggb1.instance.setTextValue('teamText', '\\text{Utah Jazz: }92');
    } else if (a.target == 'Washington') {
      ggb1.instance.setTextValue('teamText', '\\text{Washington Wizards: }122');
    }
    ggb1.instance.setVisible('C6', true);
  }
  if (a.type == 'deselect') {
    ggb1.instance.setVisible('C6', false);
  }
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.setValue('show2', true);
  ggb1.instance.setValue('show10', false);
  buttonGroup1.updateData({
    buttons: [
      { disabled: true, text: 'Width: 2' },
      { disabled: false, text: 'Width: 10' },
    ],
  });
  table1.updateData({
    rows: [
      [
        { value: '90 \\text{ to}< 92', math: true },
        { value: '0', math: true },
      ],
      [
        { value: '92 \\text{ to}< 94', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '94 \\text{ to}< 96', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '96 \\text{ to}< 98', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '98 \\text{ to}< 100', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '100 \\text{ to}< 102', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '102 \\text{ to}< 104', math: true },
        { value: '2', math: true },
      ],
      [
        { value: '104 \\text{ to}< 106', math: true },
        { value: '3', math: true },
      ],
      [
        { value: '106 \\text{ to}< 108', math: true },
        { value: '2', math: true },
      ],
      [
        { value: '108 \\text{ to}< 110', math: true },
        { value: '2', math: true },
      ],
      [
        { value: '110 \\text{ to}< 112', math: true },
        { value: '2', math: true },
      ],
      [
        { value: '112 \\text{ to}< 114', math: true },
        { value: '2', math: true },
      ],
      [
        { value: '114 \\text{ to}< 116', math: true },
        { value: '2', math: true },
      ],
      [
        { value: '116 \\text{ to}< 118', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '118 \\text{ to}< 120', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '120 \\text{ to}< 122', math: true },
        { value: '3', math: true },
      ],
      [
        { value: '122 \\text{ to}< 124', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '124 \\text{ to}< 126', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '126 \\text{ to}< 128', math: true },
        { value: '0', math: true },
      ],
      [
        { value: '128 \\text{ to}< 130', math: true },
        { value: '0', math: true },
      ],
      [
        { value: '130 \\text{ to}< 132', math: true },
        { value: '2', math: true },
      ],
      [
        { value: '132 \\text{ to}< 134', math: true },
        { value: '0', math: true },
      ],
      [
        { value: '134 \\text{ to}< 136', math: true },
        { value: '0', math: true },
      ],
      [
        { value: '136 \\text{ to}< 138', math: true },
        { value: '1', math: true },
      ],
      [
        { value: '138 \\text{ to}< 140', math: true },
        { value: '0', math: true },
      ],
    ],
  });
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setValue('show2', false);
  ggb1.instance.setValue('show10', true);
  buttonGroup1.updateData({
    buttons: [
      { disabled: false, text: 'Width: 2' },
      { disabled: true, text: 'Width: 10' },
    ],
  });
  table1.updateData({
    rows: [
      [
        { value: '90 \\text{ to}< 100', math: true },
        { value: '4', math: true },
      ],
      [
        { value: '100 \\text{ to}< 110', math: true },
        { value: '10', math: true },
      ],
      [
        { value: '110 \\text{ to}< 120', math: true },
        { value: '8', math: true },
      ],
      [
        { value: '120 \\text{ to}< 130', math: true },
        { value: '5', math: true },
      ],
      [
        { value: '130 \\text{ to}< 140', math: true },
        { value: '3', math: true },
      ],
    ],
  });
});

/*
{"compTotals":{"geogebra":1,"separator":1,"textbox":2,"buttongroup":1,"table":1},"stage":"Learn","lessonInfo":"6 M6 TA L04 - Creating a Histogram","teacherView":false,"layout":"two col"}
*/
