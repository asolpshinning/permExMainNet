// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const map0_ctc = ctc2;
  
  const map1_ctc = ctc2;
  
  const map2_ctc = ctc2;
  
  
  return {
    infos: {
      vBtCtc: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v297, v298] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v297, v298] = svs;
            return (await ((async (_v321 ) => {
                const v321 = stdlib.protect(ctc0, _v321, null);
              
              const v322 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v321), null);
              const v323 = stdlib.fromSome(v322, v298);
              
              return v323;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      vManCtc: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v297, v298] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v297, v298] = svs;
            return (await ((async (_v318 ) => {
                const v318 = stdlib.protect(ctc0, _v318, null);
              
              const v319 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v318), null);
              const v320 = stdlib.fromSome(v319, v298);
              
              return v320;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      vStCtc: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v297, v298] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v297, v298] = svs;
            return (await ((async (_v324 ) => {
                const v324 = stdlib.protect(ctc0, _v324, null);
              
              const v325 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v324), null);
              const v326 = stdlib.fromSome(v325, v298);
              
              return v326;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        }
      },
    views: {
      1: [ctc0, ctc0],
      4: [ctc0, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    zeroAddress: ctc1
    });
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Data({
    btCtcId0_92: ctc4,
    manCtcId0_92: ctc4,
    stCtcId0_92: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  
  const v293 = 'I have deployed';
  const v294 = stdlib.protect(ctc3, await interact.getParams(v293), {
    at: './index.rsh:35:62:application',
    fs: ['at ./index.rsh:34:17:application call to [unknown function] (defined at: ./index.rsh:34:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v295 = v294.zeroAddress;
  
  const txn1 = await (ctc.sendrecv({
    args: [v295],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:37:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:37:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v298], secs: v300, time: v299, didSend: v30, from: v297 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v298], secs: v300, time: v299, didSend: v30, from: v297 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v297, v298],
    evt_cnt: 0,
    funcNum: 1,
    lct: v299,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v303, time: v302, didSend: v35, from: v301 } = txn2;
      
      ;
      const v308 = v302;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v303, time: v302, didSend: v35, from: v301 } = txn2;
  ;
  const v304 = stdlib.addressEq(v297, v301);
  stdlib.assert(v304, {
    at: './index.rsh:43:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  let v308 = v302;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc5],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v297, v298],
        evt_cnt: 0,
        funcNum: 4,
        lct: v308,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:128:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          
          const {data: [], secs: v505, time: v504, didSend: v255, from: v503 } = txn4;
          
          ;
          const cv308 = v504;
          
          await (async () => {
            const v308 = cv308;
            
            if (await (async () => {
              
              return true;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v505, time: v504, didSend: v255, from: v503 } = txn4;
      ;
      const v506 = stdlib.addressEq(v297, v503);
      stdlib.assert(v506, {
        at: './index.rsh:128:21:dot',
        fs: ['at ./index.rsh:127:40:application call to [unknown function] (defined at: ./index.rsh:127:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv308 = v504;
      
      v308 = cv308;
      
      continue;
      }
    else {
      const {data: [v371], secs: v373, time: v372, didSend: v200, from: v370 } = txn3;
      switch (v371[0]) {
        case 'btCtcId0_92': {
          const v374 = v371[1];
          undefined /* setApiDetails */;
          ;
          const v385 = v374[stdlib.checkedBigNumberify('./index.rsh:95:13:spread', stdlib.UInt_max, '0')];
          await stdlib.mapSet(map1, v370, v385);
          const v386 = true;
          await txn3.getOutput('btCtcId', 'v386', ctc6, v386);
          const cv308 = v372;
          
          v308 = cv308;
          
          continue;
          break;
          }
        case 'manCtcId0_92': {
          const v417 = v371[1];
          undefined /* setApiDetails */;
          ;
          const v439 = v417[stdlib.checkedBigNumberify('./index.rsh:79:13:spread', stdlib.UInt_max, '0')];
          await stdlib.mapSet(map0, v370, v439);
          const v440 = true;
          await txn3.getOutput('manCtcId', 'v440', ctc6, v440);
          const cv308 = v372;
          
          v308 = cv308;
          
          continue;
          break;
          }
        case 'stCtcId0_92': {
          const v460 = v371[1];
          undefined /* setApiDetails */;
          ;
          const v493 = v460[stdlib.checkedBigNumberify('./index.rsh:111:13:spread', stdlib.UInt_max, '0')];
          await stdlib.mapSet(map2, v370, v493);
          const v494 = true;
          await txn3.getOutput('stCtcId', 'v494', ctc6, v494);
          const cv308 = v372;
          
          v308 = cv308;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  
  
  };
export async function _btCtcId4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _btCtcId4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _btCtcId4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Data({
    btCtcId0_92: ctc3,
    manCtcId0_92: ctc3,
    stCtcId0_92: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v297, v298] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc1]);
  const v344 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:98:13:application call to [unknown function] (defined at: ./index.rsh:98:13:function exp)', 'at ./index.rsh:62:59:application call to "runbtCtcId0_92" (defined at: ./index.rsh:95:13:function exp)', 'at ./index.rsh:62:59:application call to [unknown function] (defined at: ./index.rsh:62:59:function exp)'],
    msg: 'in',
    who: 'btCtcId'
    });
  const v351 = ['btCtcId0_92', v344];
  
  const txn1 = await (ctc.sendrecv({
    args: [v297, v298, v351],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:102:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v371], secs: v373, time: v372, didSend: v200, from: v370 } = txn1;
      
      switch (v371[0]) {
        case 'btCtcId0_92': {
          const v374 = v371[1];
          sim_r.txns.push({
            kind: 'api',
            who: "btCtcId"
            });
          ;
          const v385 = v374[stdlib.checkedBigNumberify('./index.rsh:95:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 1, v370, v385);
          const v386 = true;
          const v387 = await txn1.getOutput('btCtcId', 'v386', ctc5, v386);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'manCtcId0_92': {
          const v417 = v371[1];
          
          break;
          }
        case 'stCtcId0_92': {
          const v460 = v371[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v371], secs: v373, time: v372, didSend: v200, from: v370 } = txn1;
  switch (v371[0]) {
    case 'btCtcId0_92': {
      const v374 = v371[1];
      undefined /* setApiDetails */;
      ;
      const v385 = v374[stdlib.checkedBigNumberify('./index.rsh:95:13:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map1, v370, v385);
      const v386 = true;
      const v387 = await txn1.getOutput('btCtcId', 'v386', ctc5, v386);
      if (v200) {
        stdlib.protect(ctc0, await interact.out(v374, v387), {
          at: './index.rsh:96:13:application',
          fs: ['at ./index.rsh:96:13:application call to [unknown function] (defined at: ./index.rsh:96:13:function exp)', 'at ./index.rsh:107:20:application call to "res" (defined at: ./index.rsh:104:13:function exp)', 'at ./index.rsh:104:13:application call to [unknown function] (defined at: ./index.rsh:104:13:function exp)'],
          msg: 'out',
          who: 'btCtcId'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'manCtcId0_92': {
      const v417 = v371[1];
      return;
      break;
      }
    case 'stCtcId0_92': {
      const v460 = v371[1];
      return;
      break;
      }
    }
  
  
  };
export async function _manCtcId4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _manCtcId4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _manCtcId4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Data({
    btCtcId0_92: ctc3,
    manCtcId0_92: ctc3,
    stCtcId0_92: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v297, v298] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc1]);
  const v333 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:82:13:application call to [unknown function] (defined at: ./index.rsh:82:13:function exp)', 'at ./index.rsh:62:59:application call to "runmanCtcId0_92" (defined at: ./index.rsh:79:13:function exp)', 'at ./index.rsh:62:59:application call to [unknown function] (defined at: ./index.rsh:62:59:function exp)'],
    msg: 'in',
    who: 'manCtcId'
    });
  const v340 = ['manCtcId0_92', v333];
  
  const txn1 = await (ctc.sendrecv({
    args: [v297, v298, v340],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:86:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v371], secs: v373, time: v372, didSend: v200, from: v370 } = txn1;
      
      switch (v371[0]) {
        case 'btCtcId0_92': {
          const v374 = v371[1];
          
          break;
          }
        case 'manCtcId0_92': {
          const v417 = v371[1];
          sim_r.txns.push({
            kind: 'api',
            who: "manCtcId"
            });
          ;
          const v439 = v417[stdlib.checkedBigNumberify('./index.rsh:79:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, v370, v439);
          const v440 = true;
          const v441 = await txn1.getOutput('manCtcId', 'v440', ctc5, v440);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'stCtcId0_92': {
          const v460 = v371[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v371], secs: v373, time: v372, didSend: v200, from: v370 } = txn1;
  switch (v371[0]) {
    case 'btCtcId0_92': {
      const v374 = v371[1];
      return;
      break;
      }
    case 'manCtcId0_92': {
      const v417 = v371[1];
      undefined /* setApiDetails */;
      ;
      const v439 = v417[stdlib.checkedBigNumberify('./index.rsh:79:13:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, v370, v439);
      const v440 = true;
      const v441 = await txn1.getOutput('manCtcId', 'v440', ctc5, v440);
      if (v200) {
        stdlib.protect(ctc0, await interact.out(v417, v441), {
          at: './index.rsh:80:13:application',
          fs: ['at ./index.rsh:80:13:application call to [unknown function] (defined at: ./index.rsh:80:13:function exp)', 'at ./index.rsh:91:20:application call to "res" (defined at: ./index.rsh:88:13:function exp)', 'at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:13:function exp)'],
          msg: 'out',
          who: 'manCtcId'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'stCtcId0_92': {
      const v460 = v371[1];
      return;
      break;
      }
    }
  
  
  };
export async function _stCtcId4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _stCtcId4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _stCtcId4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Data({
    btCtcId0_92: ctc3,
    manCtcId0_92: ctc3,
    stCtcId0_92: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v297, v298] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc1]);
  const v355 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)', 'at ./index.rsh:62:59:application call to "runstCtcId0_92" (defined at: ./index.rsh:111:13:function exp)', 'at ./index.rsh:62:59:application call to [unknown function] (defined at: ./index.rsh:62:59:function exp)'],
    msg: 'in',
    who: 'stCtcId'
    });
  const v362 = ['stCtcId0_92', v355];
  
  const txn1 = await (ctc.sendrecv({
    args: [v297, v298, v362],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:118:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v371], secs: v373, time: v372, didSend: v200, from: v370 } = txn1;
      
      switch (v371[0]) {
        case 'btCtcId0_92': {
          const v374 = v371[1];
          
          break;
          }
        case 'manCtcId0_92': {
          const v417 = v371[1];
          
          break;
          }
        case 'stCtcId0_92': {
          const v460 = v371[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stCtcId"
            });
          ;
          const v493 = v460[stdlib.checkedBigNumberify('./index.rsh:111:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, v370, v493);
          const v494 = true;
          const v495 = await txn1.getOutput('stCtcId', 'v494', ctc5, v494);
          
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v371], secs: v373, time: v372, didSend: v200, from: v370 } = txn1;
  switch (v371[0]) {
    case 'btCtcId0_92': {
      const v374 = v371[1];
      return;
      break;
      }
    case 'manCtcId0_92': {
      const v417 = v371[1];
      return;
      break;
      }
    case 'stCtcId0_92': {
      const v460 = v371[1];
      undefined /* setApiDetails */;
      ;
      const v493 = v460[stdlib.checkedBigNumberify('./index.rsh:111:13:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, v370, v493);
      const v494 = true;
      const v495 = await txn1.getOutput('stCtcId', 'v494', ctc5, v494);
      if (v200) {
        stdlib.protect(ctc0, await interact.out(v460, v495), {
          at: './index.rsh:112:13:application',
          fs: ['at ./index.rsh:112:13:application call to [unknown function] (defined at: ./index.rsh:112:13:function exp)', 'at ./index.rsh:123:20:application call to "res" (defined at: ./index.rsh:120:13:function exp)', 'at ./index.rsh:120:13:application call to [unknown function] (defined at: ./index.rsh:120:13:function exp)'],
          msg: 'out',
          who: 'stCtcId'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    }
  
  
  };
export async function btCtcId(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for btCtcId expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for btCtcId expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _btCtcId4(ctcTop, interact);}
  };
export async function manCtcId(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for manCtcId expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for manCtcId expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _manCtcId4(ctcTop, interact);}
  };
export async function stCtcId(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for stCtcId expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for stCtcId expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _stCtcId4(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`btCtcId(address)byte`, `manCtcId(address)byte`, `stCtcId(address)byte`],
    pure: [`vBtCtc(address)address`, `vManCtc(address)address`, `vStCtc(address)address`],
    sigs: [`btCtcId(address)byte`, `manCtcId(address)byte`, `stCtcId(address)byte`, `vBtCtc(address)address`, `vManCtc(address)address`, `vStCtc(address)address`]
    },
  appApproval: `BiALAAEEAmPLyqWEBZT7goQIodzKrAuCpM+uAtSbqO4D////////////ASYDAQABAQAiNQAxGEEDKypkSSJbNQGBCFs1AjEZIxJBAAoxACghBK9mQgL3NhoAF0lBANwiNQQjNQZJIQUMQABaSSEGDEAAKUkhBwxAABAhBxJENhoBNf8oNP9QQgEIIQYSRDYaATX/gAECNP9QQgD2IQUSRDQBJBJEKGRJNQNXICA2GgGIAs9XQiFJNf9XASA0/yJVTTUHQgKXSSEIDEAAQUkhCQxAABAhCRJENhoBNf8pNP9QQgCuIQgSRDQBJBJEKGRJNQNXICA2GgGIAodXACFJNf9XASA0/yJVTTUHQgJPgbXV2gUSRDQBJBJEKGRJNQNXICA2GgGIAlpXISFJNf9XASA0/yJVTTUHQgIiNhoCFzUENhoDNhoBF0mBAwxAATBJJAxAADwkEkQkNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEkSc087AyBiEKD0Q0/zEAEkQ0/zQDVyAgMgZCAWhIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/VyAgNf5JNQU1/YAEFJFA1DT9ULAyBiEKDEQ0/SJVSSMMQABzSSUMQAA3JRJENP1XASA1/DEAKDEAiAGZKTT8UDX7VwBCNPtQZoAJAAAAAAAAAe4BsCk1BzT/NP4yBkIA60g0/VcBIDX8MQAoMQCIAWQpNPxQNftXIUI0+0xQZoAJAAAAAAAAAbgBsCk1BzT/NP4yBkIAtUg0/VcBIDX8MQAoMQCIAS4pNPxQNftJVwAhNPtQTFdCIVBmgAkAAAAAAAABggGwKTUHNP80/jIGQgB6SSMMQAA2IxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABJqLkXSwNP8xABJENP80A1cgIDIGQgA+SIGgjQaIAM4iNAESRDQESSISTDQCEhFESTUFNf+ABPuGb+40/1CwMQA0/1AoSwFXAEBnSCM1ATIGNQJCADg1/zX+STX9NP5QKEsBVwBAZ0gkNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQjMTcSRCI1ASI1AkL/r0kxGGFAAAVIIQSviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 99,
  stateKeys: 1,
  stateSize: 64,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v298",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v298",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T9",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_btCtcId0_92",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_manCtcId0_92",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_stCtcId0_92",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T9",
                "name": "v371",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v386",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v440",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v494",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Some",
            "type": "address"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Some",
            "type": "address"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Some",
            "type": "address"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T9",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_btCtcId0_92",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_manCtcId0_92",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_stCtcId0_92",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T9",
                "name": "v371",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "btCtcId",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "manCtcId",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "stCtcId",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v960",
        "type": "address"
      }
    ],
    "name": "vBtCtc",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v962",
        "type": "address"
      }
    ],
    "name": "vManCtc",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v964",
        "type": "address"
      }
    ],
    "name": "vStCtc",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001ba738038062001ba78339810160408190526200002691620001d2565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a16200008b3415600a62000102565b604080518082018252600060208083018281523380855286830151516001600160a01b0390811683526001948590554390945585519283015251909116928101929092529060600160405160208183030381529060405260029080519060200190620000f99291906200012c565b505050620002cd565b81620001285760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200013a9062000290565b90600052602060002090601f0160209004810192826200015e5760008555620001a9565b82601f106200017957805160ff1916838001178555620001a9565b82800160010185558215620001a9579182015b82811115620001a95782518255916020019190600101906200018c565b50620001b7929150620001bb565b5090565b5b80821115620001b75760008155600101620001bc565b6000818303604080821215620001e757600080fd5b80518082016001600160401b0380821183831017156200021757634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200023157600080fd5b8351945060208501915084821081831117156200025e57634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200027e57600080fd5b90825260208101919091529392505050565b600181811c90821680620002a557607f821691505b60208210811415620002c757634e487b7160e01b600052602260045260246000fd5b50919050565b6118ca80620002dd6000396000f3fe6080604052600436106100e05760003560e01c80638b82f14111610084578063b6af313611610056578063b6af313614610246578063ba492d7614610266578063cadc2e7a14610279578063f7bacc521461029957005b80638b82f141146101b8578063a23f4285146101f0578063a7661d5414610210578063ab53f2c61461022357005b8063496f1052116100bd578063496f10521461014d57806380eb4ac314610170578063817d57f31461018357806383230757146101a357005b80631e93b0f1146100e95780632c10a1591461010d5780633bc5b7bf1461012057005b366100e757005b005b3480156100f557600080fd5b506003545b6040519081526020015b60405180910390f35b6100e761011b3660046114b1565b6102ac565b34801561012c57600080fd5b5061014061013b3660046114e1565b6102e5565b6040516101049190611514565b61016061015b3660046114e1565b610311565b6040519015158152602001610104565b61016061017e3660046114e1565b61036a565b34801561018f57600080fd5b5061014061019e3660046114e1565b6103bc565b3480156101af57600080fd5b506001546100fa565b3480156101c457600080fd5b506101d86101d33660046114e1565b6103e2565b6040516001600160a01b039091168152602001610104565b3480156101fc57600080fd5b506101d861020b3660046114e1565b610599565b6100e761021e3660046114b1565b610744565b34801561022f57600080fd5b50610238610779565b604051610104929190611553565b34801561025257600080fd5b506101d86102613660046114e1565b610816565b6100e76102743660046115b0565b6109c1565b34801561028557600080fd5b506101406102943660046114e1565b6109f6565b6101606102a73660046114e1565b610a1c565b60408051606081018252600080825260208201819052918101919091526102e16102db3684900384018461165b565b82610a75565b5050565b604080516060810182526000808252602082018190529181019190915261030b82610bf1565b92915050565b600061031b611343565b60208181018051516002905251516060908101516001600160a01b0386169052604080519182018152600080835292820183905281019190915261035f8282610ccc565b604001519392505050565b6000610374611343565b60208181018051516000908190529051518201516001600160a01b0386169052604080516060810182528281529283018290528201526103b48282610ccc565b519392505050565b604080516060810182526000808252602082018190529181019190915261030b82611046565b60006001600054141561049f576000600280546103fe90611698565b80601f016020809104026020016040519081016040528092919081815260200182805461042a90611698565b80156104775780601f1061044c57610100808354040283529160200191610477565b820191906000526020600020905b81548152906001019060200180831161045a57829003601f168201915b505050505080602001905181019061048f91906116cd565b905061049d600060096110d3565b505b60046000541415610588576000600280546104b990611698565b80601f01602080910402602001604051908101604052809291908181526020018280546104e590611698565b80156105325780601f1061050757610100808354040283529160200191610532565b820191906000526020600020905b81548152906001019060200180831161051557829003601f168201915b505050505080602001905181019061054a91906116cd565b9050600161055784611046565b516001811115610569576105696114fe565b14610578578060200151610581565b61035f83611046565b9392505050565b610594600060096110d3565b919050565b600060016000541415610656576000600280546105b590611698565b80601f01602080910402602001604051908101604052809291908181526020018280546105e190611698565b801561062e5780601f106106035761010080835404028352916020019161062e565b820191906000526020600020905b81548152906001019060200180831161061157829003601f168201915b505050505080602001905181019061064691906116cd565b9050610654600060086110d3565b505b600460005414156107385760006002805461067090611698565b80601f016020809104026020016040519081016040528092919081815260200182805461069c90611698565b80156106e95780601f106106be576101008083540402835291602001916106e9565b820191906000526020600020905b8154815290600101906020018083116106cc57829003601f168201915b505050505080602001905181019061070191906116cd565b9050600161070e84610bf1565b516001811115610720576107206114fe565b1461072f578060200151610581565b61035f83610bf1565b610594600060086110d3565b60408051606081018252600080825260208201819052918101919091526102e16107733684900384018461165b565b826110f8565b60006060600054600280805461078e90611698565b80601f01602080910402602001604051908101604052809291908181526020018280546107ba90611698565b80156108075780601f106107dc57610100808354040283529160200191610807565b820191906000526020600020905b8154815290600101906020018083116107ea57829003601f168201915b50505050509050915091509091565b6000600160005414156108d35760006002805461083290611698565b80601f016020809104026020016040519081016040528092919081815260200182805461085e90611698565b80156108ab5780601f10610880576101008083540402835291602001916108ab565b820191906000526020600020905b81548152906001019060200180831161088e57829003601f168201915b50505050508060200190518101906108c391906116cd565b90506108d1600060076110d3565b505b600460005414156109b5576000600280546108ed90611698565b80601f016020809104026020016040519081016040528092919081815260200182805461091990611698565b80156109665780601f1061093b57610100808354040283529160200191610966565b820191906000526020600020905b81548152906001019060200180831161094957829003601f168201915b505050505080602001905181019061097e91906116cd565b9050600161098b84611243565b51600181111561099d5761099d6114fe565b146109ac578060200151610581565b61035f83611243565b610594600060076110d3565b60408051606081018252600080825260208201819052918101919091526102e16109f03684900384018461175e565b82610ccc565b604080516060810182526000808252602082018190529181019190915261030b82611243565b6000610a26611343565b60208181018051516001905251516040908101516001600160a01b03861690528051606081018252600080825292810183905290810191909152610a6a8282610ccc565b602001519392505050565b610a85600160005414600d6110d3565b8151610aa0901580610a9957508251600154145b600e6110d3565b600080805560028054610ab290611698565b80601f0160208091040260200160405190810160405280929190818152602001828054610ade90611698565b8015610b2b5780601f10610b0057610100808354040283529160200191610b2b565b820191906000526020600020905b815481529060010190602001808311610b0e57829003601f168201915b5050505050806020019051810190610b4391906116cd565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a1610b9a3415600b6110d3565b8051610bb2906001600160a01b03163314600c6110d3565b610bba611362565b815181516001600160a01b0391821690526020808401518351921691810191909152810151439052610beb816112d0565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610c3d57610c3d6114fe565b1415610cbd576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610c7e57610c7e6114fe565b6001811115610c8f57610c8f6114fe565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b60008082526020820152919050565b610cdc60046000541460126110d3565b8151610cf7901580610cf057508251600154145b60136110d3565b600080805560028054610d0990611698565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3590611698565b8015610d825780601f10610d5757610100808354040283529160200191610d82565b820191906000526020600020905b815481529060010190602001808311610d6557829003601f168201915b5050505050806020019051810190610d9a91906116cd565b9050610da4611392565b610db3600019431060146110d3565b7f5b4553f4e2facbf6aa06e8c3c582215fdfc1dd532cb5f37c785949be5c4161563385604051610de4929190611828565b60405180910390a16000602085015151516002811115610e0657610e066114fe565b1415610ed2576020808501515101518152610e233415600f6110d3565b3360009081526005602090815260409182902080548451516001600160a01b0316620100000261ff01600160b01b031990911617600190811790915591519182527f09eac39cce54dda4f1b87660d478867c00ef58012371562edac8d183780dd3ef910160405180910390a160018352610e9b611362565b825181516001600160a01b0391821690526020808501518351921691810191909152810151439052610ecc816112d0565b50610beb565b6001602085015151516002811115610eec57610eec6114fe565b1415610f8a57602080850151516040015190820152610f0d341560106110d3565b33600090815260046020908152604091829020805484830151516001600160a01b0316620100000261ff01600160b01b031990911617600190811790915591519182527fcd5f195fb9822e7c4061d6619396d83ac135bc8a53f2fb3707f7f523ce814d17910160405180910390a160016020840152610e9b611362565b6002602085015151516002811115610fa457610fa46114fe565b1415610beb57602084015151606001516040820152610fc5341560116110d3565b336000908152600660209081526040918290208054848401515160016001600160a01b03909116620100000261ff01600160b01b031990921691909117811790915591519182527f1a50950d3ad636e1d7c8412fe746fdf354682c9bc22c3ddadff236064675939a910160405180910390a160016040840152610e9b611362565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115611092576110926114fe565b1415610cbd576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115610c7e57610c7e6114fe565b816102e15760405163100960cb60e01b81526004810182905260240160405180910390fd5b61110860046000541460176110d3565b815161112390158061111c57508251600154145b60186110d3565b60008080556002805461113590611698565b80601f016020809104026020016040519081016040528092919081815260200182805461116190611698565b80156111ae5780601f10611183576101008083540402835291602001916111ae565b820191906000526020600020905b81548152906001019060200180831161119157829003601f168201915b50505050508060200190518101906111c691906116cd565b90506111d860001943101560196110d3565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a161122b341560156110d3565b8051610bb2906001600160a01b0316331460166110d3565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561128f5761128f6114fe565b1415610cbd576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115610c7e57610c7e6114fe565b604080518082018252600080825260208083018281528551516001600160a01b039081168086528751840151821683526004909455436001558551808401949094529051168285015283518083038501815260609092019093528051919261133e92600292909101906113dd565b505050565b60405180604001604052806000815260200161135d611461565b905290565b60408051608081018252600081830181815260608301829052825282516020818101909452908152909182015290565b604080516080810190915260006060820190815281905b81526020016113c360408051602081019091526000815290565b815260200161135d60408051602081019091526000815290565b8280546113e990611698565b90600052602060002090601f01602090048101928261140b5760008555611451565b82601f1061142457805160ff1916838001178555611451565b82800160010185558215611451579182015b82811115611451578251825591602001919060010190611436565b5061145d929150611474565b5090565b604051806020016040528061135d611489565b5b8082111561145d5760008155600101611475565b604080516080810190915280600081526020016113a960408051602081019091526000815290565b6000604082840312156114c357600080fd5b50919050565b6001600160a01b03811681146114de57600080fd5b50565b6000602082840312156114f357600080fd5b8135610581816114c9565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061152b5761152b6114fe565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b82815260006020604081840152835180604085015260005b818110156115875785810183015185820160600152820161156b565b81811115611599576000606083870101525b50601f01601f191692909201606001949350505050565b600060a082840312156114c357600080fd5b6040805190810167ffffffffffffffff811182821017156115f357634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156115f357634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156115f357634e487b7160e01b600052604160045260246000fd5b60006040828403121561166d57600080fd5b6116756115c2565b823581526020830135801515811461168c57600080fd5b60208201529392505050565b600181811c908216806116ac57607f821691505b602082108114156114c357634e487b7160e01b600052602260045260246000fd5b6000604082840312156116df57600080fd5b6116e76115c2565b82516116f2816114c9565b8152602083015161168c816114c9565b60006020828403121561171457600080fd5b6040516020810181811067ffffffffffffffff8211171561174557634e487b7160e01b600052604160045260246000fd5b6040529050808235611756816114c9565b905292915050565b600081830360a081121561177157600080fd5b6040516040810181811067ffffffffffffffff821117156117a257634e487b7160e01b600052604160045260246000fd5b604052833581526080601f19830112156117bb57600080fd5b6117c36115f9565b91506117cd61162a565b6020850135600381106117df57600080fd5b81526117ee8660408701611702565b60208201526118008660608701611702565b60408201526118128660808701611702565b6060820152825260208101919091529392505050565b6001600160a01b038381168252825160208084019190915283015151805160c084019291906003811061185d5761185d6114fe565b806040860152508160208201515116606085015281604082015151166080850152816060820151511660a08501525050939250505056fea2646970667358221220b7d1a865531100e7a75847d439c72295a56c43623f8f142f9863f299ddf0b81c64736f6c634300080c0033`,
  BytecodeLen: 7079,
  Which: `oD`,
  version: 7,
  views: {
    vBtCtc: `vBtCtc`,
    vManCtc: `vManCtc`,
    vStCtc: `vStCtc`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:41:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:132:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:62:59:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Creator": Creator,
  "btCtcId": btCtcId,
  "manCtcId": manCtcId,
  "stCtcId": stCtcId
  };
export const _APIs = {
  btCtcId: btCtcId,
  manCtcId: manCtcId,
  stCtcId: stCtcId
  };
