const {
  ggb1,
  feedback1,
  cc_sharewithclass_25f61de44752_textbox1: shareText1,
  cc_sharewithclass_25f61de44752_input1: shareInput1,
  cc_sharewithclass_25f61de44752_button1: shareButton1,
  cc_sharewithclass_25f61de44752_studentanswers1,
} = components;

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

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M6 TA L04 - Creating a Histogram","teacherView":false,"layout":"two col"}
*/
