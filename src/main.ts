import "./gantt.css";
import CubicGantt from "./gantt.ts";
import SplitView from "./SplitViewClass.js";
import "./SplitView.css";

function byId(id) {
  return document.getElementById(id);
}

function generateData(count, from, to) {
  let tasks = {
    data: [],
  };

  let project_id = 1;

  from = new Date(from);
  to = new Date(to);

  let arr_prj_length = [20, 30, 10, 40]; //	합쳐서 100 이 되어야함

  for (let prj_index = 0; prj_index < arr_prj_length.length; prj_index++) {
    let cnt = Math.floor((count * arr_prj_length[prj_index]) / 100);

    for (let n = 0; n < cnt; n++) {
      let d_from = new Date(from);
      let d_to = new Date(to);

      let rs = Math.floor(Math.random() * (100 - 0) + 0) + 1;
      let rd = Math.floor(Math.random() * (10 - 3) + 3);
      let rp = Math.floor(Math.random() * (100 - 0) + 0);
      //let r = Math.random() * (max - min) + min;

      d_from.setTime(from.getTime() + rs * 86400000);
      d_to.setTime(from.getTime() + (rs + rd - 1) * 86400000);

      let task = {
        n_id: n + prj_index * 10000,
        start_date: d_from,
        end_date: d_to,
        text: "[" + prj_index + "] Task " + (n + 1),
        parent: 0,
        level: 0,
        d_start:
          d_from.getFullYear() +
          "-" +
          (d_from.getMonth() + 1 + "").padStart(2, "0") +
          "-" +
          (d_from.getDate() + "").padStart(2, "0"),
        d_end:
          d_to.getFullYear() +
          "-" +
          (d_to.getMonth() + 1 + "").padStart(2, "0") +
          "-" +
          (d_to.getDate() + "").padStart(2, "0"),
        test: "TTT",
        progress: rp,
      };

      tasks.data.push(task);
    }
  }
  return tasks;
}

function generateData2(count, from, to) {
  let tasks = {
    data: [],
  };

  let project_id = 1;

  from = new Date(from);
  to = new Date(to);

  let arr_prj_length = [20, 30, 10, 40]; //	합쳐서 100 이 되어야함
  //let arr_prj_length = [5, 5, 5, 5]; //	합쳐서 100 이 되어야함

  for (let prj_index = 0; prj_index < arr_prj_length.length; prj_index++) {
    tasks.data.push({
      n_id: "P." + prj_index,
      text: "Project " + prj_index,
      parent: 0,
      level: 0,
      font_color: "#fff",
      bar_color: "#65c16f",
      progress_color: "#3c9445",
      use_add: true,
      //type: gantt.config.types.project,
      open: true,
    });
  }
  tasks.data.push({
    n_id: "P." + arr_prj_length.length,
    text: "Project " + arr_prj_length.length,
    start_date: new Date(from),
    end_date: new Date(to),
    font_color: "red",
    bar_color: "red",
    progress_color: "red",
    use_add: true,
    parent: 0,
    level: 0,
    //type: gantt.config.types.project,
    open: true,
  });

  for (let prj_index = 0; prj_index < arr_prj_length.length; prj_index++) {
    let cnt = Math.floor((count * arr_prj_length[prj_index]) / 100);

    for (let n = 0; n < cnt; n++) {
      let d_from = new Date(from);
      let d_to = new Date(to);

      let rs = Math.floor(Math.random() * (100 - 0) + 0) + 1;
      let rd = Math.floor(Math.random() * (10 - 3) + 3);
      let rp = Math.floor(Math.random() * (100 - 0) + 0);
      //let r = Math.random() * (max - min) + min;

      d_from.setTime(from.getTime() + rs * 86400000);
      d_to.setTime(from.getTime() + (rs + rd - 1) * 86400000);

      let task = {
        n_id: n + prj_index * 10000,
        start_date: d_from,
        end_date: d_to,
        text: "[" + prj_index + "] Task " + (n + 1),
        use_add: false,
        use_drag: true,
        use_resize: true,
        parent: "P." + prj_index,
        level: 1,
        d_start:
          d_from.getFullYear() +
          "-" +
          (d_from.getMonth() + 1 + "").padStart(2, "0") +
          "-" +
          (d_from.getDate() + "").padStart(2, "0"),
        d_end:
          d_to.getFullYear() +
          "-" +
          (d_to.getMonth() + 1 + "").padStart(2, "0") +
          "-" +
          (d_to.getDate() + "").padStart(2, "0"),
        test: "TTT",
        progress: rp,
      };

      tasks.data.push(task);
    }
  }
  return tasks;
}

/*
bar_color
end_date
font_color
level
n_id
open
parent
progress_color
start_date
text
use_add

*/

function generateData3(count, from, to) {
  /*
  let tasks = {
   data : [
      {n_id: 'P.0', text: 'Project 0', parent: 0, level: 0,open: true, use_add:true, font_color: '#fff', bar_color: '#65c16f', progress_color: "#3c9445", start_date: new Date("2023-09-01") ,end_date: new Date("2023-09-30")},
      {n_id: 'C.0', text: 'level 1 child', parent: 'P.0', level: 1,  use_add:true, use_drag: true,use_resize : true, start_date: new Date("2023-09-06") ,end_date: new Date("2023-09-10"), d_start:"2023-09-06",d_end:"2023-09-10"},
      {n_id: 'C.01', text: 'level 2 child', parent: 'C.0', level: 2, use_add:true, use_drag: true,use_resize : true, start_date: new Date("2023-09-06") ,end_date: new Date("2023-09-10"), d_start:"2023-09-06",d_end:"2023-09-10"},

  ]
  };
*/

  let c3 = "#4169E1";

  let memo = {
    text: "MEMO\nTEXT\nMULTI    OK",
    top: "50px",
    left: " 50px",
    width: " 150px",
    height: " 150px",
  };

  let memo2 = {
    text: "MEMO\nTEXT\nMULTI    OK",
    top: "50px",
    left: " 50px",
    width: " 150px",
    height: " 150px",
  };
  let memo_proj = {
    text: "PROJ\nTEXT\nMULTI    OK",
    top: "50px",
    left: " 50px",
    width: " 150px",
    height: " 150px",
  };
  let tasks = {
    data: [
      {
        n_id: "P.0",
        text: "Project 0",
        level: 0,
        open: true,
        use_add: true,
        font_color: "#fff",
        bar_color: "#65c16f",
        progress_color: "#3c9445",
        memo: memo_proj,
      },
      {
        n_id: "C.0",
        text: "level 1 child",
        parent: "P.0",
        level: 1,
        open: true,
        use_add: true,
      },
      {
        n_id: "C.01",
        text: "level 2 child",
        parent: "C.0",
        level: 2,
        use_add: true,
        use_drag: true,
        use_resize: true,
        bar_color: c3,
        start_date: new Date("2023-09-06"),
        end_date: new Date("2023-09-10"),
        memo: memo,
      },
      {
        n_id: "C.02",
        text: "level 3 child",
        parent: "C.0",
        level: 2,
        use_add: true,
        use_drag: true,
        use_resize: true,
        bar_color: c3,
        start_date: new Date("2023-09-15"),
        end_date: new Date("2023-09-24"),
        memo: memo,
      },

      {
        n_id: "C.1",
        text: "level 1 child",
        parent: "P.0",
        level: 1,
        open: true,
        use_add: true,
      },
      {
        n_id: "C.11",
        text: "level 2 child",
        parent: "C.1",
        level: 2,
        use_add: true,
        use_drag: true,
        use_resize: true,
        bar_color: c3,
        start_date: new Date("2023-09-03"),
        end_date: new Date("2023-09-18"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },
      {
        n_id: "C.12",
        text: "level 2 child",
        parent: "C.1",
        level: 2,
        use_add: true,
        use_drag: true,
        use_resize: true,
        bar_color: c3,
        start_date: new Date("2023-09-09"),
        end_date: new Date("2023-09-20"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },
      {
        n_id: "C.13",
        text: "level 2 child",
        parent: "C.1",
        level: 2,
        open: true,
        use_add: true,
      },
      {
        n_id: "C.131",
        text: "level 3 child",
        parent: "C.13",
        level: 3,
        use_add: true,
        use_drag: true,
        use_resize: true,
        bar_color: c3,
        start_date: new Date("2023-09-21"),
        end_date: new Date("2023-10-05"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },
      {
        n_id: "C.132",
        text: "level 3 child",
        parent: "C.13",
        level: 3,
        use_add: true,
        use_drag: true,
        use_resize: true,
        bar_color: c3,
        start_date: new Date("2023-09-30"),
        end_date: new Date("2023-10-20"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },

      {
        n_id: "P.1",
        text: "Project 1",
        level: 0,
        open: true,
        use_add: true,
        font_color: "#fff",
        bar_color: "#65c16f",
        progress_color: "#3c9445",
      },
      {
        n_id: "C.2",
        text: "level 1 child",
        parent: "P.1",
        level: 1,
        open: true,
        use_add: true,
      },
      {
        n_id: "C.21",
        text: "level 2 child",
        parent: "C.2",
        level: 2,
        use_add: true,
        use_drag: true,
        use_resize: true,
        bar_color: c3,
        start_date: new Date("2023-09-17"),
        end_date: new Date("2023-09-27"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },
      {
        n_id: "C.22",
        text: "level 3 child",
        parent: "C.2",
        level: 2,
        use_add: true,
        use_drag: true,
        use_resize: true,
        bar_color: c3,
        start_date: new Date("2023-09-06"),
        end_date: new Date("2023-09-10"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },

      {
        n_id: "C.3",
        text: "level 1 child",
        parent: "P.1",
        level: 1,
        open: true,
        use_add: true,
      },
      {
        n_id: "C.31",
        text: "level 2 child",
        parent: "C.3",
        level: 2,
        use_add: true,
        use_drag: true,
        use_resize: true,
        bar_color: c3,
        start_date: new Date("2023-09-03"),
        end_date: new Date("2023-09-18"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },
      {
        n_id: "C.32",
        text: "level 2 child",
        parent: "C.3",
        level: 2,
        use_add: true,
        use_drag: true,
        use_resize: true,
        bar_color: c3,
        start_date: new Date("2023-09-09"),
        end_date: new Date("2023-09-20"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
        //       memo: memo2,
      },

      {
        n_id: "P.2",
        text: "Project 2",
        level: 0,
        open: true,
        use_add: true,
        font_color: "#fff",
        bar_color: "#65c16f",
        progress_color: "#3c9445",
        start_date: new Date("2023-09-01"),
        end_date: new Date("2023-09-30"),
      },
      {
        n_id: "C.4",
        text: "level 1 child",
        parent: "P.2",
        level: 1,
        open: true,
        use_add: true,
        start_date: new Date("2023-09-06"),
        end_date: new Date("2023-09-10"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },
      {
        n_id: "C.41",
        text: "level 2 child",
        parent: "C.4",
        level: 2,
        use_add: true,
        use_drag: true,
        use_resize: true,
        bar_color: c3,
        start_date: new Date("2023-09-06"),
        end_date: new Date("2023-09-10"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },
      {
        n_id: "C.42",
        text: "level 3 child",
        parent: "C.4",
        level: 2,
        use_add: true,
        use_drag: true,
        use_resize: true,
        bar_color: c3,
        start_date: new Date("2023-09-06"),
        end_date: new Date("2023-09-10"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },

      {
        n_id: "C.5",
        text: "level 1 child",
        parent: "P.2",
        level: 1,
        open: true,
        use_add: true,
        start_date: new Date("2023-09-06"),
        end_date: new Date("2023-09-10"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },
      {
        n_id: "C.51",
        text: "level 2 child",
        parent: "C.5",
        level: 2,
        use_add: true,
        use_drag: true,
        use_resize: true,
        bar_color: c3,
        start_date: new Date("2023-09-03"),
        end_date: new Date("2023-09-18"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },
      {
        n_id: "C.52",
        text: "level 2 child",
        parent: "C.5",
        level: 2,
        use_add: true,
        use_drag: true,
        use_resize: true,
        bar_color: c3,
        start_date: new Date("2023-09-09"),
        end_date: new Date("2023-09-20"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },

      {
        n_id: "P.3",
        text: "Project 3",
        level: 0,
        open: true,
        use_add: true,
        font_color: "#fff",
        bar_color: "#65c16f",
        progress_color: "#3c9445",
        start_date: new Date("2023-09-01"),
        end_date: new Date("2023-09-30"),
      },
      {
        n_id: "C.6",
        text: "level 1 child",
        parent: "P.3",
        level: 1,
        open: true,
        use_add: true,
        start_date: new Date("2023-09-06"),
        end_date: new Date("2023-09-10"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },
      {
        n_id: "C.61",
        text: "level 2 child",
        parent: "C.6",
        level: 2,
        use_add: true,
        use_drag: true,
        use_resize: true,
        bar_color: c3,
        start_date: new Date("2023-09-06"),
        end_date: new Date("2023-09-10"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },
      {
        n_id: "C.62",
        text: "level 3 child",
        parent: "C.6",
        level: 2,
        use_add: true,
        use_drag: true,
        use_resize: true,
        bar_color: c3,
        start_date: new Date("2023-09-06"),
        end_date: new Date("2023-09-10"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },

      {
        n_id: "C.7",
        text: "level 1 child",
        parent: "P.3",
        level: 1,
        open: true,
        use_add: true,
        start_date: new Date("2023-09-06"),
        end_date: new Date("2023-09-10"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },
      {
        n_id: "C.71",
        text: "level 2 child",
        parent: "C.7",
        level: 2,
        use_add: true,
        use_drag: true,
        use_resize: true,
        bar_color: c3,
        start_date: new Date("2023-09-03"),
        end_date: new Date("2023-09-18"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },
      {
        n_id: "C.72",
        text: "level 2 child",
        parent: "C.7",
        level: 2,
        use_add: true,
        use_drag: true,
        use_resize: true,
        bar_color: c3,
        start_date: new Date("2023-09-09"),
        end_date: new Date("2023-09-20"),
        d_start: "2023-09-06",
        d_end: "2023-09-10",
      },
    ],
  };

  return tasks;
}
//let gantt = new CubicGantt();

function date_str(id) {
  var y = id.getFullYear().toString();
  var m = (id.getMonth() + 1).toString().padStart(2, "0");
  var d = id.getDate().toString().padStart(2, "0");

  var fed = y + "-" + m + "-" + d;
  return fed;
}

function addday_str(day, a) {
  const d2 = new Date(day.getTime());
  d2.setDate(d2.getDate() + a);
  return date_str(d2);
}

function addday(day, a) {
  day.setDate(day.getDate() + a);
}

let today = new Date();

//console.log(today);
//console.log(date_str(today));
//console.log(addday_str(today, 1));
//console.log(addday_str(today, -1));
//console.log(addday_str(today, 20));

let gantt = new CubicGantt("main");

document.addEventListener("DOMContentLoaded", function () {
  let event = new Event("click");

  byId("bt_search").addEventListener("click", function () {
    //console.log(byId("sToday").value);
    //console.log(byId("sEnd").value);
    //let from = new Date(byId("sToday").value).toISOString();
    //let to = new Date(byId("sEnd").value).toISOString();
    //let count = parseInt(byId("sCount").value, 10);

    //let from = new Date(date_str(today)).toISOString();
    let from = "2023-08-25";
    let to = new Date(addday_str(today, 365)).toISOString();
    let count = 600;

    //console.log(from);
    //console.log(to);
    let from_s = date_str(new Date(from));
    let to_s = date_str(new Date(to));

    //console.log(from_s);
    //console.log(to_s);
    byId("sToday").value = from_s;
    byId("sEnd").value = to_s;
    byId("sCount").value = count.toString();

    //let gantt = new CubicGantt();

    gantt.tasks = {};
    //gantt.tasks = generateData3(count, from, to);
    gantt.tasks = generateData3(count, from, to);

    //console.dir(gantt.tasks);

    from = new Date(from);
    to = new Date(to);
    gantt.config.start_date = from;
    gantt.config.end_date = to;

    //gantt.config.check_weekend = false;
    //gantt.config.use_add = false;
    gantt.config.left_type = [
      { title: "Name", width: "220", align: "left", content: "text" },
      { title: "LV", width: "25", align: "center", content: "level" } /*GS*/,
      { title: "ID", width: "60", align: "left", content: "n_id" } /*GS*/,
      { title: "Start", width: "70", align: "center", content: "d_start" },
      { title: "End", width: "70", align: "center", content: "d_end" },
      { title: "Test", width: "30", align: "left", content: "test" },
    ];

    function add_test_main() {
      let obj = {
        n_id: "P." + 999,
        text: "Project " + 999,
        font_color: "red",
        bar_color: "red",
        progress_color: "red",
        use_add: true,
        parent: 0,
        level: 0,
        open: true,
      };
      return obj;
    }

    function add_test_sub(el) {
      let d_start = new Date(el.start_date);
      let d_end = new Date(el.end_date);
      let obj = {
        n_id: "add test",
        start_date: d_start,
        end_date: d_end,
        text: "[TEST]",
        parent: el.n_id,
        level: el.level + 1,
        d_start:
          d_start.getFullYear() +
          "-" +
          (d_start.getMonth() + 1 + "").padStart(2, "0") +
          "-" +
          (d_start.getDate() + "").padStart(2, "0"),
        d_end:
          d_end.getFullYear() +
          "-" +
          (d_end.getMonth() + 1 + "").padStart(2, "0") +
          "-" +
          (d_end.getDate() + "").padStart(2, "0"),
        test: "EEE",
        progress: el.progress,
      };
      return obj;
    }

    function load_test(el) {
      console.log(el);
    }

    gantt.config.fn_add_main = add_test_main;
    gantt.config.fn_add_sub = add_test_sub;
    gantt.config.fn_load_info = load_test;

    gantt.init_gantt("gantt_here");
  });

  byId("bt_search").dispatchEvent(event);

  //SplitView.activate(document.getElementById("gantt_face"))

  let splitview = new SplitView();
  //splitview.activate(document.getElementById("gantt_face"))

  gantt.set_splitview(splitview);

  document
    .getElementById("gantt_here")
    .addEventListener("gantt_change", function (json) {
      //console.log("gantt_change", json.detail.task);
      //gantt.reset_visible( byId("gantt_here"));
    });

  document
    .getElementById("gantt_here")
    .addEventListener("splitresize", function (data) {
      gantt.resize();
    });

  window.addEventListener("resize", function (data) {
    //gantt.reset();
    gantt.resize();
  });

  document.getElementById("v_sync").addEventListener("change", function (data) {
    console.log("v_sync_mode:", data.target.checked);
    gantt.v_sync_mode = data.target.checked;
    if (gantt.v_sync_mode) {
      gantt.v_sync();
    }
  });

  document
    .getElementById("show_grid")
    .addEventListener("change", function (data) {
      console.log("show_grid_mode:", data.target.checked);
      gantt.show_grid_mode = data.target.checked;
      gantt.reset();
    });

  //document
  //  .getElementById("gantt_here")
  //  .scrollTo({top: 0, behavior: 'smooth'});

  //ace.edit("editor");
});
