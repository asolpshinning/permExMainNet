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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc6 = stdlib.T_Tuple([ctc4, ctc5]);
  const ctc7 = stdlib.T_UInt;
  const ctc8 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc11 = stdlib.T_Tuple([ctc10, ctc7, ctc7]);
  const ctc12 = stdlib.T_Object({
    cumProceeds: ctc7,
    price: ctc7,
    qty: ctc7,
    sold: ctc7,
    status: ctc2
    });
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc15 = stdlib.T_Object({
    ctcMan: ctc0,
    currDistr: ctc3,
    cv: ctc6,
    distrHis: ctc9,
    distrIndex: ctc7,
    distrNum: ctc3,
    docHash: ctc11,
    saleDetails: ctc12,
    saleLocked: ctc13,
    totBT: ctc3,
    totST: ctc3,
    wlArr: ctc14,
    wlIndex: ctc7
    });
  const ctc16 = stdlib.T_Tuple([ctc7, ctc7, ctc13]);
  const ctc17 = stdlib.T_Array(ctc16, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc18 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc19 = stdlib.T_Tuple([ctc3, ctc3, ctc3]);
  const ctc20 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc22 = stdlib.T_Struct([['qty', ctc7], ['price', ctc7], ['sold', ctc7], ['status', ctc2], ['cumProceeds', ctc7]]);
  const ctc23 = stdlib.T_Null;
  const ctc24 = stdlib.T_Data({
    None: ctc23,
    Some: ctc3
    });
  const ctc25 = stdlib.T_Data({
    None: ctc23,
    Some: ctc13
    });
  const ctc26 = stdlib.T_Data({
    None: ctc23,
    Some: ctc23
    });
  const ctc27 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc28 = stdlib.T_Data({
    None: ctc23,
    Some: ctc27
    });
  const map0_ctc = ctc24;
  
  const map1_ctc = ctc24;
  
  const map2_ctc = ctc24;
  
  const map3_ctc = ctc24;
  
  const map4_ctc = ctc24;
  
  const map5_ctc = ctc24;
  
  const map6_ctc = ctc25;
  
  const map7_ctc = ctc26;
  
  const map8_ctc = ctc28;
  
  
  return {
    infos: {
      claimSTBT: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = svs;
            return (await ((async (_v3326 ) => {
                const v3326 = stdlib.protect(ctc0, _v3326, null);
              
              const v3327 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v3326), null);
              const v3328 = stdlib.fromSome(v3327, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v3329 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v3326), null);
              const v3330 = stdlib.fromSome(v3329, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v3331 = [v3328, v3330];
              
              return v3331;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc18
        },
      saleLocked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = svs;
            return (await ((async () => {
              
              
              return v3325;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc13
        },
      totSTBTD: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = svs;
            return (await ((async () => {
              
              const v3324 = [v3321, v3322, v3323];
              
              return v3324;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc19
        },
      totSTBTDRec: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = svs;
            return (await ((async (_v3333 ) => {
                const v3333 = stdlib.protect(ctc0, _v3333, null);
              
              const v3334 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v3333), null);
              const v3335 = stdlib.fromSome(v3334, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v3336 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, v3333), null);
              const v3337 = stdlib.fromSome(v3336, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v3338 = stdlib.protect(map5_ctc, await viewlib.viewMapRef(5, v3333), null);
              const v3339 = stdlib.fromSome(v3338, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v3340 = [v3335, v3337, v3339];
              
              return v3340;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc19
        },
      vBtBal: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = svs;
            return (await ((async () => {
              
              const v3359 = [v3358, v2945];
              
              return v3359;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc20
        },
      vCcCm: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = svs;
            return (await ((async () => {
              
              const v3361 = [v2941, v3360];
              
              return v3361;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc21
        },
      vCurrSale: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = svs;
            return (await ((async () => {
              
              const v3371 = {
                cumProceeds: v3370,
                price: v3367,
                qty: v3366,
                sold: v3368,
                status: v3369
                };
              
              return v3371;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc22
        },
      vHash: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = svs;
            return (await ((async () => {
              
              
              return v3347;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc11
        },
      vOptedIn: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = svs;
            return (await ((async (_v3362 ) => {
                const v3362 = stdlib.protect(ctc0, _v3362, null);
              
              const v3363 = stdlib.protect(map6_ctc, await viewlib.viewMapRef(6, v3362), null);
              const v3364 = stdlib.fromSome(v3363, false);
              
              return v3364;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc13
        },
      vcVersion: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = svs;
            return (await ((async () => {
              
              const v3355 = [v3352, v3354];
              
              return v3355;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        },
      wlMember: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = svs;
            return (await ((async (_v3342 ) => {
                const v3342 = stdlib.protect(ctc0, _v3342, null);
              
              const v3343 = stdlib.protect(map7_ctc, await viewlib.viewMapRef(7, v3342), null);
              let v3344;
              switch (v3343[0]) {
                case 'None': {
                  const v3345 = v3343[1];
                  v3344 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v3346 = v3343[1];
                  v3344 = true;
                  
                  break;
                  }
                }
              
              return v3344;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc13
        },
      wlMembers: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = svs;
            stdlib.assert(false, 'illegal view')
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc14
        }
      },
    views: {
      3: [ctc0, ctc1, ctc2, ctc15, ctc17, ctc3, ctc3, ctc3, ctc13, ctc11, ctc7, ctc6, ctc4, ctc5, ctc16, ctc7, ctc3, ctc0, ctc12, ctc7, ctc7, ctc7, ctc2, ctc7]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc4, ctc5, ctc8]);
  return {
    mapDataTy: ctc9
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
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Token;
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Object({
    authorizedST: ctc1,
    bT: ctc9,
    companyName: ctc10,
    lockSale: ctc3,
    managerAddr: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc11, ctc11, ctc1]);
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc15 = stdlib.T_Tuple([ctc14]);
  const ctc16 = stdlib.T_Tuple([ctc11]);
  const ctc17 = stdlib.T_Tuple([ctc6]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc20 = stdlib.T_Tuple([ctc1]);
  const ctc21 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc22 = stdlib.T_Tuple([ctc21]);
  const ctc23 = stdlib.T_Data({
    aST0_704: ctc13,
    addCoopId0_704: ctc15,
    addWL0_704: ctc16,
    buyOS0_704: ctc17,
    cBT0_704: ctc18,
    cCM0_704: ctc16,
    claimOSpr0_704: ctc18,
    createOS0_704: ctc19,
    dBT0_704: ctc20,
    docHash0_704: ctc22,
    endOS0_704: ctc18,
    optIn0_704: ctc18,
    remWL0_704: ctc16
    });
  const ctc24 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc25 = stdlib.T_Tuple([ctc24]);
  const ctc26 = stdlib.T_Struct([['qty', ctc6], ['price', ctc6], ['sold', ctc6], ['status', ctc24], ['cumProceeds', ctc6]]);
  const ctc27 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc28 = stdlib.T_Tuple([ctc27, ctc14]);
  const ctc29 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc30 = stdlib.T_Tuple([ctc21, ctc6, ctc6]);
  const ctc31 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc24
    });
  const ctc32 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc33 = stdlib.T_Object({
    ctcMan: ctc11,
    currDistr: ctc1,
    cv: ctc28,
    distrHis: ctc29,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc30,
    saleDetails: ctc31,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc32,
    wlIndex: ctc6
    });
  const ctc34 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc35 = stdlib.T_Array(ctc34, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: false,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: false,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: false,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: false,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: false,
    ty: map8_ctc
    });
  
  
  const v2922 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2923 = [v2922];
  const v2929 = 'I have deployed';
  const v2930 = stdlib.protect(ctc12, await interact.getParams(v2929), {
    at: './index.rsh:88:103:application',
    fs: ['at ./index.rsh:87:17:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v2931 = v2930.authorizedST;
  const v2932 = v2930.bT;
  const v2933 = v2930.companyName;
  const v2934 = v2930.lockSale;
  const v2935 = v2930.managerAddr;
  
  const txn1 = await (ctc.sendrecv({
    args: [v2933, v2934, v2935, v2932, v2931],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:92:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10, ctc3, ctc11, ctc9, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:92:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v2942, v2943, v2944, v2945, v2946], secs: v2948, time: v2947, didSend: v42, from: v2941 } = txn1;
      
      const v2949 = v2923[stdlib.checkedBigNumberify('./index.rsh:92:13:dot', stdlib.UInt_max, '0')];
      const v2951 = v2949[stdlib.checkedBigNumberify('./index.rsh:92:13:dot', stdlib.UInt_max, '1')];
      const v2952 = v2949[stdlib.checkedBigNumberify('./index.rsh:92:13:dot', stdlib.UInt_max, '2')];
      const v2953 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2951, v2952];
      const v2954 = stdlib.Array_set(v2923, stdlib.checkedBigNumberify('./index.rsh:92:13:dot', stdlib.UInt_max, '0'), v2953);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2945
        });
      ;
      const v2957 = [v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941];
      const v2959 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v3159 = [v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959];
      const v3160 = '1.03';
      const v3161 = 'cooperativIdcooperativIdcooperativId';
      const v3162 = [v3160, v3161];
      const v3264 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
      const v3265 = [v3264, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v3266 = 'ended';
      const v3267 = {
        cumProceeds: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        price: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        qty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        sold: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        status: v3266
        };
      const v3269 = {
        ctcMan: v2944,
        currDistr: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        cv: v3162,
        distrHis: v3159,
        distrIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        distrNum: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        docHash: v3265,
        saleDetails: v3267,
        saleLocked: v2943,
        totBT: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        totST: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        wlArr: v2957,
        wlIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v3270 = v3269;
      const v3271 = v2947;
      const v3273 = v2954;
      
      if (await (async () => {
        
        return true;})()) {
        const v3321 = v3270.totST;
        const v3322 = v3270.totBT;
        const v3323 = v3270.distrNum;
        const v3325 = v3270.saleLocked;
        const v3347 = v3270.docHash;
        const v3349 = v3347[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
        const v3351 = v3270.cv;
        const v3352 = v3351[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
        const v3354 = v3351[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
        const v3356 = v3273[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
        const v3357 = v3356[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
        const v3358 = stdlib.cast("UInt", "UInt256", v3357, false);
        const v3360 = v3270.ctcMan;
        const v3365 = v3270.saleDetails;
        const v3366 = v3365.qty;
        const v3367 = v3365.price;
        const v3368 = v3365.sold;
        const v3369 = v3365.status;
        const v3370 = v3365.cumProceeds;
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2945
          })
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
    tys: [ctc10, ctc3, ctc11, ctc9, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v2942, v2943, v2944, v2945, v2946], secs: v2948, time: v2947, didSend: v42, from: v2941 } = txn1;
  const v2949 = v2923[stdlib.checkedBigNumberify('./index.rsh:92:13:dot', stdlib.UInt_max, '0')];
  const v2951 = v2949[stdlib.checkedBigNumberify('./index.rsh:92:13:dot', stdlib.UInt_max, '1')];
  const v2952 = v2949[stdlib.checkedBigNumberify('./index.rsh:92:13:dot', stdlib.UInt_max, '2')];
  const v2953 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2951, v2952];
  const v2954 = stdlib.Array_set(v2923, stdlib.checkedBigNumberify('./index.rsh:92:13:dot', stdlib.UInt_max, '0'), v2953);
  ;
  ;
  const v2957 = [v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941, v2941];
  const v2959 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v3159 = [v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959, v2959];
  const v3160 = '1.03';
  const v3161 = 'cooperativIdcooperativIdcooperativId';
  const v3162 = [v3160, v3161];
  const v3264 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
  const v3265 = [v3264, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v3266 = 'ended';
  const v3267 = {
    cumProceeds: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    price: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    qty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    sold: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    status: v3266
    };
  const v3269 = {
    ctcMan: v2944,
    currDistr: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    cv: v3162,
    distrHis: v3159,
    distrIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    distrNum: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    docHash: v3265,
    saleDetails: v3267,
    saleLocked: v2943,
    totBT: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    totST: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    wlArr: v2957,
    wlIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v3270 = v3269;
  let v3271 = v2947;
  let v3273 = v2954;
  
  while (await (async () => {
    
    return true;})()) {
    const v3321 = v3270.totST;
    const v3322 = v3270.totBT;
    const v3323 = v3270.distrNum;
    const v3325 = v3270.saleLocked;
    const v3347 = v3270.docHash;
    const v3349 = v3347[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
    const v3351 = v3270.cv;
    const v3352 = v3351[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
    const v3354 = v3351[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
    const v3356 = v3273[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
    const v3357 = v3356[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
    const v3358 = stdlib.cast("UInt", "UInt256", v3357, false);
    const v3360 = v3270.ctcMan;
    const v3365 = v3270.saleDetails;
    const v3366 = v3365.qty;
    const v3367 = v3365.price;
    const v3368 = v3365.sold;
    const v3369 = v3365.status;
    const v3370 = v3365.cumProceeds;
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc23],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370],
        evt_cnt: 0,
        funcNum: 3,
        lct: v3271,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:448:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          stdlib.simMapDupe(sim_r, 3, map3);
          stdlib.simMapDupe(sim_r, 4, map4);
          stdlib.simMapDupe(sim_r, 5, map5);
          stdlib.simMapDupe(sim_r, 6, map6);
          stdlib.simMapDupe(sim_r, 7, map7);
          stdlib.simMapDupe(sim_r, 8, map8);
          
          const {data: [], secs: v13189, time: v13188, didSend: v2491, from: v13187 } = txn3;
          
          ;
          const cv3270 = v3270;
          const cv3271 = v13188;
          const cv3273 = v3273;
          
          await (async () => {
            const v3270 = cv3270;
            const v3271 = cv3271;
            const v3273 = cv3273;
            
            if (await (async () => {
              
              return true;})()) {
              const v3321 = v3270.totST;
              const v3322 = v3270.totBT;
              const v3323 = v3270.distrNum;
              const v3325 = v3270.saleLocked;
              const v3347 = v3270.docHash;
              const v3349 = v3347[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
              const v3351 = v3270.cv;
              const v3352 = v3351[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
              const v3354 = v3351[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
              const v3356 = v3273[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
              const v3357 = v3356[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
              const v3358 = stdlib.cast("UInt", "UInt256", v3357, false);
              const v3360 = v3270.ctcMan;
              const v3365 = v3270.saleDetails;
              const v3366 = v3365.qty;
              const v3367 = v3365.price;
              const v3368 = v3365.sold;
              const v3369 = v3365.status;
              const v3370 = v3365.cumProceeds;
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v2945
                })
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
        tys: [ctc11, ctc9, ctc24, ctc33, ctc35, ctc1, ctc1, ctc1, ctc3, ctc30, ctc6, ctc28, ctc27, ctc14, ctc34, ctc6, ctc1, ctc11, ctc31, ctc6, ctc6, ctc6, ctc24, ctc6],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v13189, time: v13188, didSend: v2491, from: v13187 } = txn3;
      ;
      const v13190 = stdlib.addressEq(v2941, v13187);
      stdlib.assert(v13190, {
        at: './index.rsh:448:21:dot',
        fs: ['at ./index.rsh:447:40:application call to [unknown function] (defined at: ./index.rsh:447:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv3270 = v3270;
      const cv3271 = v13188;
      const cv3273 = v3273;
      
      v3270 = cv3270;
      v3271 = cv3271;
      v3273 = cv3273;
      
      continue;
      }
    else {
      const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn2;
      switch (v3772[0]) {
        case 'aST0_704': {
          const v3775 = v3772[1];
          undefined /* setApiDetails */;
          ;
          const v3900 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v3901 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v3902 = [v3357, v3900, v3901];
          const v3903 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v3902);
          ;
          const v3905 = v3775[stdlib.checkedBigNumberify('./index.rsh:317:13:spread', stdlib.UInt_max, '0')];
          const v3906 = v3775[stdlib.checkedBigNumberify('./index.rsh:317:13:spread', stdlib.UInt_max, '1')];
          const v3907 = v3775[stdlib.checkedBigNumberify('./index.rsh:317:13:spread', stdlib.UInt_max, '2')];
          const v3908 = stdlib.addressEq(v3905, v2941);
          const v3910 = stdlib.addressEq(v3905, v3360);
          const v3911 = v3908 ? true : v3910;
          stdlib.assert(v3911, {
            at: './index.rsh:329:24:application',
            fs: ['at ./index.rsh:328:13:application call to [unknown function] (defined at: ./index.rsh:328:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v3912 = stdlib.gt256(v3907, stdlib.checkedBigNumberify('./index.rsh:330:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v3912, {
            at: './index.rsh:330:24:application',
            fs: ['at ./index.rsh:328:13:application call to [unknown function] (defined at: ./index.rsh:328:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map7, v3906, null);
          const v3914 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3906), null);
          const v3915 = stdlib.fromSome(v3914, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3916 = stdlib.add256(v3915, v3907);
          await stdlib.mapSet(map0, v3906, v3916);
          const v3917 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3906), null);
          const v3918 = stdlib.fromSome(v3917, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3919 = stdlib.add256(v3918, v3907);
          await stdlib.mapSet(map3, v3906, v3919);
          const v3921 = stdlib.add256(v3321, v3907);
          const v3922 = stdlib.protect(map8_ctc, await stdlib.mapRef(map8, v3906), null);
          const v3924 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v3926 = stdlib.fromSome(v3922, v3924);
          const v3927 = ['None', null];
          const v3928 = await stdlib.Array_asyncReduce([v3926], v3927, async([v3930], v3929, v3931) => {
            let v3932;
            switch (v3929[0]) {
              case 'None': {
                const v3933 = v3929[1];
                v3932 = true;
                
                break;
                }
              case 'Some': {
                const v3934 = v3929[1];
                v3932 = false;
                
                break;
                }
              }
            const v3935 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:339:53:decimal', stdlib.UInt_max, '0'), v3930);
            const v3936 = v3932 ? v3935 : false;
            const v3937 = ['Some', v3931];
            const v3938 = v3936 ? v3937 : v3929;
            
            return v3938;})
          const v3939 = stdlib.fromSome(v3928, stdlib.checkedBigNumberify('./index.rsh:99:41:decimal', stdlib.UInt_max, '0'));
          const v3940 = stdlib.cast("UInt256", "UInt", v3907, false);
          const v3942 = stdlib.Array_set(v3926, v3939, v3940);
          await stdlib.mapSet(map8, v3906, v3942);
          const v3943 = true;
          await txn2.getOutput('aST', 'v3943', ctc3, v3943);
          const v3953 = v3270.currDistr;
          const v3955 = v3270.distrHis;
          const v3956 = v3270.distrIndex;
          const v3963 = v3270.wlArr;
          const v3964 = v3270.wlIndex;
          const v3965 = {
            ctcMan: v3360,
            currDistr: v3953,
            cv: v3351,
            distrHis: v3955,
            distrIndex: v3956,
            distrNum: v3323,
            docHash: v3347,
            saleDetails: v3365,
            saleLocked: v3325,
            totBT: v3322,
            totST: v3921,
            wlArr: v3963,
            wlIndex: v3964
            };
          const cv3270 = v3965;
          const cv3271 = v3773;
          const cv3273 = v3903;
          
          v3270 = cv3270;
          v3271 = cv3271;
          v3273 = cv3273;
          
          continue;
          break;
          }
        case 'addCoopId0_704': {
          const v4499 = v3772[1];
          undefined /* setApiDetails */;
          ;
          const v4624 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v4625 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v4626 = [v3357, v4624, v4625];
          const v4627 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v4626);
          ;
          const v4694 = v4499[stdlib.checkedBigNumberify('./index.rsh:359:14:spread', stdlib.UInt_max, '0')];
          const v4698 = v3270.currDistr;
          const v4700 = v3270.distrHis;
          const v4701 = v3270.distrIndex;
          const v4708 = v3270.wlArr;
          const v4709 = v3270.wlIndex;
          const v4710 = [v3352, v4694];
          const v4711 = {
            ctcMan: v3360,
            currDistr: v4698,
            cv: v4710,
            distrHis: v4700,
            distrIndex: v4701,
            distrNum: v3323,
            docHash: v3347,
            saleDetails: v3365,
            saleLocked: v3325,
            totBT: v3322,
            totST: v3321,
            wlArr: v4708,
            wlIndex: v4709
            };
          const v4712 = true;
          await txn2.getOutput('addCoopId', 'v4712', ctc3, v4712);
          const cv3270 = v4711;
          const cv3271 = v3773;
          const cv3273 = v4627;
          
          v3270 = cv3270;
          v3271 = cv3271;
          v3273 = cv3273;
          
          continue;
          break;
          }
        case 'addWL0_704': {
          const v5223 = v3772[1];
          undefined /* setApiDetails */;
          ;
          const v5348 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v5349 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v5350 = [v3357, v5348, v5349];
          const v5351 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v5350);
          ;
          const v5449 = v5223[stdlib.checkedBigNumberify('./index.rsh:273:13:spread', stdlib.UInt_max, '0')];
          const v5450 = stdlib.addressEq(v3771, v2941);
          const v5452 = stdlib.addressEq(v3771, v3360);
          const v5453 = v5450 ? true : v5452;
          stdlib.assert(v5453, {
            at: './index.rsh:284:24:application',
            fs: ['at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          await stdlib.mapSet(map7, v5449, null);
          const v5455 = v3270.wlIndex;
          const v5456 = stdlib.ge(v5455, stdlib.checkedBigNumberify('./index.rsh:289:80:decimal', stdlib.UInt_max, '24'));
          const v5458 = stdlib.add(v5455, stdlib.checkedBigNumberify('./index.rsh:289:105:decimal', stdlib.UInt_max, '1'));
          const v5459 = v5456 ? stdlib.checkedBigNumberify('./index.rsh:289:85:decimal', stdlib.UInt_max, '0') : v5458;
          const v5461 = v3270.currDistr;
          const v5463 = v3270.distrHis;
          const v5464 = v3270.distrIndex;
          const v5471 = v3270.wlArr;
          const v5481 = stdlib.Array_set(v5471, v5459, v5449);
          const v5482 = {
            ctcMan: v3360,
            currDistr: v5461,
            cv: v3351,
            distrHis: v5463,
            distrIndex: v5464,
            distrNum: v3323,
            docHash: v3347,
            saleDetails: v3365,
            saleLocked: v3325,
            totBT: v3322,
            totST: v3321,
            wlArr: v5481,
            wlIndex: v5459
            };
          const v5483 = true;
          await txn2.getOutput('addWL', 'v5483', ctc3, v5483);
          const cv3270 = v5482;
          const cv3271 = v3773;
          const cv3273 = v5351;
          
          v3270 = cv3270;
          v3271 = cv3271;
          v3273 = cv3273;
          
          continue;
          break;
          }
        case 'buyOS0_704': {
          const v5947 = v3772[1];
          undefined /* setApiDetails */;
          const v5978 = v5947[stdlib.checkedBigNumberify('./index.rsh:196:13:spread', stdlib.UInt_max, '0')];
          const v5981 = stdlib.mul(v3367, v5978);
          ;
          const v6069 = stdlib.add(v3357, v5981);
          const v6072 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v6073 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v6074 = [v6069, v6072, v6073];
          const v6075 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v6074);
          ;
          const v6221 = stdlib.gt(v5978, stdlib.checkedBigNumberify('./index.rsh:210:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v6221, {
            at: './index.rsh:210:24:application',
            fs: ['at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
            msg: 'you must sell at least 1 share token',
            who: 'Creator'
            });
          const v6224 = 'activ';
          const v6225 = stdlib.digest(ctc25, [v3369]);
          const v6227 = stdlib.digest(ctc25, [v6224]);
          const v6228 = stdlib.digestEq(v6225, v6227);
          stdlib.assert(v6228, {
            at: './index.rsh:211:24:application',
            fs: ['at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
            msg: 'no sale is active',
            who: 'Creator'
            });
          const v6231 = stdlib.ge(v3366, v5978);
          stdlib.assert(v6231, {
            at: './index.rsh:212:24:application',
            fs: ['at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
            msg: 'do not try to buy more than available',
            who: 'Creator'
            });
          const v6232 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v3771), null);
          let v6233;
          switch (v6232[0]) {
            case 'None': {
              const v6234 = v6232[1];
              v6233 = false;
              
              break;
              }
            case 'Some': {
              const v6235 = v6232[1];
              v6233 = true;
              
              break;
              }
            }
          stdlib.assert(v6233, {
            at: './index.rsh:213:24:application',
            fs: ['at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
            msg: 'you must be whitelisted to buy',
            who: 'Creator'
            });
          const v6236 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3771), null);
          const v6237 = stdlib.fromSome(v6236, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6238 = stdlib.cast("UInt", "UInt256", v5978, false);
          const v6239 = stdlib.add256(v6237, v6238);
          await stdlib.mapSet(map0, v3771, v6239);
          const v6240 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3771), null);
          const v6241 = stdlib.fromSome(v6240, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6243 = stdlib.add256(v6241, v6238);
          await stdlib.mapSet(map3, v3771, v6243);
          const v6247 = stdlib.protect(map8_ctc, await stdlib.mapRef(map8, v3771), null);
          const v6249 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6251 = stdlib.fromSome(v6247, v6249);
          const v6252 = ['None', null];
          const v6253 = await stdlib.Array_asyncReduce([v6251], v6252, async([v6255], v6254, v6256) => {
            let v6257;
            switch (v6254[0]) {
              case 'None': {
                const v6258 = v6254[1];
                v6257 = true;
                
                break;
                }
              case 'Some': {
                const v6259 = v6254[1];
                v6257 = false;
                
                break;
                }
              }
            const v6260 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:220:53:decimal', stdlib.UInt_max, '0'), v6255);
            const v6261 = v6257 ? v6260 : false;
            const v6262 = ['Some', v6256];
            const v6263 = v6261 ? v6262 : v6254;
            
            return v6263;})
          const v6264 = stdlib.fromSome(v6253, stdlib.checkedBigNumberify('./index.rsh:99:41:decimal', stdlib.UInt_max, '0'));
          const v6266 = stdlib.Array_set(v6251, v6264, v5978);
          await stdlib.mapSet(map8, v3771, v6266);
          const v6270 = stdlib.sub(v3366, v5978);
          const v6279 = stdlib.add(v3368, v5978);
          const v6283 = stdlib.mul(v5978, v3367);
          const v6284 = stdlib.add(v3370, v6283);
          const v6285 = {
            cumProceeds: v6284,
            price: v3367,
            qty: v6270,
            sold: v6279,
            status: v3369
            };
          const v6287 = v3270.currDistr;
          const v6289 = v3270.distrHis;
          const v6290 = v3270.distrIndex;
          const v6297 = v3270.wlArr;
          const v6298 = v3270.wlIndex;
          const v6300 = {
            ctcMan: v3360,
            currDistr: v6287,
            cv: v3351,
            distrHis: v6289,
            distrIndex: v6290,
            distrNum: v3323,
            docHash: v3347,
            saleDetails: v6285,
            saleLocked: v3325,
            totBT: v3322,
            totST: v3321,
            wlArr: v6297,
            wlIndex: v6298
            };
          const v6301 = {
            cumProceeds: v6284,
            price: v3367,
            qty: v6270,
            sold: v6279,
            status: v3369
            };
          await txn2.getOutput('buyOS', 'v6301', ctc26, v6301);
          const cv3270 = v6300;
          const cv3271 = v3773;
          const cv3273 = v6075;
          
          v3270 = cv3270;
          v3271 = cv3271;
          v3273 = cv3273;
          
          continue;
          break;
          }
        case 'cBT0_704': {
          const v6671 = v3772[1];
          undefined /* setApiDetails */;
          ;
          const v6796 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v6797 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v6798 = [v3357, v6796, v6797];
          const v6799 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v6798);
          ;
          const v7043 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v3771), null);
          let v7044;
          switch (v7043[0]) {
            case 'None': {
              const v7045 = v7043[1];
              v7044 = false;
              
              break;
              }
            case 'Some': {
              const v7046 = v7043[1];
              v7044 = true;
              
              break;
              }
            }
          stdlib.assert(v7044, {
            at: './index.rsh:413:24:application',
            fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v7047 = v6799[stdlib.checkedBigNumberify('./index.rsh:415:40:application', stdlib.UInt_max, '0')];
          const v7048 = v7047[stdlib.checkedBigNumberify('./index.rsh:415:40:application', stdlib.UInt_max, '0')];
          const v7049 = stdlib.cast("UInt", "UInt256", v7048, false);
          const v7050 = stdlib.gt256(v7049, stdlib.checkedBigNumberify('./index.rsh:415:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v7050, {
            at: './index.rsh:415:24:application',
            fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
            msg: 'well, balance(bT) is 0',
            who: 'Creator'
            });
          const v7052 = stdlib.gt256(v3321, stdlib.checkedBigNumberify('./index.rsh:416:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v7052, {
            at: './index.rsh:416:24:application',
            fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
            msg: 'totST is 0. This means there should be no distributions yet',
            who: 'Creator'
            });
          const v7054 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3771), null);
          const v7055 = stdlib.fromSome(v7054, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7056 = stdlib.ge256(v3321, v7055);
          stdlib.assert(v7056, {
            at: './index.rsh:417:24:application',
            fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
            msg: 'weirdly, totST is less than totAllST[this]',
            who: 'Creator'
            });
          const v7059 = stdlib.gt256(v7055, stdlib.checkedBigNumberify('./index.rsh:418:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v7059, {
            at: './index.rsh:418:24:application',
            fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
            msg: 'totAllST[this] is 0. This means you should not rec distr',
            who: 'Creator'
            });
          const v7062 = v3270.currDistr;
          const v7063 = stdlib.mul256(v7055, v7062);
          const v7065 = stdlib.div256(v7063, v3321);
          const v7066 = stdlib.cast("UInt256", "UInt", v7065, false);
          const v7069 = stdlib.le(v7066, v7048);
          stdlib.assert(v7069, {
            at: './index.rsh:420:24:application',
            fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
            msg: 'weirdly, trying to withdraw more than available balance',
            who: 'Creator'
            });
          const v7076 = stdlib.sub(v7048, v7066);
          const v7079 = v7047[stdlib.checkedBigNumberify('./index.rsh:422:50:application', stdlib.UInt_max, '1')];
          const v7080 = v7047[stdlib.checkedBigNumberify('./index.rsh:422:50:application', stdlib.UInt_max, '2')];
          const v7081 = [v7076, v7079, v7080];
          const v7082 = stdlib.Array_set(v6799, stdlib.checkedBigNumberify('./index.rsh:422:50:application', stdlib.UInt_max, '0'), v7081);
          ;
          const v7083 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v3771), null);
          const v7084 = stdlib.fromSome(v7083, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7085 = stdlib.add256(v7084, v7065);
          await stdlib.mapSet(map4, v3771, v7085);
          const v7086 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3771), null);
          const v7087 = stdlib.fromSome(v7086, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7088 = stdlib.add256(v7087, stdlib.checkedBigNumberify('./index.rsh:424:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.mapSet(map5, v3771, v7088);
          await txn2.getOutput('cBT', 'v7065', ctc1, v7065);
          const cv3270 = v3270;
          const cv3271 = v3773;
          const cv3273 = v7082;
          
          v3270 = cv3270;
          v3271 = cv3271;
          v3273 = cv3273;
          
          continue;
          break;
          }
        case 'cCM0_704': {
          const v7395 = v3772[1];
          undefined /* setApiDetails */;
          ;
          const v7520 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v7521 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v7522 = [v3357, v7520, v7521];
          const v7523 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v7522);
          ;
          const v7820 = v7395[stdlib.checkedBigNumberify('./index.rsh:429:13:spread', stdlib.UInt_max, '0')];
          const v7821 = stdlib.addressEq(v3771, v2941);
          const v7823 = stdlib.addressEq(v3771, v3360);
          const v7824 = v7821 ? true : v7823;
          stdlib.assert(v7824, {
            at: './index.rsh:440:24:application',
            fs: ['at ./index.rsh:439:13:application call to [unknown function] (defined at: ./index.rsh:439:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v7825 = true;
          await txn2.getOutput('cCM', 'v7825', ctc3, v7825);
          const v7833 = v3270.currDistr;
          const v7835 = v3270.distrHis;
          const v7836 = v3270.distrIndex;
          const v7843 = v3270.wlArr;
          const v7844 = v3270.wlIndex;
          const v7845 = {
            ctcMan: v7820,
            currDistr: v7833,
            cv: v3351,
            distrHis: v7835,
            distrIndex: v7836,
            distrNum: v3323,
            docHash: v3347,
            saleDetails: v3365,
            saleLocked: v3325,
            totBT: v3322,
            totST: v3321,
            wlArr: v7843,
            wlIndex: v7844
            };
          const cv3270 = v7845;
          const cv3271 = v3773;
          const cv3273 = v7523;
          
          v3270 = cv3270;
          v3271 = cv3271;
          v3273 = cv3273;
          
          continue;
          break;
          }
        case 'claimOSpr0_704': {
          const v8119 = v3772[1];
          undefined /* setApiDetails */;
          ;
          const v8244 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v8245 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v8246 = [v3357, v8244, v8245];
          const v8247 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v8246);
          ;
          const v8574 = stdlib.addressEq(v3771, v2941);
          const v8576 = stdlib.addressEq(v3771, v3360);
          const v8577 = v8574 ? true : v8576;
          stdlib.assert(v8577, {
            at: './index.rsh:242:24:application',
            fs: ['at ./index.rsh:241:13:application call to [unknown function] (defined at: ./index.rsh:241:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v8580 = stdlib.gt(v3370, stdlib.checkedBigNumberify('./index.rsh:243:57:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v8580, {
            at: './index.rsh:243:24:application',
            fs: ['at ./index.rsh:241:13:application call to [unknown function] (defined at: ./index.rsh:241:13:function exp)'],
            msg: 'available proceeds must be greater than 0',
            who: 'Creator'
            });
          const v8581 = v8247[stdlib.checkedBigNumberify('./index.rsh:244:32:application', stdlib.UInt_max, '0')];
          const v8582 = v8581[stdlib.checkedBigNumberify('./index.rsh:244:32:application', stdlib.UInt_max, '0')];
          const v8585 = stdlib.ge(v8582, v3370);
          stdlib.assert(v8585, {
            at: './index.rsh:244:24:application',
            fs: ['at ./index.rsh:241:13:application call to [unknown function] (defined at: ./index.rsh:241:13:function exp)'],
            msg: 'weirdly insufficienct balance of BT',
            who: 'Creator'
            });
          const v8593 = stdlib.sub(v8582, v3370);
          const v8596 = v8581[stdlib.checkedBigNumberify('./index.rsh:245:70:application', stdlib.UInt_max, '1')];
          const v8597 = v8581[stdlib.checkedBigNumberify('./index.rsh:245:70:application', stdlib.UInt_max, '2')];
          const v8598 = [v8593, v8596, v8597];
          const v8599 = stdlib.Array_set(v8247, stdlib.checkedBigNumberify('./index.rsh:245:70:application', stdlib.UInt_max, '0'), v8598);
          ;
          const v8606 = {
            cumProceeds: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            price: v3367,
            qty: v3366,
            sold: v3368,
            status: v3369
            };
          const v8608 = v3270.currDistr;
          const v8610 = v3270.distrHis;
          const v8611 = v3270.distrIndex;
          const v8618 = v3270.wlArr;
          const v8619 = v3270.wlIndex;
          const v8621 = {
            ctcMan: v3360,
            currDistr: v8608,
            cv: v3351,
            distrHis: v8610,
            distrIndex: v8611,
            distrNum: v3323,
            docHash: v3347,
            saleDetails: v8606,
            saleLocked: v3325,
            totBT: v3322,
            totST: v3321,
            wlArr: v8618,
            wlIndex: v8619
            };
          const v8622 = true;
          await txn2.getOutput('claimOSpr', 'v8622', ctc3, v8622);
          const cv3270 = v8621;
          const cv3271 = v3773;
          const cv3273 = v8599;
          
          v3270 = cv3270;
          v3271 = cv3271;
          v3273 = cv3273;
          
          continue;
          break;
          }
        case 'createOS0_704': {
          const v8843 = v3772[1];
          undefined /* setApiDetails */;
          ;
          const v8968 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v8969 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v8970 = [v3357, v8968, v8969];
          const v8971 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v8970);
          ;
          const v9358 = v8843[stdlib.checkedBigNumberify('./index.rsh:152:13:spread', stdlib.UInt_max, '0')];
          const v9359 = v8843[stdlib.checkedBigNumberify('./index.rsh:152:13:spread', stdlib.UInt_max, '1')];
          const v9360 = stdlib.addressEq(v3771, v2941);
          const v9362 = stdlib.addressEq(v3771, v3360);
          const v9363 = v9360 ? true : v9362;
          stdlib.assert(v9363, {
            at: './index.rsh:165:24:application',
            fs: ['at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v9364 = stdlib.gt(v9358, stdlib.checkedBigNumberify('./index.rsh:166:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v9364, {
            at: './index.rsh:166:24:application',
            fs: ['at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:13:function exp)'],
            msg: 'you must sell at least 1 share token',
            who: 'Creator'
            });
          const v9365 = stdlib.gt(v9359, stdlib.checkedBigNumberify('./index.rsh:167:33:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v9365, {
            at: './index.rsh:167:24:application',
            fs: ['at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:13:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Creator'
            });
          const v9372 = 'activ';
          const v9377 = {
            cumProceeds: v3370,
            price: v9359,
            qty: v9358,
            sold: v3368,
            status: v9372
            };
          const v9379 = v3270.currDistr;
          const v9381 = v3270.distrHis;
          const v9382 = v3270.distrIndex;
          const v9389 = v3270.wlArr;
          const v9390 = v3270.wlIndex;
          const v9393 = {
            ctcMan: v3360,
            currDistr: v9379,
            cv: v3351,
            distrHis: v9381,
            distrIndex: v9382,
            distrNum: v3323,
            docHash: v3347,
            saleDetails: v9377,
            saleLocked: v3325,
            totBT: v3322,
            totST: v3321,
            wlArr: v9389,
            wlIndex: v9390
            };
          const v9395 = {
            cumProceeds: v3370,
            price: v9359,
            qty: v9358,
            sold: v3368,
            status: v9372
            };
          await txn2.getOutput('createOS', 'v9395', ctc26, v9395);
          const cv3270 = v9393;
          const cv3271 = v3773;
          const cv3273 = v8971;
          
          v3270 = cv3270;
          v3271 = cv3271;
          v3273 = cv3273;
          
          continue;
          break;
          }
        case 'dBT0_704': {
          const v9567 = v3772[1];
          undefined /* setApiDetails */;
          const v9640 = v9567[stdlib.checkedBigNumberify('./index.rsh:373:13:spread', stdlib.UInt_max, '0')];
          const v9641 = stdlib.cast("UInt256", "UInt", v9640, false);
          ;
          const v9689 = stdlib.add(v3357, v9641);
          const v9692 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v9693 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v9694 = [v9689, v9692, v9693];
          const v9695 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v9694);
          ;
          const v10141 = stdlib.addressEq(v3771, v2941);
          const v10143 = stdlib.addressEq(v3771, v3360);
          const v10144 = v10141 ? true : v10143;
          stdlib.assert(v10144, {
            at: './index.rsh:385:24:application',
            fs: ['at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v10146 = stdlib.gt(v9641, stdlib.checkedBigNumberify('./index.rsh:386:37:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v10146, {
            at: './index.rsh:386:24:application',
            fs: ['at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v10148 = stdlib.add256(v3322, v9640);
          const v10152 = v3270.distrHis;
          const v10153 = v3270.distrIndex;
          const v10160 = v3270.wlArr;
          const v10161 = v3270.wlIndex;
          const v10164 = stdlib.add256(v3323, stdlib.checkedBigNumberify('./index.rsh:389:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v10166 = {
            ctcMan: v3360,
            currDistr: v9640,
            cv: v3351,
            distrHis: v10152,
            distrIndex: v10153,
            distrNum: v10164,
            docHash: v3347,
            saleDetails: v3365,
            saleLocked: v3325,
            totBT: v10148,
            totST: v3321,
            wlArr: v10160,
            wlIndex: v10161
            };
          const v10167 = true;
          await txn2.getOutput('dBT', 'v10167', ctc3, v10167);
          const cv3270 = v10166;
          const cv3271 = v3773;
          const cv3273 = v9695;
          
          v3270 = cv3270;
          v3271 = cv3271;
          v3273 = cv3273;
          
          continue;
          break;
          }
        case 'docHash0_704': {
          const v10291 = v3772[1];
          undefined /* setApiDetails */;
          ;
          const v10416 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v10417 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v10418 = [v3357, v10416, v10417];
          const v10419 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v10418);
          ;
          const v10902 = v10291[stdlib.checkedBigNumberify('./index.rsh:252:13:spread', stdlib.UInt_max, '0')];
          const v10905 = stdlib.eq(v3349, stdlib.checkedBigNumberify('./index.rsh:266:32:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v10905, {
            at: './index.rsh:266:24:application',
            fs: ['at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:13:function exp)'],
            msg: 'hash is immutable',
            who: 'Creator'
            });
          const v10906 = stdlib.addressEq(v3771, v2941);
          const v10908 = stdlib.addressEq(v3771, v3360);
          const v10909 = v10906 ? true : v10908;
          stdlib.assert(v10909, {
            at: './index.rsh:267:24:application',
            fs: ['at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:13:function exp)'],
            msg: 'only creator or contract manager can change hash',
            who: 'Creator'
            });
          const v10910 = stdlib.add(v3349, stdlib.checkedBigNumberify('./index.rsh:268:76:decimal', stdlib.UInt_max, '1'));
          const v10913 = v3270.currDistr;
          const v10915 = v3270.distrHis;
          const v10916 = v3270.distrIndex;
          const v10923 = v3270.wlArr;
          const v10924 = v3270.wlIndex;
          const v10925 = [v10902, v10910, v3773];
          const v10926 = {
            ctcMan: v3360,
            currDistr: v10913,
            cv: v3351,
            distrHis: v10915,
            distrIndex: v10916,
            distrNum: v3323,
            docHash: v10925,
            saleDetails: v3365,
            saleLocked: v3325,
            totBT: v3322,
            totST: v3321,
            wlArr: v10923,
            wlIndex: v10924
            };
          const v10927 = true;
          await txn2.getOutput('docHash', 'v10927', ctc3, v10927);
          const cv3270 = v10926;
          const cv3271 = v3773;
          const cv3273 = v10419;
          
          v3270 = cv3270;
          v3271 = cv3271;
          v3273 = cv3273;
          
          continue;
          break;
          }
        case 'endOS0_704': {
          const v11015 = v3772[1];
          undefined /* setApiDetails */;
          ;
          const v11140 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v11141 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v11142 = [v3357, v11140, v11141];
          const v11143 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v11142);
          ;
          const v11664 = stdlib.addressEq(v3771, v2941);
          const v11666 = stdlib.addressEq(v3771, v3360);
          const v11667 = v11664 ? true : v11666;
          stdlib.assert(v11667, {
            at: './index.rsh:186:24:application',
            fs: ['at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          const v11670 = 'activ';
          const v11671 = stdlib.digest(ctc25, [v3369]);
          const v11673 = stdlib.digest(ctc25, [v11670]);
          const v11674 = stdlib.digestEq(v11671, v11673);
          stdlib.assert(v11674, {
            at: './index.rsh:187:24:application',
            fs: ['at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)'],
            msg: 'sale must be active',
            who: 'Creator'
            });
          const v11686 = {
            cumProceeds: v3370,
            price: v3367,
            qty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            sold: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            status: v3266
            };
          const v11688 = v3270.currDistr;
          const v11690 = v3270.distrHis;
          const v11691 = v3270.distrIndex;
          const v11698 = v3270.wlArr;
          const v11699 = v3270.wlIndex;
          const v11702 = {
            ctcMan: v3360,
            currDistr: v11688,
            cv: v3351,
            distrHis: v11690,
            distrIndex: v11691,
            distrNum: v3323,
            docHash: v3347,
            saleDetails: v11686,
            saleLocked: v3325,
            totBT: v3322,
            totST: v3321,
            wlArr: v11698,
            wlIndex: v11699
            };
          const v11703 = true;
          await txn2.getOutput('endOS', 'v11703', ctc3, v11703);
          const cv3270 = v11702;
          const cv3271 = v3773;
          const cv3273 = v11143;
          
          v3270 = cv3270;
          v3271 = cv3271;
          v3273 = cv3273;
          
          continue;
          break;
          }
        case 'optIn0_704': {
          const v11739 = v3772[1];
          undefined /* setApiDetails */;
          ;
          const v11864 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v11865 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v11866 = [v3357, v11864, v11865];
          const v11867 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v11866);
          ;
          await stdlib.mapSet(map6, v3771, true);
          const v12441 = true;
          await txn2.getOutput('optIn', 'v12441', ctc3, v12441);
          const cv3270 = v3270;
          const cv3271 = v3773;
          const cv3273 = v11867;
          
          v3270 = cv3270;
          v3271 = cv3271;
          v3273 = cv3273;
          
          continue;
          break;
          }
        case 'remWL0_704': {
          const v12463 = v3772[1];
          undefined /* setApiDetails */;
          ;
          const v12588 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v12589 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v12590 = [v3357, v12588, v12589];
          const v12591 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v12590);
          ;
          const v13173 = v12463[stdlib.checkedBigNumberify('./index.rsh:298:13:spread', stdlib.UInt_max, '0')];
          const v13174 = stdlib.addressEq(v3771, v2941);
          const v13176 = stdlib.addressEq(v3771, v3360);
          const v13177 = v13174 ? true : v13176;
          stdlib.assert(v13177, {
            at: './index.rsh:309:24:application',
            fs: ['at ./index.rsh:308:13:application call to [unknown function] (defined at: ./index.rsh:308:13:function exp)'],
            msg: 'you must be creator or manager',
            who: 'Creator'
            });
          await stdlib.mapSet(map7, v13173, undefined /* Nothing */);
          const v13179 = true;
          await txn2.getOutput('remWL', 'v13179', ctc3, v13179);
          const cv3270 = v3270;
          const cv3271 = v3773;
          const cv3273 = v12591;
          
          v3270 = cv3270;
          v3271 = cv3271;
          v3273 = cv3273;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  };
export async function _aST3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _aST3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _aST3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc25 = stdlib.T_Tuple([ctc13]);
  const ctc26 = stdlib.T_Tuple([ctc9]);
  const ctc27 = stdlib.T_Tuple([ctc6]);
  const ctc28 = stdlib.T_Tuple([]);
  const ctc29 = stdlib.T_Tuple([ctc1]);
  const ctc30 = stdlib.T_Tuple([ctc17]);
  const ctc31 = stdlib.T_Data({
    aST0_704: ctc24,
    addCoopId0_704: ctc25,
    addWL0_704: ctc26,
    buyOS0_704: ctc27,
    cBT0_704: ctc28,
    cCM0_704: ctc26,
    claimOSpr0_704: ctc28,
    createOS0_704: ctc15,
    dBT0_704: ctc29,
    docHash0_704: ctc30,
    endOS0_704: ctc28,
    optIn0_704: ctc28,
    remWL0_704: ctc26
    });
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3519 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:320:13:application call to [unknown function] (defined at: ./index.rsh:320:13:function exp)', 'at ./index.rsh:121:35:application call to "runaST0_704" (defined at: ./index.rsh:317:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'aST'
    });
  const v3520 = v3519[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3522 = v3519[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v3527 = stdlib.addressEq(v3520, v2941);
  const v3529 = stdlib.addressEq(v3520, v3360);
  const v3530 = v3527 ? true : v3529;
  stdlib.assert(v3530, {
    at: './index.rsh:321:23:application',
    fs: ['at ./index.rsh:320:13:application call to [unknown function] (defined at: ./index.rsh:320:29:function exp)', 'at ./index.rsh:320:13:application call to [unknown function] (defined at: ./index.rsh:320:13:function exp)', 'at ./index.rsh:121:35:application call to "runaST0_704" (defined at: ./index.rsh:317:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'aST'
    });
  const v3531 = stdlib.gt256(v3522, stdlib.checkedBigNumberify('./index.rsh:322:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v3531, {
    at: './index.rsh:322:23:application',
    fs: ['at ./index.rsh:320:13:application call to [unknown function] (defined at: ./index.rsh:320:29:function exp)', 'at ./index.rsh:320:13:application call to [unknown function] (defined at: ./index.rsh:320:13:function exp)', 'at ./index.rsh:121:35:application call to "runaST0_704" (defined at: ./index.rsh:317:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v3537 = ['aST0_704', v3519];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370, v3537],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:326:30:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:326:34:decimal', stdlib.UInt_max, '0'), v2945]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
      
      switch (v3772[0]) {
        case 'aST0_704': {
          const v3775 = v3772[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aST"
            });
          ;
          const v3900 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v3901 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v3902 = [v3357, v3900, v3901];
          const v3903 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v3902);
          ;
          const v3906 = v3775[stdlib.checkedBigNumberify('./index.rsh:317:13:spread', stdlib.UInt_max, '1')];
          const v3907 = v3775[stdlib.checkedBigNumberify('./index.rsh:317:13:spread', stdlib.UInt_max, '2')];
          await stdlib.simMapSet(sim_r, 7, v3906, null);
          const v3914 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3906), null);
          const v3915 = stdlib.fromSome(v3914, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3916 = stdlib.add256(v3915, v3907);
          await stdlib.simMapSet(sim_r, 0, v3906, v3916);
          const v3917 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v3906), null);
          const v3918 = stdlib.fromSome(v3917, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3919 = stdlib.add256(v3918, v3907);
          await stdlib.simMapSet(sim_r, 3, v3906, v3919);
          const v3921 = stdlib.add256(v3321, v3907);
          const v3922 = stdlib.protect(map8_ctc, await stdlib.simMapRef(sim_r, 8, v3906), null);
          const v3924 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v3926 = stdlib.fromSome(v3922, v3924);
          const v3927 = ['None', null];
          const v3928 = await stdlib.Array_asyncReduce([v3926], v3927, async([v3930], v3929, v3931) => {
            let v3932;
            switch (v3929[0]) {
              case 'None': {
                const v3933 = v3929[1];
                v3932 = true;
                
                break;
                }
              case 'Some': {
                const v3934 = v3929[1];
                v3932 = false;
                
                break;
                }
              }
            const v3935 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:339:53:decimal', stdlib.UInt_max, '0'), v3930);
            const v3936 = v3932 ? v3935 : false;
            const v3937 = ['Some', v3931];
            const v3938 = v3936 ? v3937 : v3929;
            
            return v3938;})
          const v3939 = stdlib.fromSome(v3928, stdlib.checkedBigNumberify('./index.rsh:99:41:decimal', stdlib.UInt_max, '0'));
          const v3940 = stdlib.cast("UInt256", "UInt", v3907, false);
          const v3942 = stdlib.Array_set(v3926, v3939, v3940);
          await stdlib.simMapSet(sim_r, 8, v3906, v3942);
          const v3943 = true;
          const v3944 = await txn1.getOutput('aST', 'v3943', ctc3, v3943);
          
          const v3953 = v3270.currDistr;
          const v3955 = v3270.distrHis;
          const v3956 = v3270.distrIndex;
          const v3963 = v3270.wlArr;
          const v3964 = v3270.wlIndex;
          const v3965 = {
            ctcMan: v3360,
            currDistr: v3953,
            cv: v3351,
            distrHis: v3955,
            distrIndex: v3956,
            distrNum: v3323,
            docHash: v3347,
            saleDetails: v3365,
            saleLocked: v3325,
            totBT: v3322,
            totST: v3921,
            wlArr: v3963,
            wlIndex: v3964
            };
          const v19036 = v3965;
          const v19038 = v3903;
          const v19039 = v3965.totST;
          const v19040 = v3965.totBT;
          const v19041 = v3965.distrNum;
          const v19042 = v3965.saleLocked;
          const v19043 = v3965.docHash;
          const v19044 = v19043[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v19045 = v3965.cv;
          const v19046 = v19045[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v19047 = v19045[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v19048 = v3903[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v19049 = v19048[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v19050 = stdlib.cast("UInt", "UInt256", v19049, false);
          const v19051 = v3965.ctcMan;
          const v19052 = v3965.saleDetails;
          const v19053 = v19052.qty;
          const v19054 = v19052.price;
          const v19055 = v19052.sold;
          const v19056 = v19052.status;
          const v19057 = v19052.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addCoopId0_704': {
          const v4499 = v3772[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5223 = v3772[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5947 = v3772[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6671 = v3772[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7395 = v3772[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8119 = v3772[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8843 = v3772[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9567 = v3772[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10291 = v3772[1];
          
          break;
          }
        case 'endOS0_704': {
          const v11015 = v3772[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11739 = v3772[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12463 = v3772[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
  switch (v3772[0]) {
    case 'aST0_704': {
      const v3775 = v3772[1];
      undefined /* setApiDetails */;
      ;
      const v3900 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v3901 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v3902 = [v3357, v3900, v3901];
      const v3903 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v3902);
      ;
      const v3905 = v3775[stdlib.checkedBigNumberify('./index.rsh:317:13:spread', stdlib.UInt_max, '0')];
      const v3906 = v3775[stdlib.checkedBigNumberify('./index.rsh:317:13:spread', stdlib.UInt_max, '1')];
      const v3907 = v3775[stdlib.checkedBigNumberify('./index.rsh:317:13:spread', stdlib.UInt_max, '2')];
      const v3908 = stdlib.addressEq(v3905, v2941);
      const v3910 = stdlib.addressEq(v3905, v3360);
      const v3911 = v3908 ? true : v3910;
      stdlib.assert(v3911, {
        at: './index.rsh:329:24:application',
        fs: ['at ./index.rsh:328:13:application call to [unknown function] (defined at: ./index.rsh:328:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'aST'
        });
      const v3912 = stdlib.gt256(v3907, stdlib.checkedBigNumberify('./index.rsh:330:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v3912, {
        at: './index.rsh:330:24:application',
        fs: ['at ./index.rsh:328:13:application call to [unknown function] (defined at: ./index.rsh:328:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      await stdlib.mapSet(map7, v3906, null);
      const v3914 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3906), null);
      const v3915 = stdlib.fromSome(v3914, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3916 = stdlib.add256(v3915, v3907);
      await stdlib.mapSet(map0, v3906, v3916);
      const v3917 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3906), null);
      const v3918 = stdlib.fromSome(v3917, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3919 = stdlib.add256(v3918, v3907);
      await stdlib.mapSet(map3, v3906, v3919);
      const v3921 = stdlib.add256(v3321, v3907);
      const v3922 = stdlib.protect(map8_ctc, await stdlib.mapRef(map8, v3906), null);
      const v3924 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v3926 = stdlib.fromSome(v3922, v3924);
      const v3927 = ['None', null];
      const v3928 = await stdlib.Array_asyncReduce([v3926], v3927, async([v3930], v3929, v3931) => {
        let v3932;
        switch (v3929[0]) {
          case 'None': {
            const v3933 = v3929[1];
            v3932 = true;
            
            break;
            }
          case 'Some': {
            const v3934 = v3929[1];
            v3932 = false;
            
            break;
            }
          }
        const v3935 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:339:53:decimal', stdlib.UInt_max, '0'), v3930);
        const v3936 = v3932 ? v3935 : false;
        const v3937 = ['Some', v3931];
        const v3938 = v3936 ? v3937 : v3929;
        
        return v3938;})
      const v3939 = stdlib.fromSome(v3928, stdlib.checkedBigNumberify('./index.rsh:99:41:decimal', stdlib.UInt_max, '0'));
      const v3940 = stdlib.cast("UInt256", "UInt", v3907, false);
      const v3942 = stdlib.Array_set(v3926, v3939, v3940);
      await stdlib.mapSet(map8, v3906, v3942);
      const v3943 = true;
      const v3944 = await txn1.getOutput('aST', 'v3943', ctc3, v3943);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v3775, v3944), {
          at: './index.rsh:318:13:application',
          fs: ['at ./index.rsh:318:13:application call to [unknown function] (defined at: ./index.rsh:318:13:function exp)', 'at ./index.rsh:341:20:application call to "res" (defined at: ./index.rsh:328:13:function exp)', 'at ./index.rsh:328:13:application call to [unknown function] (defined at: ./index.rsh:328:13:function exp)'],
          msg: 'out',
          who: 'aST'
          });
        }
      else {
        }
      
      const v3953 = v3270.currDistr;
      const v3955 = v3270.distrHis;
      const v3956 = v3270.distrIndex;
      const v3963 = v3270.wlArr;
      const v3964 = v3270.wlIndex;
      const v3965 = {
        ctcMan: v3360,
        currDistr: v3953,
        cv: v3351,
        distrHis: v3955,
        distrIndex: v3956,
        distrNum: v3323,
        docHash: v3347,
        saleDetails: v3365,
        saleLocked: v3325,
        totBT: v3322,
        totST: v3921,
        wlArr: v3963,
        wlIndex: v3964
        };
      const v19036 = v3965;
      const v19038 = v3903;
      const v19039 = v3965.totST;
      const v19040 = v3965.totBT;
      const v19041 = v3965.distrNum;
      const v19042 = v3965.saleLocked;
      const v19043 = v3965.docHash;
      const v19044 = v19043[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v19045 = v3965.cv;
      const v19046 = v19045[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v19047 = v19045[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v19048 = v3903[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v19049 = v19048[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v19050 = stdlib.cast("UInt", "UInt256", v19049, false);
      const v19051 = v3965.ctcMan;
      const v19052 = v3965.saleDetails;
      const v19053 = v19052.qty;
      const v19054 = v19052.price;
      const v19055 = v19052.sold;
      const v19056 = v19052.status;
      const v19057 = v19052.cumProceeds;
      return;
      
      break;
      }
    case 'addCoopId0_704': {
      const v4499 = v3772[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5223 = v3772[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5947 = v3772[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6671 = v3772[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7395 = v3772[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8119 = v3772[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8843 = v3772[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9567 = v3772[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10291 = v3772[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v11015 = v3772[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11739 = v3772[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12463 = v3772[1];
      return;
      break;
      }
    }
  
  
  };
export async function _addCoopId3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _addCoopId3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _addCoopId3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([ctc13]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc9]);
  const ctc27 = stdlib.T_Tuple([ctc6]);
  const ctc28 = stdlib.T_Tuple([]);
  const ctc29 = stdlib.T_Tuple([ctc1]);
  const ctc30 = stdlib.T_Tuple([ctc17]);
  const ctc31 = stdlib.T_Data({
    aST0_704: ctc25,
    addCoopId0_704: ctc24,
    addWL0_704: ctc26,
    buyOS0_704: ctc27,
    cBT0_704: ctc28,
    cCM0_704: ctc26,
    claimOSpr0_704: ctc28,
    createOS0_704: ctc15,
    dBT0_704: ctc29,
    docHash0_704: ctc30,
    endOS0_704: ctc28,
    optIn0_704: ctc28,
    remWL0_704: ctc26
    });
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3549 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:362:13:application call to [unknown function] (defined at: ./index.rsh:362:13:function exp)', 'at ./index.rsh:121:35:application call to "runaddCoopId0_704" (defined at: ./index.rsh:359:14:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'addCoopId'
    });
  const v3556 = ['addCoopId0_704', v3549];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370, v3556],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:365:23:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:365:27:decimal', stdlib.UInt_max, '0'), v2945]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
      
      switch (v3772[0]) {
        case 'aST0_704': {
          const v3775 = v3772[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4499 = v3772[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addCoopId"
            });
          ;
          const v4624 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v4625 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v4626 = [v3357, v4624, v4625];
          const v4627 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v4626);
          ;
          const v4694 = v4499[stdlib.checkedBigNumberify('./index.rsh:359:14:spread', stdlib.UInt_max, '0')];
          const v4698 = v3270.currDistr;
          const v4700 = v3270.distrHis;
          const v4701 = v3270.distrIndex;
          const v4708 = v3270.wlArr;
          const v4709 = v3270.wlIndex;
          const v4710 = [v3352, v4694];
          const v4711 = {
            ctcMan: v3360,
            currDistr: v4698,
            cv: v4710,
            distrHis: v4700,
            distrIndex: v4701,
            distrNum: v3323,
            docHash: v3347,
            saleDetails: v3365,
            saleLocked: v3325,
            totBT: v3322,
            totST: v3321,
            wlArr: v4708,
            wlIndex: v4709
            };
          const v4712 = true;
          const v4713 = await txn1.getOutput('addCoopId', 'v4712', ctc3, v4712);
          
          const v19596 = v4711;
          const v19598 = v4627;
          const v19599 = v4711.totST;
          const v19600 = v4711.totBT;
          const v19601 = v4711.distrNum;
          const v19602 = v4711.saleLocked;
          const v19603 = v4711.docHash;
          const v19604 = v19603[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v19605 = v4711.cv;
          const v19606 = v19605[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v19607 = v19605[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v19608 = v4627[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v19609 = v19608[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v19610 = stdlib.cast("UInt", "UInt256", v19609, false);
          const v19611 = v4711.ctcMan;
          const v19612 = v4711.saleDetails;
          const v19613 = v19612.qty;
          const v19614 = v19612.price;
          const v19615 = v19612.sold;
          const v19616 = v19612.status;
          const v19617 = v19612.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addWL0_704': {
          const v5223 = v3772[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5947 = v3772[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6671 = v3772[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7395 = v3772[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8119 = v3772[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8843 = v3772[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9567 = v3772[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10291 = v3772[1];
          
          break;
          }
        case 'endOS0_704': {
          const v11015 = v3772[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11739 = v3772[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12463 = v3772[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
  switch (v3772[0]) {
    case 'aST0_704': {
      const v3775 = v3772[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4499 = v3772[1];
      undefined /* setApiDetails */;
      ;
      const v4624 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v4625 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v4626 = [v3357, v4624, v4625];
      const v4627 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v4626);
      ;
      const v4694 = v4499[stdlib.checkedBigNumberify('./index.rsh:359:14:spread', stdlib.UInt_max, '0')];
      const v4698 = v3270.currDistr;
      const v4700 = v3270.distrHis;
      const v4701 = v3270.distrIndex;
      const v4708 = v3270.wlArr;
      const v4709 = v3270.wlIndex;
      const v4710 = [v3352, v4694];
      const v4711 = {
        ctcMan: v3360,
        currDistr: v4698,
        cv: v4710,
        distrHis: v4700,
        distrIndex: v4701,
        distrNum: v3323,
        docHash: v3347,
        saleDetails: v3365,
        saleLocked: v3325,
        totBT: v3322,
        totST: v3321,
        wlArr: v4708,
        wlIndex: v4709
        };
      const v4712 = true;
      const v4713 = await txn1.getOutput('addCoopId', 'v4712', ctc3, v4712);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v4499, v4713), {
          at: './index.rsh:360:13:application',
          fs: ['at ./index.rsh:360:13:application call to [unknown function] (defined at: ./index.rsh:360:13:function exp)', 'at ./index.rsh:369:20:application call to "res" (defined at: ./index.rsh:367:13:function exp)', 'at ./index.rsh:367:13:application call to [unknown function] (defined at: ./index.rsh:367:13:function exp)'],
          msg: 'out',
          who: 'addCoopId'
          });
        }
      else {
        }
      
      const v19596 = v4711;
      const v19598 = v4627;
      const v19599 = v4711.totST;
      const v19600 = v4711.totBT;
      const v19601 = v4711.distrNum;
      const v19602 = v4711.saleLocked;
      const v19603 = v4711.docHash;
      const v19604 = v19603[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v19605 = v4711.cv;
      const v19606 = v19605[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v19607 = v19605[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v19608 = v4627[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v19609 = v19608[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v19610 = stdlib.cast("UInt", "UInt256", v19609, false);
      const v19611 = v4711.ctcMan;
      const v19612 = v4711.saleDetails;
      const v19613 = v19612.qty;
      const v19614 = v19612.price;
      const v19615 = v19612.sold;
      const v19616 = v19612.status;
      const v19617 = v19612.cumProceeds;
      return;
      
      break;
      }
    case 'addWL0_704': {
      const v5223 = v3772[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5947 = v3772[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6671 = v3772[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7395 = v3772[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8119 = v3772[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8843 = v3772[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9567 = v3772[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10291 = v3772[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v11015 = v3772[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11739 = v3772[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12463 = v3772[1];
      return;
      break;
      }
    }
  
  
  };
export async function _addWL3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _addWL3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _addWL3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([ctc9]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc13]);
  const ctc27 = stdlib.T_Tuple([ctc6]);
  const ctc28 = stdlib.T_Tuple([]);
  const ctc29 = stdlib.T_Tuple([ctc1]);
  const ctc30 = stdlib.T_Tuple([ctc17]);
  const ctc31 = stdlib.T_Data({
    aST0_704: ctc25,
    addCoopId0_704: ctc26,
    addWL0_704: ctc24,
    buyOS0_704: ctc27,
    cBT0_704: ctc28,
    cCM0_704: ctc24,
    claimOSpr0_704: ctc28,
    createOS0_704: ctc15,
    dBT0_704: ctc29,
    docHash0_704: ctc30,
    endOS0_704: ctc28,
    optIn0_704: ctc28,
    remWL0_704: ctc24
    });
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3487 = ctc.selfAddress();
  const v3489 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:276:13:application call to [unknown function] (defined at: ./index.rsh:276:13:function exp)', 'at ./index.rsh:121:35:application call to "runaddWL0_704" (defined at: ./index.rsh:273:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'addWL'
    });
  const v3493 = stdlib.addressEq(v3487, v2941);
  const v3495 = stdlib.addressEq(v3487, v3360);
  const v3496 = v3493 ? true : v3495;
  stdlib.assert(v3496, {
    at: './index.rsh:277:23:application',
    fs: ['at ./index.rsh:276:13:application call to [unknown function] (defined at: ./index.rsh:276:18:function exp)', 'at ./index.rsh:276:13:application call to [unknown function] (defined at: ./index.rsh:276:13:function exp)', 'at ./index.rsh:121:35:application call to "runaddWL0_704" (defined at: ./index.rsh:273:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'addWL'
    });
  const v3500 = ['addWL0_704', v3489];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370, v3500],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:281:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:281:26:decimal', stdlib.UInt_max, '0'), v2945]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
      
      switch (v3772[0]) {
        case 'aST0_704': {
          const v3775 = v3772[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4499 = v3772[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5223 = v3772[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addWL"
            });
          ;
          const v5348 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v5349 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v5350 = [v3357, v5348, v5349];
          const v5351 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v5350);
          ;
          const v5449 = v5223[stdlib.checkedBigNumberify('./index.rsh:273:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 7, v5449, null);
          const v5455 = v3270.wlIndex;
          const v5456 = stdlib.ge(v5455, stdlib.checkedBigNumberify('./index.rsh:289:80:decimal', stdlib.UInt_max, '24'));
          const v5458 = stdlib.add(v5455, stdlib.checkedBigNumberify('./index.rsh:289:105:decimal', stdlib.UInt_max, '1'));
          const v5459 = v5456 ? stdlib.checkedBigNumberify('./index.rsh:289:85:decimal', stdlib.UInt_max, '0') : v5458;
          const v5461 = v3270.currDistr;
          const v5463 = v3270.distrHis;
          const v5464 = v3270.distrIndex;
          const v5471 = v3270.wlArr;
          const v5481 = stdlib.Array_set(v5471, v5459, v5449);
          const v5482 = {
            ctcMan: v3360,
            currDistr: v5461,
            cv: v3351,
            distrHis: v5463,
            distrIndex: v5464,
            distrNum: v3323,
            docHash: v3347,
            saleDetails: v3365,
            saleLocked: v3325,
            totBT: v3322,
            totST: v3321,
            wlArr: v5481,
            wlIndex: v5459
            };
          const v5483 = true;
          const v5484 = await txn1.getOutput('addWL', 'v5483', ctc3, v5483);
          
          const v20156 = v5482;
          const v20158 = v5351;
          const v20159 = v5482.totST;
          const v20160 = v5482.totBT;
          const v20161 = v5482.distrNum;
          const v20162 = v5482.saleLocked;
          const v20163 = v5482.docHash;
          const v20164 = v20163[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v20165 = v5482.cv;
          const v20166 = v20165[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v20167 = v20165[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v20168 = v5351[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v20169 = v20168[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v20170 = stdlib.cast("UInt", "UInt256", v20169, false);
          const v20171 = v5482.ctcMan;
          const v20172 = v5482.saleDetails;
          const v20173 = v20172.qty;
          const v20174 = v20172.price;
          const v20175 = v20172.sold;
          const v20176 = v20172.status;
          const v20177 = v20172.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'buyOS0_704': {
          const v5947 = v3772[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6671 = v3772[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7395 = v3772[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8119 = v3772[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8843 = v3772[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9567 = v3772[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10291 = v3772[1];
          
          break;
          }
        case 'endOS0_704': {
          const v11015 = v3772[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11739 = v3772[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12463 = v3772[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
  switch (v3772[0]) {
    case 'aST0_704': {
      const v3775 = v3772[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4499 = v3772[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5223 = v3772[1];
      undefined /* setApiDetails */;
      ;
      const v5348 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v5349 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v5350 = [v3357, v5348, v5349];
      const v5351 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v5350);
      ;
      const v5449 = v5223[stdlib.checkedBigNumberify('./index.rsh:273:13:spread', stdlib.UInt_max, '0')];
      const v5450 = stdlib.addressEq(v3771, v2941);
      const v5452 = stdlib.addressEq(v3771, v3360);
      const v5453 = v5450 ? true : v5452;
      stdlib.assert(v5453, {
        at: './index.rsh:284:24:application',
        fs: ['at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'addWL'
        });
      await stdlib.mapSet(map7, v5449, null);
      const v5455 = v3270.wlIndex;
      const v5456 = stdlib.ge(v5455, stdlib.checkedBigNumberify('./index.rsh:289:80:decimal', stdlib.UInt_max, '24'));
      const v5458 = stdlib.add(v5455, stdlib.checkedBigNumberify('./index.rsh:289:105:decimal', stdlib.UInt_max, '1'));
      const v5459 = v5456 ? stdlib.checkedBigNumberify('./index.rsh:289:85:decimal', stdlib.UInt_max, '0') : v5458;
      const v5461 = v3270.currDistr;
      const v5463 = v3270.distrHis;
      const v5464 = v3270.distrIndex;
      const v5471 = v3270.wlArr;
      const v5481 = stdlib.Array_set(v5471, v5459, v5449);
      const v5482 = {
        ctcMan: v3360,
        currDistr: v5461,
        cv: v3351,
        distrHis: v5463,
        distrIndex: v5464,
        distrNum: v3323,
        docHash: v3347,
        saleDetails: v3365,
        saleLocked: v3325,
        totBT: v3322,
        totST: v3321,
        wlArr: v5481,
        wlIndex: v5459
        };
      const v5483 = true;
      const v5484 = await txn1.getOutput('addWL', 'v5483', ctc3, v5483);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v5223, v5484), {
          at: './index.rsh:274:13:application',
          fs: ['at ./index.rsh:274:13:application call to [unknown function] (defined at: ./index.rsh:274:13:function exp)', 'at ./index.rsh:294:20:application call to "res" (defined at: ./index.rsh:283:13:function exp)', 'at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
          msg: 'out',
          who: 'addWL'
          });
        }
      else {
        }
      
      const v20156 = v5482;
      const v20158 = v5351;
      const v20159 = v5482.totST;
      const v20160 = v5482.totBT;
      const v20161 = v5482.distrNum;
      const v20162 = v5482.saleLocked;
      const v20163 = v5482.docHash;
      const v20164 = v20163[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v20165 = v5482.cv;
      const v20166 = v20165[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v20167 = v20165[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v20168 = v5351[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v20169 = v20168[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v20170 = stdlib.cast("UInt", "UInt256", v20169, false);
      const v20171 = v5482.ctcMan;
      const v20172 = v5482.saleDetails;
      const v20173 = v20172.qty;
      const v20174 = v20172.price;
      const v20175 = v20172.sold;
      const v20176 = v20172.status;
      const v20177 = v20172.cumProceeds;
      return;
      
      break;
      }
    case 'buyOS0_704': {
      const v5947 = v3772[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6671 = v3772[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7395 = v3772[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8119 = v3772[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8843 = v3772[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9567 = v3772[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10291 = v3772[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v11015 = v3772[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11739 = v3772[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12463 = v3772[1];
      return;
      break;
      }
    }
  
  
  };
export async function _buyOS3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _buyOS3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _buyOS3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([ctc6]);
  const ctc25 = stdlib.T_Tuple([ctc11]);
  const ctc26 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc27 = stdlib.T_Tuple([ctc13]);
  const ctc28 = stdlib.T_Tuple([ctc9]);
  const ctc29 = stdlib.T_Tuple([]);
  const ctc30 = stdlib.T_Tuple([ctc1]);
  const ctc31 = stdlib.T_Tuple([ctc17]);
  const ctc32 = stdlib.T_Data({
    aST0_704: ctc26,
    addCoopId0_704: ctc27,
    addWL0_704: ctc28,
    buyOS0_704: ctc24,
    cBT0_704: ctc29,
    cCM0_704: ctc28,
    claimOSpr0_704: ctc29,
    createOS0_704: ctc15,
    dBT0_704: ctc30,
    docHash0_704: ctc31,
    endOS0_704: ctc29,
    optIn0_704: ctc29,
    remWL0_704: ctc28
    });
  const ctc33 = stdlib.T_Struct([['qty', ctc6], ['price', ctc6], ['sold', ctc6], ['status', ctc11], ['cumProceeds', ctc6]]);
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3423 = ctc.selfAddress();
  const v3425 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:121:35:application call to "runbuyOS0_704" (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'buyOS'
    });
  const v3426 = v3425[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3429 = stdlib.gt(v3426, stdlib.checkedBigNumberify('./index.rsh:200:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3429, {
    at: './index.rsh:200:23:application',
    fs: ['at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:20:function exp)', 'at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:121:35:application call to "runbuyOS0_704" (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must buy at least 1 share token',
    who: 'buyOS'
    });
  const v3432 = 'activ';
  const v3433 = stdlib.digest(ctc25, [v3369]);
  const v3435 = stdlib.digest(ctc25, [v3432]);
  const v3436 = stdlib.digestEq(v3433, v3435);
  stdlib.assert(v3436, {
    at: './index.rsh:201:23:application',
    fs: ['at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:20:function exp)', 'at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:121:35:application call to "runbuyOS0_704" (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'no sale is active',
    who: 'buyOS'
    });
  const v3439 = stdlib.ge(v3366, v3426);
  stdlib.assert(v3439, {
    at: './index.rsh:202:23:application',
    fs: ['at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:20:function exp)', 'at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:121:35:application call to "runbuyOS0_704" (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'do not try to buy more than available',
    who: 'buyOS'
    });
  const v3440 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v3423), null);
  let v3441;
  switch (v3440[0]) {
    case 'None': {
      const v3442 = v3440[1];
      v3441 = false;
      
      break;
      }
    case 'Some': {
      const v3443 = v3440[1];
      v3441 = true;
      
      break;
      }
    }
  stdlib.assert(v3441, {
    at: './index.rsh:203:23:application',
    fs: ['at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:20:function exp)', 'at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:121:35:application call to "runbuyOS0_704" (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must be whitelisted to buy',
    who: 'buyOS'
    });
  const v3447 = ['buyOS0_704', v3425];
  
  const v3664 = stdlib.mul(v3367, v3426);
  
  const txn1 = await (ctc.sendrecv({
    args: [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370, v3447],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc32],
    pay: [stdlib.checkedBigNumberify('./index.rsh:206:24:decimal', stdlib.UInt_max, '0'), [[v3664, v2945]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
      
      switch (v3772[0]) {
        case 'aST0_704': {
          const v3775 = v3772[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4499 = v3772[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5223 = v3772[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5947 = v3772[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buyOS"
            });
          const v5978 = v5947[stdlib.checkedBigNumberify('./index.rsh:196:13:spread', stdlib.UInt_max, '0')];
          const v5981 = stdlib.mul(v3367, v5978);
          ;
          const v6069 = stdlib.add(v3357, v5981);
          const v6072 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v6073 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v6074 = [v6069, v6072, v6073];
          const v6075 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v6074);
          sim_r.txns.push({
            amt: v5981,
            kind: 'to',
            tok: v2945
            });
          stdlib.protect(map7_ctc, await stdlib.simMapRef(sim_r, 7, v3771), null);
          const v6236 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3771), null);
          const v6237 = stdlib.fromSome(v6236, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6238 = stdlib.cast("UInt", "UInt256", v5978, false);
          const v6239 = stdlib.add256(v6237, v6238);
          await stdlib.simMapSet(sim_r, 0, v3771, v6239);
          const v6240 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v3771), null);
          const v6241 = stdlib.fromSome(v6240, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6243 = stdlib.add256(v6241, v6238);
          await stdlib.simMapSet(sim_r, 3, v3771, v6243);
          const v6247 = stdlib.protect(map8_ctc, await stdlib.simMapRef(sim_r, 8, v3771), null);
          const v6249 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6251 = stdlib.fromSome(v6247, v6249);
          const v6252 = ['None', null];
          const v6253 = await stdlib.Array_asyncReduce([v6251], v6252, async([v6255], v6254, v6256) => {
            let v6257;
            switch (v6254[0]) {
              case 'None': {
                const v6258 = v6254[1];
                v6257 = true;
                
                break;
                }
              case 'Some': {
                const v6259 = v6254[1];
                v6257 = false;
                
                break;
                }
              }
            const v6260 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:220:53:decimal', stdlib.UInt_max, '0'), v6255);
            const v6261 = v6257 ? v6260 : false;
            const v6262 = ['Some', v6256];
            const v6263 = v6261 ? v6262 : v6254;
            
            return v6263;})
          const v6264 = stdlib.fromSome(v6253, stdlib.checkedBigNumberify('./index.rsh:99:41:decimal', stdlib.UInt_max, '0'));
          const v6266 = stdlib.Array_set(v6251, v6264, v5978);
          await stdlib.simMapSet(sim_r, 8, v3771, v6266);
          const v6270 = stdlib.sub(v3366, v5978);
          const v6279 = stdlib.add(v3368, v5978);
          const v6283 = stdlib.mul(v5978, v3367);
          const v6284 = stdlib.add(v3370, v6283);
          const v6285 = {
            cumProceeds: v6284,
            price: v3367,
            qty: v6270,
            sold: v6279,
            status: v3369
            };
          const v6287 = v3270.currDistr;
          const v6289 = v3270.distrHis;
          const v6290 = v3270.distrIndex;
          const v6297 = v3270.wlArr;
          const v6298 = v3270.wlIndex;
          const v6300 = {
            ctcMan: v3360,
            currDistr: v6287,
            cv: v3351,
            distrHis: v6289,
            distrIndex: v6290,
            distrNum: v3323,
            docHash: v3347,
            saleDetails: v6285,
            saleLocked: v3325,
            totBT: v3322,
            totST: v3321,
            wlArr: v6297,
            wlIndex: v6298
            };
          const v6301 = {
            cumProceeds: v6284,
            price: v3367,
            qty: v6270,
            sold: v6279,
            status: v3369
            };
          const v6302 = await txn1.getOutput('buyOS', 'v6301', ctc33, v6301);
          
          const v20716 = v6300;
          const v20718 = v6075;
          const v20719 = v6300.totST;
          const v20720 = v6300.totBT;
          const v20721 = v6300.distrNum;
          const v20722 = v6300.saleLocked;
          const v20723 = v6300.docHash;
          const v20724 = v20723[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v20725 = v6300.cv;
          const v20726 = v20725[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v20727 = v20725[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v20728 = v6075[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v20729 = v20728[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v20730 = stdlib.cast("UInt", "UInt256", v20729, false);
          const v20731 = v6300.ctcMan;
          const v20732 = v6300.saleDetails;
          const v20733 = v20732.qty;
          const v20734 = v20732.price;
          const v20735 = v20732.sold;
          const v20736 = v20732.status;
          const v20737 = v20732.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cBT0_704': {
          const v6671 = v3772[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7395 = v3772[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8119 = v3772[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8843 = v3772[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9567 = v3772[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10291 = v3772[1];
          
          break;
          }
        case 'endOS0_704': {
          const v11015 = v3772[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11739 = v3772[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12463 = v3772[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc32],
    waitIfNotPresent: false
    }));
  const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
  switch (v3772[0]) {
    case 'aST0_704': {
      const v3775 = v3772[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4499 = v3772[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5223 = v3772[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5947 = v3772[1];
      undefined /* setApiDetails */;
      const v5978 = v5947[stdlib.checkedBigNumberify('./index.rsh:196:13:spread', stdlib.UInt_max, '0')];
      const v5981 = stdlib.mul(v3367, v5978);
      ;
      const v6069 = stdlib.add(v3357, v5981);
      const v6072 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v6073 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v6074 = [v6069, v6072, v6073];
      const v6075 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v6074);
      ;
      const v6221 = stdlib.gt(v5978, stdlib.checkedBigNumberify('./index.rsh:210:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v6221, {
        at: './index.rsh:210:24:application',
        fs: ['at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
        msg: 'you must sell at least 1 share token',
        who: 'buyOS'
        });
      const v6224 = 'activ';
      const v6225 = stdlib.digest(ctc25, [v3369]);
      const v6227 = stdlib.digest(ctc25, [v6224]);
      const v6228 = stdlib.digestEq(v6225, v6227);
      stdlib.assert(v6228, {
        at: './index.rsh:211:24:application',
        fs: ['at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
        msg: 'no sale is active',
        who: 'buyOS'
        });
      const v6231 = stdlib.ge(v3366, v5978);
      stdlib.assert(v6231, {
        at: './index.rsh:212:24:application',
        fs: ['at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
        msg: 'do not try to buy more than available',
        who: 'buyOS'
        });
      const v6232 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v3771), null);
      let v6233;
      switch (v6232[0]) {
        case 'None': {
          const v6234 = v6232[1];
          v6233 = false;
          
          break;
          }
        case 'Some': {
          const v6235 = v6232[1];
          v6233 = true;
          
          break;
          }
        }
      stdlib.assert(v6233, {
        at: './index.rsh:213:24:application',
        fs: ['at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
        msg: 'you must be whitelisted to buy',
        who: 'buyOS'
        });
      const v6236 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3771), null);
      const v6237 = stdlib.fromSome(v6236, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6238 = stdlib.cast("UInt", "UInt256", v5978, false);
      const v6239 = stdlib.add256(v6237, v6238);
      await stdlib.mapSet(map0, v3771, v6239);
      const v6240 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3771), null);
      const v6241 = stdlib.fromSome(v6240, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6243 = stdlib.add256(v6241, v6238);
      await stdlib.mapSet(map3, v3771, v6243);
      const v6247 = stdlib.protect(map8_ctc, await stdlib.mapRef(map8, v3771), null);
      const v6249 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6251 = stdlib.fromSome(v6247, v6249);
      const v6252 = ['None', null];
      const v6253 = await stdlib.Array_asyncReduce([v6251], v6252, async([v6255], v6254, v6256) => {
        let v6257;
        switch (v6254[0]) {
          case 'None': {
            const v6258 = v6254[1];
            v6257 = true;
            
            break;
            }
          case 'Some': {
            const v6259 = v6254[1];
            v6257 = false;
            
            break;
            }
          }
        const v6260 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:220:53:decimal', stdlib.UInt_max, '0'), v6255);
        const v6261 = v6257 ? v6260 : false;
        const v6262 = ['Some', v6256];
        const v6263 = v6261 ? v6262 : v6254;
        
        return v6263;})
      const v6264 = stdlib.fromSome(v6253, stdlib.checkedBigNumberify('./index.rsh:99:41:decimal', stdlib.UInt_max, '0'));
      const v6266 = stdlib.Array_set(v6251, v6264, v5978);
      await stdlib.mapSet(map8, v3771, v6266);
      const v6270 = stdlib.sub(v3366, v5978);
      const v6279 = stdlib.add(v3368, v5978);
      const v6283 = stdlib.mul(v5978, v3367);
      const v6284 = stdlib.add(v3370, v6283);
      const v6285 = {
        cumProceeds: v6284,
        price: v3367,
        qty: v6270,
        sold: v6279,
        status: v3369
        };
      const v6287 = v3270.currDistr;
      const v6289 = v3270.distrHis;
      const v6290 = v3270.distrIndex;
      const v6297 = v3270.wlArr;
      const v6298 = v3270.wlIndex;
      const v6300 = {
        ctcMan: v3360,
        currDistr: v6287,
        cv: v3351,
        distrHis: v6289,
        distrIndex: v6290,
        distrNum: v3323,
        docHash: v3347,
        saleDetails: v6285,
        saleLocked: v3325,
        totBT: v3322,
        totST: v3321,
        wlArr: v6297,
        wlIndex: v6298
        };
      const v6301 = {
        cumProceeds: v6284,
        price: v3367,
        qty: v6270,
        sold: v6279,
        status: v3369
        };
      const v6302 = await txn1.getOutput('buyOS', 'v6301', ctc33, v6301);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v5947, v6302), {
          at: './index.rsh:197:13:application',
          fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:227:20:application call to "res" (defined at: ./index.rsh:208:13:function exp)', 'at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
          msg: 'out',
          who: 'buyOS'
          });
        }
      else {
        }
      
      const v20716 = v6300;
      const v20718 = v6075;
      const v20719 = v6300.totST;
      const v20720 = v6300.totBT;
      const v20721 = v6300.distrNum;
      const v20722 = v6300.saleLocked;
      const v20723 = v6300.docHash;
      const v20724 = v20723[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v20725 = v6300.cv;
      const v20726 = v20725[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v20727 = v20725[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v20728 = v6075[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v20729 = v20728[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v20730 = stdlib.cast("UInt", "UInt256", v20729, false);
      const v20731 = v6300.ctcMan;
      const v20732 = v6300.saleDetails;
      const v20733 = v20732.qty;
      const v20734 = v20732.price;
      const v20735 = v20732.sold;
      const v20736 = v20732.status;
      const v20737 = v20732.cumProceeds;
      return;
      
      break;
      }
    case 'cBT0_704': {
      const v6671 = v3772[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7395 = v3772[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8119 = v3772[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8843 = v3772[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9567 = v3772[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10291 = v3772[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v11015 = v3772[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11739 = v3772[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12463 = v3772[1];
      return;
      break;
      }
    }
  
  
  };
export async function _cBT3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _cBT3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _cBT3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc13]);
  const ctc27 = stdlib.T_Tuple([ctc9]);
  const ctc28 = stdlib.T_Tuple([ctc6]);
  const ctc29 = stdlib.T_Tuple([ctc1]);
  const ctc30 = stdlib.T_Tuple([ctc17]);
  const ctc31 = stdlib.T_Data({
    aST0_704: ctc25,
    addCoopId0_704: ctc26,
    addWL0_704: ctc27,
    buyOS0_704: ctc28,
    cBT0_704: ctc24,
    cCM0_704: ctc27,
    claimOSpr0_704: ctc24,
    createOS0_704: ctc15,
    dBT0_704: ctc29,
    docHash0_704: ctc30,
    endOS0_704: ctc24,
    optIn0_704: ctc24,
    remWL0_704: ctc27
    });
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3575 = ctc.selfAddress();
  const v3577 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:399:13:application call to [unknown function] (defined at: ./index.rsh:399:13:function exp)', 'at ./index.rsh:121:35:application call to "runcBT0_704" (defined at: ./index.rsh:396:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'cBT'
    });
  const v3579 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v3575), null);
  let v3580;
  switch (v3579[0]) {
    case 'None': {
      const v3581 = v3579[1];
      v3580 = false;
      
      break;
      }
    case 'Some': {
      const v3582 = v3579[1];
      v3580 = true;
      
      break;
      }
    }
  stdlib.assert(v3580, {
    at: './index.rsh:400:23:application',
    fs: ['at ./index.rsh:399:13:application call to [unknown function] (defined at: ./index.rsh:399:17:function exp)', 'at ./index.rsh:399:13:application call to [unknown function] (defined at: ./index.rsh:399:13:function exp)', 'at ./index.rsh:121:35:application call to "runcBT0_704" (defined at: ./index.rsh:396:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v3586 = stdlib.gt256(v3358, stdlib.checkedBigNumberify('./index.rsh:402:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v3586, {
    at: './index.rsh:402:23:application',
    fs: ['at ./index.rsh:399:13:application call to [unknown function] (defined at: ./index.rsh:399:17:function exp)', 'at ./index.rsh:399:13:application call to [unknown function] (defined at: ./index.rsh:399:13:function exp)', 'at ./index.rsh:121:35:application call to "runcBT0_704" (defined at: ./index.rsh:396:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'well, balance(bT) is 0',
    who: 'cBT'
    });
  const v3588 = stdlib.gt256(v3321, stdlib.checkedBigNumberify('./index.rsh:403:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v3588, {
    at: './index.rsh:403:23:application',
    fs: ['at ./index.rsh:399:13:application call to [unknown function] (defined at: ./index.rsh:399:17:function exp)', 'at ./index.rsh:399:13:application call to [unknown function] (defined at: ./index.rsh:399:13:function exp)', 'at ./index.rsh:121:35:application call to "runcBT0_704" (defined at: ./index.rsh:396:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'totST is 0. This means there should be no distributions yet',
    who: 'cBT'
    });
  const v3590 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3575), null);
  const v3591 = stdlib.fromSome(v3590, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v3592 = stdlib.ge256(v3321, v3591);
  stdlib.assert(v3592, {
    at: './index.rsh:404:23:application',
    fs: ['at ./index.rsh:399:13:application call to [unknown function] (defined at: ./index.rsh:399:17:function exp)', 'at ./index.rsh:399:13:application call to [unknown function] (defined at: ./index.rsh:399:13:function exp)', 'at ./index.rsh:121:35:application call to "runcBT0_704" (defined at: ./index.rsh:396:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'weirdly, totST is less than totAllST[this]',
    who: 'cBT'
    });
  const v3595 = stdlib.gt256(v3591, stdlib.checkedBigNumberify('./index.rsh:405:58:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v3595, {
    at: './index.rsh:405:23:application',
    fs: ['at ./index.rsh:399:13:application call to [unknown function] (defined at: ./index.rsh:399:17:function exp)', 'at ./index.rsh:399:13:application call to [unknown function] (defined at: ./index.rsh:399:13:function exp)', 'at ./index.rsh:121:35:application call to "runcBT0_704" (defined at: ./index.rsh:396:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'totAllST[this] is 0. This means you should not rec distr',
    who: 'cBT'
    });
  const v3598 = v3270.currDistr;
  const v3599 = stdlib.mul256(v3591, v3598);
  const v3601 = stdlib.div256(v3599, v3321);
  const v3602 = stdlib.cast("UInt256", "UInt", v3601, false);
  const v3605 = stdlib.le(v3602, v3357);
  stdlib.assert(v3605, {
    at: './index.rsh:407:23:application',
    fs: ['at ./index.rsh:399:13:application call to [unknown function] (defined at: ./index.rsh:399:17:function exp)', 'at ./index.rsh:399:13:application call to [unknown function] (defined at: ./index.rsh:399:13:function exp)', 'at ./index.rsh:121:35:application call to "runcBT0_704" (defined at: ./index.rsh:396:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'weirdly, trying to withdraw more than available balance',
    who: 'cBT'
    });
  const v3608 = ['cBT0_704', v3577];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370, v3608],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:410:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:410:25:decimal', stdlib.UInt_max, '0'), v2945]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
      
      switch (v3772[0]) {
        case 'aST0_704': {
          const v3775 = v3772[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4499 = v3772[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5223 = v3772[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5947 = v3772[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6671 = v3772[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cBT"
            });
          ;
          const v6796 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v6797 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v6798 = [v3357, v6796, v6797];
          const v6799 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v6798);
          ;
          stdlib.protect(map7_ctc, await stdlib.simMapRef(sim_r, 7, v3771), null);
          const v7047 = v6799[stdlib.checkedBigNumberify('./index.rsh:415:40:application', stdlib.UInt_max, '0')];
          const v7048 = v7047[stdlib.checkedBigNumberify('./index.rsh:415:40:application', stdlib.UInt_max, '0')];
          const v7054 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v3771), null);
          const v7055 = stdlib.fromSome(v7054, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7062 = v3270.currDistr;
          const v7063 = stdlib.mul256(v7055, v7062);
          const v7065 = stdlib.div256(v7063, v3321);
          const v7066 = stdlib.cast("UInt256", "UInt", v7065, false);
          const v7076 = stdlib.sub(v7048, v7066);
          const v7079 = v7047[stdlib.checkedBigNumberify('./index.rsh:422:50:application', stdlib.UInt_max, '1')];
          const v7080 = v7047[stdlib.checkedBigNumberify('./index.rsh:422:50:application', stdlib.UInt_max, '2')];
          const v7081 = [v7076, v7079, v7080];
          const v7082 = stdlib.Array_set(v6799, stdlib.checkedBigNumberify('./index.rsh:422:50:application', stdlib.UInt_max, '0'), v7081);
          sim_r.txns.push({
            kind: 'from',
            to: v3771,
            tok: v2945
            });
          const v7083 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v3771), null);
          const v7084 = stdlib.fromSome(v7083, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7085 = stdlib.add256(v7084, v7065);
          await stdlib.simMapSet(sim_r, 4, v3771, v7085);
          const v7086 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v3771), null);
          const v7087 = stdlib.fromSome(v7086, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7088 = stdlib.add256(v7087, stdlib.checkedBigNumberify('./index.rsh:424:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 5, v3771, v7088);
          const v7089 = await txn1.getOutput('cBT', 'v7065', ctc1, v7065);
          
          const v21276 = v3270;
          const v21278 = v7082;
          const v21279 = v3270.totST;
          const v21280 = v3270.totBT;
          const v21281 = v3270.distrNum;
          const v21282 = v3270.saleLocked;
          const v21283 = v3270.docHash;
          const v21284 = v21283[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v21285 = v3270.cv;
          const v21286 = v21285[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v21287 = v21285[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v21288 = v7082[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v21289 = v21288[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v21290 = stdlib.cast("UInt", "UInt256", v21289, false);
          const v21291 = v3270.ctcMan;
          const v21292 = v3270.saleDetails;
          const v21293 = v21292.qty;
          const v21294 = v21292.price;
          const v21295 = v21292.sold;
          const v21296 = v21292.status;
          const v21297 = v21292.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cCM0_704': {
          const v7395 = v3772[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8119 = v3772[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8843 = v3772[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9567 = v3772[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10291 = v3772[1];
          
          break;
          }
        case 'endOS0_704': {
          const v11015 = v3772[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11739 = v3772[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12463 = v3772[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
  switch (v3772[0]) {
    case 'aST0_704': {
      const v3775 = v3772[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4499 = v3772[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5223 = v3772[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5947 = v3772[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6671 = v3772[1];
      undefined /* setApiDetails */;
      ;
      const v6796 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v6797 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v6798 = [v3357, v6796, v6797];
      const v6799 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v6798);
      ;
      const v7043 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v3771), null);
      let v7044;
      switch (v7043[0]) {
        case 'None': {
          const v7045 = v7043[1];
          v7044 = false;
          
          break;
          }
        case 'Some': {
          const v7046 = v7043[1];
          v7044 = true;
          
          break;
          }
        }
      stdlib.assert(v7044, {
        at: './index.rsh:413:24:application',
        fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v7047 = v6799[stdlib.checkedBigNumberify('./index.rsh:415:40:application', stdlib.UInt_max, '0')];
      const v7048 = v7047[stdlib.checkedBigNumberify('./index.rsh:415:40:application', stdlib.UInt_max, '0')];
      const v7049 = stdlib.cast("UInt", "UInt256", v7048, false);
      const v7050 = stdlib.gt256(v7049, stdlib.checkedBigNumberify('./index.rsh:415:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v7050, {
        at: './index.rsh:415:24:application',
        fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
        msg: 'well, balance(bT) is 0',
        who: 'cBT'
        });
      const v7052 = stdlib.gt256(v3321, stdlib.checkedBigNumberify('./index.rsh:416:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v7052, {
        at: './index.rsh:416:24:application',
        fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
        msg: 'totST is 0. This means there should be no distributions yet',
        who: 'cBT'
        });
      const v7054 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3771), null);
      const v7055 = stdlib.fromSome(v7054, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v7056 = stdlib.ge256(v3321, v7055);
      stdlib.assert(v7056, {
        at: './index.rsh:417:24:application',
        fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
        msg: 'weirdly, totST is less than totAllST[this]',
        who: 'cBT'
        });
      const v7059 = stdlib.gt256(v7055, stdlib.checkedBigNumberify('./index.rsh:418:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v7059, {
        at: './index.rsh:418:24:application',
        fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
        msg: 'totAllST[this] is 0. This means you should not rec distr',
        who: 'cBT'
        });
      const v7062 = v3270.currDistr;
      const v7063 = stdlib.mul256(v7055, v7062);
      const v7065 = stdlib.div256(v7063, v3321);
      const v7066 = stdlib.cast("UInt256", "UInt", v7065, false);
      const v7069 = stdlib.le(v7066, v7048);
      stdlib.assert(v7069, {
        at: './index.rsh:420:24:application',
        fs: ['at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
        msg: 'weirdly, trying to withdraw more than available balance',
        who: 'cBT'
        });
      const v7076 = stdlib.sub(v7048, v7066);
      const v7079 = v7047[stdlib.checkedBigNumberify('./index.rsh:422:50:application', stdlib.UInt_max, '1')];
      const v7080 = v7047[stdlib.checkedBigNumberify('./index.rsh:422:50:application', stdlib.UInt_max, '2')];
      const v7081 = [v7076, v7079, v7080];
      const v7082 = stdlib.Array_set(v6799, stdlib.checkedBigNumberify('./index.rsh:422:50:application', stdlib.UInt_max, '0'), v7081);
      ;
      const v7083 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v3771), null);
      const v7084 = stdlib.fromSome(v7083, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v7085 = stdlib.add256(v7084, v7065);
      await stdlib.mapSet(map4, v3771, v7085);
      const v7086 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v3771), null);
      const v7087 = stdlib.fromSome(v7086, stdlib.checkedBigNumberify('./index.rsh:98:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v7088 = stdlib.add256(v7087, stdlib.checkedBigNumberify('./index.rsh:424:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map5, v3771, v7088);
      const v7089 = await txn1.getOutput('cBT', 'v7065', ctc1, v7065);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v6671, v7089), {
          at: './index.rsh:397:13:application',
          fs: ['at ./index.rsh:397:13:application call to [unknown function] (defined at: ./index.rsh:397:13:function exp)', 'at ./index.rsh:425:20:application call to "res" (defined at: ./index.rsh:412:13:function exp)', 'at ./index.rsh:412:13:application call to [unknown function] (defined at: ./index.rsh:412:13:function exp)'],
          msg: 'out',
          who: 'cBT'
          });
        }
      else {
        }
      
      const v21276 = v3270;
      const v21278 = v7082;
      const v21279 = v3270.totST;
      const v21280 = v3270.totBT;
      const v21281 = v3270.distrNum;
      const v21282 = v3270.saleLocked;
      const v21283 = v3270.docHash;
      const v21284 = v21283[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v21285 = v3270.cv;
      const v21286 = v21285[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v21287 = v21285[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v21288 = v7082[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v21289 = v21288[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v21290 = stdlib.cast("UInt", "UInt256", v21289, false);
      const v21291 = v3270.ctcMan;
      const v21292 = v3270.saleDetails;
      const v21293 = v21292.qty;
      const v21294 = v21292.price;
      const v21295 = v21292.sold;
      const v21296 = v21292.status;
      const v21297 = v21292.cumProceeds;
      return;
      
      break;
      }
    case 'cCM0_704': {
      const v7395 = v3772[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8119 = v3772[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8843 = v3772[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9567 = v3772[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10291 = v3772[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v11015 = v3772[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11739 = v3772[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12463 = v3772[1];
      return;
      break;
      }
    }
  
  
  };
export async function _cCM3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _cCM3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _cCM3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([ctc9]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc13]);
  const ctc27 = stdlib.T_Tuple([ctc6]);
  const ctc28 = stdlib.T_Tuple([]);
  const ctc29 = stdlib.T_Tuple([ctc1]);
  const ctc30 = stdlib.T_Tuple([ctc17]);
  const ctc31 = stdlib.T_Data({
    aST0_704: ctc25,
    addCoopId0_704: ctc26,
    addWL0_704: ctc24,
    buyOS0_704: ctc27,
    cBT0_704: ctc28,
    cCM0_704: ctc24,
    claimOSpr0_704: ctc28,
    createOS0_704: ctc15,
    dBT0_704: ctc29,
    docHash0_704: ctc30,
    endOS0_704: ctc28,
    optIn0_704: ctc28,
    remWL0_704: ctc24
    });
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3610 = ctc.selfAddress();
  const v3612 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:432:13:application call to [unknown function] (defined at: ./index.rsh:432:13:function exp)', 'at ./index.rsh:121:35:application call to "runcCM0_704" (defined at: ./index.rsh:429:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'cCM'
    });
  const v3616 = stdlib.addressEq(v3610, v2941);
  const v3618 = stdlib.addressEq(v3610, v3360);
  const v3619 = v3616 ? true : v3618;
  stdlib.assert(v3619, {
    at: './index.rsh:433:23:application',
    fs: ['at ./index.rsh:432:13:application call to [unknown function] (defined at: ./index.rsh:432:21:function exp)', 'at ./index.rsh:432:13:application call to [unknown function] (defined at: ./index.rsh:432:13:function exp)', 'at ./index.rsh:121:35:application call to "runcCM0_704" (defined at: ./index.rsh:429:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'cCM'
    });
  const v3623 = ['cCM0_704', v3612];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370, v3623],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:437:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:437:26:decimal', stdlib.UInt_max, '0'), v2945]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
      
      switch (v3772[0]) {
        case 'aST0_704': {
          const v3775 = v3772[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4499 = v3772[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5223 = v3772[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5947 = v3772[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6671 = v3772[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7395 = v3772[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cCM"
            });
          ;
          const v7520 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v7521 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v7522 = [v3357, v7520, v7521];
          const v7523 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v7522);
          ;
          const v7820 = v7395[stdlib.checkedBigNumberify('./index.rsh:429:13:spread', stdlib.UInt_max, '0')];
          const v7825 = true;
          const v7826 = await txn1.getOutput('cCM', 'v7825', ctc3, v7825);
          
          const v7833 = v3270.currDistr;
          const v7835 = v3270.distrHis;
          const v7836 = v3270.distrIndex;
          const v7843 = v3270.wlArr;
          const v7844 = v3270.wlIndex;
          const v7845 = {
            ctcMan: v7820,
            currDistr: v7833,
            cv: v3351,
            distrHis: v7835,
            distrIndex: v7836,
            distrNum: v3323,
            docHash: v3347,
            saleDetails: v3365,
            saleLocked: v3325,
            totBT: v3322,
            totST: v3321,
            wlArr: v7843,
            wlIndex: v7844
            };
          const v21836 = v7845;
          const v21838 = v7523;
          const v21839 = v7845.totST;
          const v21840 = v7845.totBT;
          const v21841 = v7845.distrNum;
          const v21842 = v7845.saleLocked;
          const v21843 = v7845.docHash;
          const v21844 = v21843[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v21845 = v7845.cv;
          const v21846 = v21845[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v21847 = v21845[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v21848 = v7523[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v21849 = v21848[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v21850 = stdlib.cast("UInt", "UInt256", v21849, false);
          const v21851 = v7845.ctcMan;
          const v21852 = v7845.saleDetails;
          const v21853 = v21852.qty;
          const v21854 = v21852.price;
          const v21855 = v21852.sold;
          const v21856 = v21852.status;
          const v21857 = v21852.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8119 = v3772[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8843 = v3772[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9567 = v3772[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10291 = v3772[1];
          
          break;
          }
        case 'endOS0_704': {
          const v11015 = v3772[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11739 = v3772[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12463 = v3772[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
  switch (v3772[0]) {
    case 'aST0_704': {
      const v3775 = v3772[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4499 = v3772[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5223 = v3772[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5947 = v3772[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6671 = v3772[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7395 = v3772[1];
      undefined /* setApiDetails */;
      ;
      const v7520 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v7521 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v7522 = [v3357, v7520, v7521];
      const v7523 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v7522);
      ;
      const v7820 = v7395[stdlib.checkedBigNumberify('./index.rsh:429:13:spread', stdlib.UInt_max, '0')];
      const v7821 = stdlib.addressEq(v3771, v2941);
      const v7823 = stdlib.addressEq(v3771, v3360);
      const v7824 = v7821 ? true : v7823;
      stdlib.assert(v7824, {
        at: './index.rsh:440:24:application',
        fs: ['at ./index.rsh:439:13:application call to [unknown function] (defined at: ./index.rsh:439:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'cCM'
        });
      const v7825 = true;
      const v7826 = await txn1.getOutput('cCM', 'v7825', ctc3, v7825);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v7395, v7826), {
          at: './index.rsh:430:13:application',
          fs: ['at ./index.rsh:430:13:application call to [unknown function] (defined at: ./index.rsh:430:13:function exp)', 'at ./index.rsh:443:20:application call to "res" (defined at: ./index.rsh:439:13:function exp)', 'at ./index.rsh:439:13:application call to [unknown function] (defined at: ./index.rsh:439:13:function exp)'],
          msg: 'out',
          who: 'cCM'
          });
        }
      else {
        }
      
      const v7833 = v3270.currDistr;
      const v7835 = v3270.distrHis;
      const v7836 = v3270.distrIndex;
      const v7843 = v3270.wlArr;
      const v7844 = v3270.wlIndex;
      const v7845 = {
        ctcMan: v7820,
        currDistr: v7833,
        cv: v3351,
        distrHis: v7835,
        distrIndex: v7836,
        distrNum: v3323,
        docHash: v3347,
        saleDetails: v3365,
        saleLocked: v3325,
        totBT: v3322,
        totST: v3321,
        wlArr: v7843,
        wlIndex: v7844
        };
      const v21836 = v7845;
      const v21838 = v7523;
      const v21839 = v7845.totST;
      const v21840 = v7845.totBT;
      const v21841 = v7845.distrNum;
      const v21842 = v7845.saleLocked;
      const v21843 = v7845.docHash;
      const v21844 = v21843[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v21845 = v7845.cv;
      const v21846 = v21845[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v21847 = v21845[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v21848 = v7523[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v21849 = v21848[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v21850 = stdlib.cast("UInt", "UInt256", v21849, false);
      const v21851 = v7845.ctcMan;
      const v21852 = v7845.saleDetails;
      const v21853 = v21852.qty;
      const v21854 = v21852.price;
      const v21855 = v21852.sold;
      const v21856 = v21852.status;
      const v21857 = v21852.cumProceeds;
      return;
      
      break;
      }
    case 'claimOSpr0_704': {
      const v8119 = v3772[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8843 = v3772[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9567 = v3772[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10291 = v3772[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v11015 = v3772[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11739 = v3772[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12463 = v3772[1];
      return;
      break;
      }
    }
  
  
  };
export async function _claimOSpr3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claimOSpr3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claimOSpr3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc13]);
  const ctc27 = stdlib.T_Tuple([ctc9]);
  const ctc28 = stdlib.T_Tuple([ctc6]);
  const ctc29 = stdlib.T_Tuple([ctc1]);
  const ctc30 = stdlib.T_Tuple([ctc17]);
  const ctc31 = stdlib.T_Data({
    aST0_704: ctc25,
    addCoopId0_704: ctc26,
    addWL0_704: ctc27,
    buyOS0_704: ctc28,
    cBT0_704: ctc24,
    cCM0_704: ctc27,
    claimOSpr0_704: ctc24,
    createOS0_704: ctc15,
    dBT0_704: ctc29,
    docHash0_704: ctc30,
    endOS0_704: ctc24,
    optIn0_704: ctc24,
    remWL0_704: ctc27
    });
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3449 = ctc.selfAddress();
  const v3451 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:233:13:application call to [unknown function] (defined at: ./index.rsh:233:13:function exp)', 'at ./index.rsh:121:35:application call to "runclaimOSpr0_704" (defined at: ./index.rsh:230:14:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'claimOSpr'
    });
  const v3453 = stdlib.addressEq(v3449, v2941);
  const v3455 = stdlib.addressEq(v3449, v3360);
  const v3456 = v3453 ? true : v3455;
  stdlib.assert(v3456, {
    at: './index.rsh:234:23:application',
    fs: ['at ./index.rsh:233:13:application call to [unknown function] (defined at: ./index.rsh:233:17:function exp)', 'at ./index.rsh:233:13:application call to [unknown function] (defined at: ./index.rsh:233:13:function exp)', 'at ./index.rsh:121:35:application call to "runclaimOSpr0_704" (defined at: ./index.rsh:230:14:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'claimOSpr'
    });
  const v3459 = stdlib.gt(v3370, stdlib.checkedBigNumberify('./index.rsh:235:56:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3459, {
    at: './index.rsh:235:23:application',
    fs: ['at ./index.rsh:233:13:application call to [unknown function] (defined at: ./index.rsh:233:17:function exp)', 'at ./index.rsh:233:13:application call to [unknown function] (defined at: ./index.rsh:233:13:function exp)', 'at ./index.rsh:121:35:application call to "runclaimOSpr0_704" (defined at: ./index.rsh:230:14:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'available proceeds must be greater than 0',
    who: 'claimOSpr'
    });
  const v3464 = stdlib.ge(v3357, v3370);
  stdlib.assert(v3464, {
    at: './index.rsh:236:23:application',
    fs: ['at ./index.rsh:233:13:application call to [unknown function] (defined at: ./index.rsh:233:17:function exp)', 'at ./index.rsh:233:13:application call to [unknown function] (defined at: ./index.rsh:233:13:function exp)', 'at ./index.rsh:121:35:application call to "runclaimOSpr0_704" (defined at: ./index.rsh:230:14:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'weirdly insufficienct balance of BT',
    who: 'claimOSpr'
    });
  const v3467 = ['claimOSpr0_704', v3451];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370, v3467],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:239:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:239:25:decimal', stdlib.UInt_max, '0'), v2945]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
      
      switch (v3772[0]) {
        case 'aST0_704': {
          const v3775 = v3772[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4499 = v3772[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5223 = v3772[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5947 = v3772[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6671 = v3772[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7395 = v3772[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8119 = v3772[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimOSpr"
            });
          ;
          const v8244 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v8245 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v8246 = [v3357, v8244, v8245];
          const v8247 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v8246);
          ;
          const v8581 = v8247[stdlib.checkedBigNumberify('./index.rsh:244:32:application', stdlib.UInt_max, '0')];
          const v8582 = v8581[stdlib.checkedBigNumberify('./index.rsh:244:32:application', stdlib.UInt_max, '0')];
          const v8593 = stdlib.sub(v8582, v3370);
          const v8596 = v8581[stdlib.checkedBigNumberify('./index.rsh:245:70:application', stdlib.UInt_max, '1')];
          const v8597 = v8581[stdlib.checkedBigNumberify('./index.rsh:245:70:application', stdlib.UInt_max, '2')];
          const v8598 = [v8593, v8596, v8597];
          const v8599 = stdlib.Array_set(v8247, stdlib.checkedBigNumberify('./index.rsh:245:70:application', stdlib.UInt_max, '0'), v8598);
          sim_r.txns.push({
            kind: 'from',
            to: v3771,
            tok: v2945
            });
          const v8606 = {
            cumProceeds: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            price: v3367,
            qty: v3366,
            sold: v3368,
            status: v3369
            };
          const v8608 = v3270.currDistr;
          const v8610 = v3270.distrHis;
          const v8611 = v3270.distrIndex;
          const v8618 = v3270.wlArr;
          const v8619 = v3270.wlIndex;
          const v8621 = {
            ctcMan: v3360,
            currDistr: v8608,
            cv: v3351,
            distrHis: v8610,
            distrIndex: v8611,
            distrNum: v3323,
            docHash: v3347,
            saleDetails: v8606,
            saleLocked: v3325,
            totBT: v3322,
            totST: v3321,
            wlArr: v8618,
            wlIndex: v8619
            };
          const v8622 = true;
          const v8623 = await txn1.getOutput('claimOSpr', 'v8622', ctc3, v8622);
          
          const v22396 = v8621;
          const v22398 = v8599;
          const v22399 = v8621.totST;
          const v22400 = v8621.totBT;
          const v22401 = v8621.distrNum;
          const v22402 = v8621.saleLocked;
          const v22403 = v8621.docHash;
          const v22404 = v22403[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v22405 = v8621.cv;
          const v22406 = v22405[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v22407 = v22405[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v22408 = v8599[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v22409 = v22408[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v22410 = stdlib.cast("UInt", "UInt256", v22409, false);
          const v22411 = v8621.ctcMan;
          const v22412 = v8621.saleDetails;
          const v22413 = v22412.qty;
          const v22414 = v22412.price;
          const v22415 = v22412.sold;
          const v22416 = v22412.status;
          const v22417 = v22412.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'createOS0_704': {
          const v8843 = v3772[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9567 = v3772[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10291 = v3772[1];
          
          break;
          }
        case 'endOS0_704': {
          const v11015 = v3772[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11739 = v3772[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12463 = v3772[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
  switch (v3772[0]) {
    case 'aST0_704': {
      const v3775 = v3772[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4499 = v3772[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5223 = v3772[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5947 = v3772[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6671 = v3772[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7395 = v3772[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8119 = v3772[1];
      undefined /* setApiDetails */;
      ;
      const v8244 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v8245 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v8246 = [v3357, v8244, v8245];
      const v8247 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v8246);
      ;
      const v8574 = stdlib.addressEq(v3771, v2941);
      const v8576 = stdlib.addressEq(v3771, v3360);
      const v8577 = v8574 ? true : v8576;
      stdlib.assert(v8577, {
        at: './index.rsh:242:24:application',
        fs: ['at ./index.rsh:241:13:application call to [unknown function] (defined at: ./index.rsh:241:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'claimOSpr'
        });
      const v8580 = stdlib.gt(v3370, stdlib.checkedBigNumberify('./index.rsh:243:57:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v8580, {
        at: './index.rsh:243:24:application',
        fs: ['at ./index.rsh:241:13:application call to [unknown function] (defined at: ./index.rsh:241:13:function exp)'],
        msg: 'available proceeds must be greater than 0',
        who: 'claimOSpr'
        });
      const v8581 = v8247[stdlib.checkedBigNumberify('./index.rsh:244:32:application', stdlib.UInt_max, '0')];
      const v8582 = v8581[stdlib.checkedBigNumberify('./index.rsh:244:32:application', stdlib.UInt_max, '0')];
      const v8585 = stdlib.ge(v8582, v3370);
      stdlib.assert(v8585, {
        at: './index.rsh:244:24:application',
        fs: ['at ./index.rsh:241:13:application call to [unknown function] (defined at: ./index.rsh:241:13:function exp)'],
        msg: 'weirdly insufficienct balance of BT',
        who: 'claimOSpr'
        });
      const v8593 = stdlib.sub(v8582, v3370);
      const v8596 = v8581[stdlib.checkedBigNumberify('./index.rsh:245:70:application', stdlib.UInt_max, '1')];
      const v8597 = v8581[stdlib.checkedBigNumberify('./index.rsh:245:70:application', stdlib.UInt_max, '2')];
      const v8598 = [v8593, v8596, v8597];
      const v8599 = stdlib.Array_set(v8247, stdlib.checkedBigNumberify('./index.rsh:245:70:application', stdlib.UInt_max, '0'), v8598);
      ;
      const v8606 = {
        cumProceeds: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        price: v3367,
        qty: v3366,
        sold: v3368,
        status: v3369
        };
      const v8608 = v3270.currDistr;
      const v8610 = v3270.distrHis;
      const v8611 = v3270.distrIndex;
      const v8618 = v3270.wlArr;
      const v8619 = v3270.wlIndex;
      const v8621 = {
        ctcMan: v3360,
        currDistr: v8608,
        cv: v3351,
        distrHis: v8610,
        distrIndex: v8611,
        distrNum: v3323,
        docHash: v3347,
        saleDetails: v8606,
        saleLocked: v3325,
        totBT: v3322,
        totST: v3321,
        wlArr: v8618,
        wlIndex: v8619
        };
      const v8622 = true;
      const v8623 = await txn1.getOutput('claimOSpr', 'v8622', ctc3, v8622);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v8119, v8623), {
          at: './index.rsh:231:13:application',
          fs: ['at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:248:20:application call to "res" (defined at: ./index.rsh:241:13:function exp)', 'at ./index.rsh:241:13:application call to [unknown function] (defined at: ./index.rsh:241:13:function exp)'],
          msg: 'out',
          who: 'claimOSpr'
          });
        }
      else {
        }
      
      const v22396 = v8621;
      const v22398 = v8599;
      const v22399 = v8621.totST;
      const v22400 = v8621.totBT;
      const v22401 = v8621.distrNum;
      const v22402 = v8621.saleLocked;
      const v22403 = v8621.docHash;
      const v22404 = v22403[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v22405 = v8621.cv;
      const v22406 = v22405[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v22407 = v22405[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v22408 = v8599[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v22409 = v22408[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v22410 = stdlib.cast("UInt", "UInt256", v22409, false);
      const v22411 = v8621.ctcMan;
      const v22412 = v8621.saleDetails;
      const v22413 = v22412.qty;
      const v22414 = v22412.price;
      const v22415 = v22412.sold;
      const v22416 = v22412.status;
      const v22417 = v22412.cumProceeds;
      return;
      
      break;
      }
    case 'createOS0_704': {
      const v8843 = v3772[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9567 = v3772[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10291 = v3772[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v11015 = v3772[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11739 = v3772[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12463 = v3772[1];
      return;
      break;
      }
    }
  
  
  };
export async function _createOS3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _createOS3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _createOS3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([ctc11]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc13]);
  const ctc27 = stdlib.T_Tuple([ctc9]);
  const ctc28 = stdlib.T_Tuple([ctc6]);
  const ctc29 = stdlib.T_Tuple([]);
  const ctc30 = stdlib.T_Tuple([ctc1]);
  const ctc31 = stdlib.T_Tuple([ctc17]);
  const ctc32 = stdlib.T_Data({
    aST0_704: ctc25,
    addCoopId0_704: ctc26,
    addWL0_704: ctc27,
    buyOS0_704: ctc28,
    cBT0_704: ctc29,
    cCM0_704: ctc27,
    claimOSpr0_704: ctc29,
    createOS0_704: ctc15,
    dBT0_704: ctc30,
    docHash0_704: ctc31,
    endOS0_704: ctc29,
    optIn0_704: ctc29,
    remWL0_704: ctc27
    });
  const ctc33 = stdlib.T_Struct([['qty', ctc6], ['price', ctc6], ['sold', ctc6], ['status', ctc11], ['cumProceeds', ctc6]]);
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3376 = ctc.selfAddress();
  const v3378 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:13:function exp)', 'at ./index.rsh:121:35:application call to "runcreateOS0_704" (defined at: ./index.rsh:152:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'createOS'
    });
  const v3379 = v3378[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3380 = v3378[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3384 = stdlib.addressEq(v3376, v2941);
  const v3386 = stdlib.addressEq(v3376, v3360);
  const v3387 = v3384 ? true : v3386;
  stdlib.assert(v3387, {
    at: './index.rsh:156:23:application',
    fs: ['at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:27:function exp)', 'at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:13:function exp)', 'at ./index.rsh:121:35:application call to "runcreateOS0_704" (defined at: ./index.rsh:152:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'createOS'
    });
  const v3388 = stdlib.gt(v3379, stdlib.checkedBigNumberify('./index.rsh:157:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3388, {
    at: './index.rsh:157:23:application',
    fs: ['at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:27:function exp)', 'at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:13:function exp)', 'at ./index.rsh:121:35:application call to "runcreateOS0_704" (defined at: ./index.rsh:152:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must sell at least 1 share token',
    who: 'createOS'
    });
  const v3389 = stdlib.gt(v3380, stdlib.checkedBigNumberify('./index.rsh:158:32:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3389, {
    at: './index.rsh:158:23:application',
    fs: ['at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:27:function exp)', 'at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:13:function exp)', 'at ./index.rsh:121:35:application call to "runcreateOS0_704" (defined at: ./index.rsh:152:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'price must be greater than 0',
    who: 'createOS'
    });
  const v3392 = 'activ';
  const v3393 = stdlib.digest(ctc24, [v3369]);
  const v3395 = stdlib.digest(ctc24, [v3392]);
  const v3396 = stdlib.digestEq(v3393, v3395);
  const v3397 = v3396 ? false : true;
  stdlib.assert(v3397, {
    at: './index.rsh:159:23:application',
    fs: ['at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:27:function exp)', 'at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:13:function exp)', 'at ./index.rsh:121:35:application call to "runcreateOS0_704" (defined at: ./index.rsh:152:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'sale must not be active',
    who: 'createOS'
    });
  const v3402 = ['createOS0_704', v3378];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370, v3402],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc32],
    pay: [stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:162:28:decimal', stdlib.UInt_max, '0'), v2945]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
      
      switch (v3772[0]) {
        case 'aST0_704': {
          const v3775 = v3772[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4499 = v3772[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5223 = v3772[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5947 = v3772[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6671 = v3772[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7395 = v3772[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8119 = v3772[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8843 = v3772[1];
          sim_r.txns.push({
            kind: 'api',
            who: "createOS"
            });
          ;
          const v8968 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v8969 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v8970 = [v3357, v8968, v8969];
          const v8971 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v8970);
          ;
          const v9358 = v8843[stdlib.checkedBigNumberify('./index.rsh:152:13:spread', stdlib.UInt_max, '0')];
          const v9359 = v8843[stdlib.checkedBigNumberify('./index.rsh:152:13:spread', stdlib.UInt_max, '1')];
          const v9372 = 'activ';
          const v9377 = {
            cumProceeds: v3370,
            price: v9359,
            qty: v9358,
            sold: v3368,
            status: v9372
            };
          const v9379 = v3270.currDistr;
          const v9381 = v3270.distrHis;
          const v9382 = v3270.distrIndex;
          const v9389 = v3270.wlArr;
          const v9390 = v3270.wlIndex;
          const v9393 = {
            ctcMan: v3360,
            currDistr: v9379,
            cv: v3351,
            distrHis: v9381,
            distrIndex: v9382,
            distrNum: v3323,
            docHash: v3347,
            saleDetails: v9377,
            saleLocked: v3325,
            totBT: v3322,
            totST: v3321,
            wlArr: v9389,
            wlIndex: v9390
            };
          const v9395 = {
            cumProceeds: v3370,
            price: v9359,
            qty: v9358,
            sold: v3368,
            status: v9372
            };
          const v9396 = await txn1.getOutput('createOS', 'v9395', ctc33, v9395);
          
          const v22956 = v9393;
          const v22958 = v8971;
          const v22959 = v9393.totST;
          const v22960 = v9393.totBT;
          const v22961 = v9393.distrNum;
          const v22962 = v9393.saleLocked;
          const v22963 = v9393.docHash;
          const v22964 = v22963[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v22965 = v9393.cv;
          const v22966 = v22965[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v22967 = v22965[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v22968 = v8971[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v22969 = v22968[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v22970 = stdlib.cast("UInt", "UInt256", v22969, false);
          const v22971 = v9393.ctcMan;
          const v22972 = v9393.saleDetails;
          const v22973 = v22972.qty;
          const v22974 = v22972.price;
          const v22975 = v22972.sold;
          const v22976 = v22972.status;
          const v22977 = v22972.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'dBT0_704': {
          const v9567 = v3772[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10291 = v3772[1];
          
          break;
          }
        case 'endOS0_704': {
          const v11015 = v3772[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11739 = v3772[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12463 = v3772[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc32],
    waitIfNotPresent: false
    }));
  const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
  switch (v3772[0]) {
    case 'aST0_704': {
      const v3775 = v3772[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4499 = v3772[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5223 = v3772[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5947 = v3772[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6671 = v3772[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7395 = v3772[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8119 = v3772[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8843 = v3772[1];
      undefined /* setApiDetails */;
      ;
      const v8968 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v8969 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v8970 = [v3357, v8968, v8969];
      const v8971 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v8970);
      ;
      const v9358 = v8843[stdlib.checkedBigNumberify('./index.rsh:152:13:spread', stdlib.UInt_max, '0')];
      const v9359 = v8843[stdlib.checkedBigNumberify('./index.rsh:152:13:spread', stdlib.UInt_max, '1')];
      const v9360 = stdlib.addressEq(v3771, v2941);
      const v9362 = stdlib.addressEq(v3771, v3360);
      const v9363 = v9360 ? true : v9362;
      stdlib.assert(v9363, {
        at: './index.rsh:165:24:application',
        fs: ['at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'createOS'
        });
      const v9364 = stdlib.gt(v9358, stdlib.checkedBigNumberify('./index.rsh:166:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v9364, {
        at: './index.rsh:166:24:application',
        fs: ['at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:13:function exp)'],
        msg: 'you must sell at least 1 share token',
        who: 'createOS'
        });
      const v9365 = stdlib.gt(v9359, stdlib.checkedBigNumberify('./index.rsh:167:33:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v9365, {
        at: './index.rsh:167:24:application',
        fs: ['at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:13:function exp)'],
        msg: 'price must be greater than 0',
        who: 'createOS'
        });
      const v9372 = 'activ';
      const v9377 = {
        cumProceeds: v3370,
        price: v9359,
        qty: v9358,
        sold: v3368,
        status: v9372
        };
      const v9379 = v3270.currDistr;
      const v9381 = v3270.distrHis;
      const v9382 = v3270.distrIndex;
      const v9389 = v3270.wlArr;
      const v9390 = v3270.wlIndex;
      const v9393 = {
        ctcMan: v3360,
        currDistr: v9379,
        cv: v3351,
        distrHis: v9381,
        distrIndex: v9382,
        distrNum: v3323,
        docHash: v3347,
        saleDetails: v9377,
        saleLocked: v3325,
        totBT: v3322,
        totST: v3321,
        wlArr: v9389,
        wlIndex: v9390
        };
      const v9395 = {
        cumProceeds: v3370,
        price: v9359,
        qty: v9358,
        sold: v3368,
        status: v9372
        };
      const v9396 = await txn1.getOutput('createOS', 'v9395', ctc33, v9395);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v8843, v9396), {
          at: './index.rsh:153:13:application',
          fs: ['at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:13:function exp)', 'at ./index.rsh:172:20:application call to "res" (defined at: ./index.rsh:164:13:function exp)', 'at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:13:function exp)'],
          msg: 'out',
          who: 'createOS'
          });
        }
      else {
        }
      
      const v22956 = v9393;
      const v22958 = v8971;
      const v22959 = v9393.totST;
      const v22960 = v9393.totBT;
      const v22961 = v9393.distrNum;
      const v22962 = v9393.saleLocked;
      const v22963 = v9393.docHash;
      const v22964 = v22963[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v22965 = v9393.cv;
      const v22966 = v22965[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v22967 = v22965[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v22968 = v8971[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v22969 = v22968[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v22970 = stdlib.cast("UInt", "UInt256", v22969, false);
      const v22971 = v9393.ctcMan;
      const v22972 = v9393.saleDetails;
      const v22973 = v22972.qty;
      const v22974 = v22972.price;
      const v22975 = v22972.sold;
      const v22976 = v22972.status;
      const v22977 = v22972.cumProceeds;
      return;
      
      break;
      }
    case 'dBT0_704': {
      const v9567 = v3772[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10291 = v3772[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v11015 = v3772[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11739 = v3772[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12463 = v3772[1];
      return;
      break;
      }
    }
  
  
  };
export async function _dBT3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _dBT3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _dBT3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([ctc1]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc13]);
  const ctc27 = stdlib.T_Tuple([ctc9]);
  const ctc28 = stdlib.T_Tuple([ctc6]);
  const ctc29 = stdlib.T_Tuple([]);
  const ctc30 = stdlib.T_Tuple([ctc17]);
  const ctc31 = stdlib.T_Data({
    aST0_704: ctc25,
    addCoopId0_704: ctc26,
    addWL0_704: ctc27,
    buyOS0_704: ctc28,
    cBT0_704: ctc29,
    cCM0_704: ctc27,
    claimOSpr0_704: ctc29,
    createOS0_704: ctc15,
    dBT0_704: ctc24,
    docHash0_704: ctc30,
    endOS0_704: ctc29,
    optIn0_704: ctc29,
    remWL0_704: ctc27
    });
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3558 = ctc.selfAddress();
  const v3560 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:376:13:application call to [unknown function] (defined at: ./index.rsh:376:13:function exp)', 'at ./index.rsh:121:35:application call to "rundBT0_704" (defined at: ./index.rsh:373:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'dBT'
    });
  const v3561 = v3560[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3564 = stdlib.addressEq(v3558, v2941);
  const v3566 = stdlib.addressEq(v3558, v3360);
  const v3567 = v3564 ? true : v3566;
  stdlib.assert(v3567, {
    at: './index.rsh:377:23:application',
    fs: ['at ./index.rsh:376:13:application call to [unknown function] (defined at: ./index.rsh:376:20:function exp)', 'at ./index.rsh:376:13:application call to [unknown function] (defined at: ./index.rsh:376:13:function exp)', 'at ./index.rsh:121:35:application call to "rundBT0_704" (defined at: ./index.rsh:373:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'dBT'
    });
  const v3568 = stdlib.cast("UInt256", "UInt", v3561, false);
  const v3569 = stdlib.gt(v3568, stdlib.checkedBigNumberify('./index.rsh:378:36:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3569, {
    at: './index.rsh:378:23:application',
    fs: ['at ./index.rsh:376:13:application call to [unknown function] (defined at: ./index.rsh:376:20:function exp)', 'at ./index.rsh:376:13:application call to [unknown function] (defined at: ./index.rsh:376:13:function exp)', 'at ./index.rsh:121:35:application call to "rundBT0_704" (defined at: ./index.rsh:373:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v3573 = ['dBT0_704', v3560];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370, v3573],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:382:24:decimal', stdlib.UInt_max, '0'), [[v3568, v2945]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
      
      switch (v3772[0]) {
        case 'aST0_704': {
          const v3775 = v3772[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4499 = v3772[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5223 = v3772[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5947 = v3772[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6671 = v3772[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7395 = v3772[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8119 = v3772[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8843 = v3772[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9567 = v3772[1];
          sim_r.txns.push({
            kind: 'api',
            who: "dBT"
            });
          const v9640 = v9567[stdlib.checkedBigNumberify('./index.rsh:373:13:spread', stdlib.UInt_max, '0')];
          const v9641 = stdlib.cast("UInt256", "UInt", v9640, false);
          ;
          const v9689 = stdlib.add(v3357, v9641);
          const v9692 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v9693 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v9694 = [v9689, v9692, v9693];
          const v9695 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v9694);
          sim_r.txns.push({
            amt: v9641,
            kind: 'to',
            tok: v2945
            });
          const v10148 = stdlib.add256(v3322, v9640);
          const v10152 = v3270.distrHis;
          const v10153 = v3270.distrIndex;
          const v10160 = v3270.wlArr;
          const v10161 = v3270.wlIndex;
          const v10164 = stdlib.add256(v3323, stdlib.checkedBigNumberify('./index.rsh:389:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v10166 = {
            ctcMan: v3360,
            currDistr: v9640,
            cv: v3351,
            distrHis: v10152,
            distrIndex: v10153,
            distrNum: v10164,
            docHash: v3347,
            saleDetails: v3365,
            saleLocked: v3325,
            totBT: v10148,
            totST: v3321,
            wlArr: v10160,
            wlIndex: v10161
            };
          const v10167 = true;
          const v10168 = await txn1.getOutput('dBT', 'v10167', ctc3, v10167);
          
          const v23516 = v10166;
          const v23518 = v9695;
          const v23519 = v10166.totST;
          const v23520 = v10166.totBT;
          const v23521 = v10166.distrNum;
          const v23522 = v10166.saleLocked;
          const v23523 = v10166.docHash;
          const v23524 = v23523[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v23525 = v10166.cv;
          const v23526 = v23525[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v23527 = v23525[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v23528 = v9695[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v23529 = v23528[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v23530 = stdlib.cast("UInt", "UInt256", v23529, false);
          const v23531 = v10166.ctcMan;
          const v23532 = v10166.saleDetails;
          const v23533 = v23532.qty;
          const v23534 = v23532.price;
          const v23535 = v23532.sold;
          const v23536 = v23532.status;
          const v23537 = v23532.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'docHash0_704': {
          const v10291 = v3772[1];
          
          break;
          }
        case 'endOS0_704': {
          const v11015 = v3772[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11739 = v3772[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12463 = v3772[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
  switch (v3772[0]) {
    case 'aST0_704': {
      const v3775 = v3772[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4499 = v3772[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5223 = v3772[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5947 = v3772[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6671 = v3772[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7395 = v3772[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8119 = v3772[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8843 = v3772[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9567 = v3772[1];
      undefined /* setApiDetails */;
      const v9640 = v9567[stdlib.checkedBigNumberify('./index.rsh:373:13:spread', stdlib.UInt_max, '0')];
      const v9641 = stdlib.cast("UInt256", "UInt", v9640, false);
      ;
      const v9689 = stdlib.add(v3357, v9641);
      const v9692 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v9693 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v9694 = [v9689, v9692, v9693];
      const v9695 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v9694);
      ;
      const v10141 = stdlib.addressEq(v3771, v2941);
      const v10143 = stdlib.addressEq(v3771, v3360);
      const v10144 = v10141 ? true : v10143;
      stdlib.assert(v10144, {
        at: './index.rsh:385:24:application',
        fs: ['at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'dBT'
        });
      const v10146 = stdlib.gt(v9641, stdlib.checkedBigNumberify('./index.rsh:386:37:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v10146, {
        at: './index.rsh:386:24:application',
        fs: ['at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v10148 = stdlib.add256(v3322, v9640);
      const v10152 = v3270.distrHis;
      const v10153 = v3270.distrIndex;
      const v10160 = v3270.wlArr;
      const v10161 = v3270.wlIndex;
      const v10164 = stdlib.add256(v3323, stdlib.checkedBigNumberify('./index.rsh:389:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v10166 = {
        ctcMan: v3360,
        currDistr: v9640,
        cv: v3351,
        distrHis: v10152,
        distrIndex: v10153,
        distrNum: v10164,
        docHash: v3347,
        saleDetails: v3365,
        saleLocked: v3325,
        totBT: v10148,
        totST: v3321,
        wlArr: v10160,
        wlIndex: v10161
        };
      const v10167 = true;
      const v10168 = await txn1.getOutput('dBT', 'v10167', ctc3, v10167);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v9567, v10168), {
          at: './index.rsh:374:13:application',
          fs: ['at ./index.rsh:374:13:application call to [unknown function] (defined at: ./index.rsh:374:13:function exp)', 'at ./index.rsh:392:20:application call to "res" (defined at: ./index.rsh:384:13:function exp)', 'at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)'],
          msg: 'out',
          who: 'dBT'
          });
        }
      else {
        }
      
      const v23516 = v10166;
      const v23518 = v9695;
      const v23519 = v10166.totST;
      const v23520 = v10166.totBT;
      const v23521 = v10166.distrNum;
      const v23522 = v10166.saleLocked;
      const v23523 = v10166.docHash;
      const v23524 = v23523[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v23525 = v10166.cv;
      const v23526 = v23525[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v23527 = v23525[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v23528 = v9695[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v23529 = v23528[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v23530 = stdlib.cast("UInt", "UInt256", v23529, false);
      const v23531 = v10166.ctcMan;
      const v23532 = v10166.saleDetails;
      const v23533 = v23532.qty;
      const v23534 = v23532.price;
      const v23535 = v23532.sold;
      const v23536 = v23532.status;
      const v23537 = v23532.cumProceeds;
      return;
      
      break;
      }
    case 'docHash0_704': {
      const v10291 = v3772[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v11015 = v3772[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11739 = v3772[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12463 = v3772[1];
      return;
      break;
      }
    }
  
  
  };
export async function _docHash3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _docHash3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _docHash3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([ctc17]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc13]);
  const ctc27 = stdlib.T_Tuple([ctc9]);
  const ctc28 = stdlib.T_Tuple([ctc6]);
  const ctc29 = stdlib.T_Tuple([]);
  const ctc30 = stdlib.T_Tuple([ctc1]);
  const ctc31 = stdlib.T_Data({
    aST0_704: ctc25,
    addCoopId0_704: ctc26,
    addWL0_704: ctc27,
    buyOS0_704: ctc28,
    cBT0_704: ctc29,
    cCM0_704: ctc27,
    claimOSpr0_704: ctc29,
    createOS0_704: ctc15,
    dBT0_704: ctc30,
    docHash0_704: ctc24,
    endOS0_704: ctc29,
    optIn0_704: ctc29,
    remWL0_704: ctc27
    });
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3469 = ctc.selfAddress();
  const v3471 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)', 'at ./index.rsh:121:35:application call to "rundocHash0_704" (defined at: ./index.rsh:252:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'docHash'
    });
  const v3477 = stdlib.eq(v3349, stdlib.checkedBigNumberify('./index.rsh:257:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3477, {
    at: './index.rsh:257:23:application',
    fs: ['at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:18:function exp)', 'at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)', 'at ./index.rsh:121:35:application call to "rundocHash0_704" (defined at: ./index.rsh:252:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'hash is immutable',
    who: 'docHash'
    });
  const v3478 = stdlib.addressEq(v3469, v2941);
  const v3480 = stdlib.addressEq(v3469, v3360);
  const v3481 = v3478 ? true : v3480;
  stdlib.assert(v3481, {
    at: './index.rsh:258:23:application',
    fs: ['at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:18:function exp)', 'at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)', 'at ./index.rsh:121:35:application call to "rundocHash0_704" (defined at: ./index.rsh:252:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'only creator or contract manager can change hash',
    who: 'docHash'
    });
  const v3485 = ['docHash0_704', v3471];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370, v3485],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:262:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:262:26:decimal', stdlib.UInt_max, '0'), v2945]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
      
      switch (v3772[0]) {
        case 'aST0_704': {
          const v3775 = v3772[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4499 = v3772[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5223 = v3772[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5947 = v3772[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6671 = v3772[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7395 = v3772[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8119 = v3772[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8843 = v3772[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9567 = v3772[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10291 = v3772[1];
          sim_r.txns.push({
            kind: 'api',
            who: "docHash"
            });
          ;
          const v10416 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v10417 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v10418 = [v3357, v10416, v10417];
          const v10419 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v10418);
          ;
          const v10902 = v10291[stdlib.checkedBigNumberify('./index.rsh:252:13:spread', stdlib.UInt_max, '0')];
          const v10910 = stdlib.add(v3349, stdlib.checkedBigNumberify('./index.rsh:268:76:decimal', stdlib.UInt_max, '1'));
          const v10913 = v3270.currDistr;
          const v10915 = v3270.distrHis;
          const v10916 = v3270.distrIndex;
          const v10923 = v3270.wlArr;
          const v10924 = v3270.wlIndex;
          const v10925 = [v10902, v10910, v3773];
          const v10926 = {
            ctcMan: v3360,
            currDistr: v10913,
            cv: v3351,
            distrHis: v10915,
            distrIndex: v10916,
            distrNum: v3323,
            docHash: v10925,
            saleDetails: v3365,
            saleLocked: v3325,
            totBT: v3322,
            totST: v3321,
            wlArr: v10923,
            wlIndex: v10924
            };
          const v10927 = true;
          const v10928 = await txn1.getOutput('docHash', 'v10927', ctc3, v10927);
          
          const v24076 = v10926;
          const v24078 = v10419;
          const v24079 = v10926.totST;
          const v24080 = v10926.totBT;
          const v24081 = v10926.distrNum;
          const v24082 = v10926.saleLocked;
          const v24083 = v10926.docHash;
          const v24084 = v24083[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v24085 = v10926.cv;
          const v24086 = v24085[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v24087 = v24085[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v24088 = v10419[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v24089 = v24088[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v24090 = stdlib.cast("UInt", "UInt256", v24089, false);
          const v24091 = v10926.ctcMan;
          const v24092 = v10926.saleDetails;
          const v24093 = v24092.qty;
          const v24094 = v24092.price;
          const v24095 = v24092.sold;
          const v24096 = v24092.status;
          const v24097 = v24092.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'endOS0_704': {
          const v11015 = v3772[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11739 = v3772[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12463 = v3772[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
  switch (v3772[0]) {
    case 'aST0_704': {
      const v3775 = v3772[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4499 = v3772[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5223 = v3772[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5947 = v3772[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6671 = v3772[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7395 = v3772[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8119 = v3772[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8843 = v3772[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9567 = v3772[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10291 = v3772[1];
      undefined /* setApiDetails */;
      ;
      const v10416 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v10417 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v10418 = [v3357, v10416, v10417];
      const v10419 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v10418);
      ;
      const v10902 = v10291[stdlib.checkedBigNumberify('./index.rsh:252:13:spread', stdlib.UInt_max, '0')];
      const v10905 = stdlib.eq(v3349, stdlib.checkedBigNumberify('./index.rsh:266:32:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v10905, {
        at: './index.rsh:266:24:application',
        fs: ['at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:13:function exp)'],
        msg: 'hash is immutable',
        who: 'docHash'
        });
      const v10906 = stdlib.addressEq(v3771, v2941);
      const v10908 = stdlib.addressEq(v3771, v3360);
      const v10909 = v10906 ? true : v10908;
      stdlib.assert(v10909, {
        at: './index.rsh:267:24:application',
        fs: ['at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:13:function exp)'],
        msg: 'only creator or contract manager can change hash',
        who: 'docHash'
        });
      const v10910 = stdlib.add(v3349, stdlib.checkedBigNumberify('./index.rsh:268:76:decimal', stdlib.UInt_max, '1'));
      const v10913 = v3270.currDistr;
      const v10915 = v3270.distrHis;
      const v10916 = v3270.distrIndex;
      const v10923 = v3270.wlArr;
      const v10924 = v3270.wlIndex;
      const v10925 = [v10902, v10910, v3773];
      const v10926 = {
        ctcMan: v3360,
        currDistr: v10913,
        cv: v3351,
        distrHis: v10915,
        distrIndex: v10916,
        distrNum: v3323,
        docHash: v10925,
        saleDetails: v3365,
        saleLocked: v3325,
        totBT: v3322,
        totST: v3321,
        wlArr: v10923,
        wlIndex: v10924
        };
      const v10927 = true;
      const v10928 = await txn1.getOutput('docHash', 'v10927', ctc3, v10927);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v10291, v10928), {
          at: './index.rsh:253:13:application',
          fs: ['at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)', 'at ./index.rsh:269:20:application call to "res" (defined at: ./index.rsh:264:13:function exp)', 'at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:13:function exp)'],
          msg: 'out',
          who: 'docHash'
          });
        }
      else {
        }
      
      const v24076 = v10926;
      const v24078 = v10419;
      const v24079 = v10926.totST;
      const v24080 = v10926.totBT;
      const v24081 = v10926.distrNum;
      const v24082 = v10926.saleLocked;
      const v24083 = v10926.docHash;
      const v24084 = v24083[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v24085 = v10926.cv;
      const v24086 = v24085[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v24087 = v24085[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v24088 = v10419[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v24089 = v24088[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v24090 = stdlib.cast("UInt", "UInt256", v24089, false);
      const v24091 = v10926.ctcMan;
      const v24092 = v10926.saleDetails;
      const v24093 = v24092.qty;
      const v24094 = v24092.price;
      const v24095 = v24092.sold;
      const v24096 = v24092.status;
      const v24097 = v24092.cumProceeds;
      return;
      
      break;
      }
    case 'endOS0_704': {
      const v11015 = v3772[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11739 = v3772[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12463 = v3772[1];
      return;
      break;
      }
    }
  
  
  };
export async function _endOS3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _endOS3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _endOS3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([]);
  const ctc25 = stdlib.T_Tuple([ctc11]);
  const ctc26 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc27 = stdlib.T_Tuple([ctc13]);
  const ctc28 = stdlib.T_Tuple([ctc9]);
  const ctc29 = stdlib.T_Tuple([ctc6]);
  const ctc30 = stdlib.T_Tuple([ctc1]);
  const ctc31 = stdlib.T_Tuple([ctc17]);
  const ctc32 = stdlib.T_Data({
    aST0_704: ctc26,
    addCoopId0_704: ctc27,
    addWL0_704: ctc28,
    buyOS0_704: ctc29,
    cBT0_704: ctc24,
    cCM0_704: ctc28,
    claimOSpr0_704: ctc24,
    createOS0_704: ctc15,
    dBT0_704: ctc30,
    docHash0_704: ctc31,
    endOS0_704: ctc24,
    optIn0_704: ctc24,
    remWL0_704: ctc28
    });
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3404 = ctc.selfAddress();
  const v3406 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)', 'at ./index.rsh:121:35:application call to "runendOS0_704" (defined at: ./index.rsh:175:14:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'endOS'
    });
  const v3408 = stdlib.addressEq(v3404, v2941);
  const v3410 = stdlib.addressEq(v3404, v3360);
  const v3411 = v3408 ? true : v3410;
  stdlib.assert(v3411, {
    at: './index.rsh:179:23:application',
    fs: ['at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:17:function exp)', 'at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)', 'at ./index.rsh:121:35:application call to "runendOS0_704" (defined at: ./index.rsh:175:14:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'endOS'
    });
  const v3414 = 'activ';
  const v3415 = stdlib.digest(ctc25, [v3369]);
  const v3417 = stdlib.digest(ctc25, [v3414]);
  const v3418 = stdlib.digestEq(v3415, v3417);
  stdlib.assert(v3418, {
    at: './index.rsh:180:23:application',
    fs: ['at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:17:function exp)', 'at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)', 'at ./index.rsh:121:35:application call to "runendOS0_704" (defined at: ./index.rsh:175:14:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'sale must be active',
    who: 'endOS'
    });
  const v3421 = ['endOS0_704', v3406];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370, v3421],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc32],
    pay: [stdlib.checkedBigNumberify('./index.rsh:183:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:183:25:decimal', stdlib.UInt_max, '0'), v2945]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
      
      switch (v3772[0]) {
        case 'aST0_704': {
          const v3775 = v3772[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4499 = v3772[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5223 = v3772[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5947 = v3772[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6671 = v3772[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7395 = v3772[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8119 = v3772[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8843 = v3772[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9567 = v3772[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10291 = v3772[1];
          
          break;
          }
        case 'endOS0_704': {
          const v11015 = v3772[1];
          sim_r.txns.push({
            kind: 'api',
            who: "endOS"
            });
          ;
          const v11140 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v11141 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v11142 = [v3357, v11140, v11141];
          const v11143 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v11142);
          ;
          const v11686 = {
            cumProceeds: v3370,
            price: v3367,
            qty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            sold: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            status: v3266
            };
          const v11688 = v3270.currDistr;
          const v11690 = v3270.distrHis;
          const v11691 = v3270.distrIndex;
          const v11698 = v3270.wlArr;
          const v11699 = v3270.wlIndex;
          const v11702 = {
            ctcMan: v3360,
            currDistr: v11688,
            cv: v3351,
            distrHis: v11690,
            distrIndex: v11691,
            distrNum: v3323,
            docHash: v3347,
            saleDetails: v11686,
            saleLocked: v3325,
            totBT: v3322,
            totST: v3321,
            wlArr: v11698,
            wlIndex: v11699
            };
          const v11703 = true;
          const v11704 = await txn1.getOutput('endOS', 'v11703', ctc3, v11703);
          
          const v24636 = v11702;
          const v24638 = v11143;
          const v24639 = v11702.totST;
          const v24640 = v11702.totBT;
          const v24641 = v11702.distrNum;
          const v24642 = v11702.saleLocked;
          const v24643 = v11702.docHash;
          const v24644 = v24643[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v24645 = v11702.cv;
          const v24646 = v24645[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v24647 = v24645[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v24648 = v11143[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v24649 = v24648[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v24650 = stdlib.cast("UInt", "UInt256", v24649, false);
          const v24651 = v11702.ctcMan;
          const v24652 = v11702.saleDetails;
          const v24653 = v24652.qty;
          const v24654 = v24652.price;
          const v24655 = v24652.sold;
          const v24656 = v24652.status;
          const v24657 = v24652.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'optIn0_704': {
          const v11739 = v3772[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12463 = v3772[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc32],
    waitIfNotPresent: false
    }));
  const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
  switch (v3772[0]) {
    case 'aST0_704': {
      const v3775 = v3772[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4499 = v3772[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5223 = v3772[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5947 = v3772[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6671 = v3772[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7395 = v3772[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8119 = v3772[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8843 = v3772[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9567 = v3772[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10291 = v3772[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v11015 = v3772[1];
      undefined /* setApiDetails */;
      ;
      const v11140 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v11141 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v11142 = [v3357, v11140, v11141];
      const v11143 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v11142);
      ;
      const v11664 = stdlib.addressEq(v3771, v2941);
      const v11666 = stdlib.addressEq(v3771, v3360);
      const v11667 = v11664 ? true : v11666;
      stdlib.assert(v11667, {
        at: './index.rsh:186:24:application',
        fs: ['at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'endOS'
        });
      const v11670 = 'activ';
      const v11671 = stdlib.digest(ctc25, [v3369]);
      const v11673 = stdlib.digest(ctc25, [v11670]);
      const v11674 = stdlib.digestEq(v11671, v11673);
      stdlib.assert(v11674, {
        at: './index.rsh:187:24:application',
        fs: ['at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)'],
        msg: 'sale must be active',
        who: 'endOS'
        });
      const v11686 = {
        cumProceeds: v3370,
        price: v3367,
        qty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        sold: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        status: v3266
        };
      const v11688 = v3270.currDistr;
      const v11690 = v3270.distrHis;
      const v11691 = v3270.distrIndex;
      const v11698 = v3270.wlArr;
      const v11699 = v3270.wlIndex;
      const v11702 = {
        ctcMan: v3360,
        currDistr: v11688,
        cv: v3351,
        distrHis: v11690,
        distrIndex: v11691,
        distrNum: v3323,
        docHash: v3347,
        saleDetails: v11686,
        saleLocked: v3325,
        totBT: v3322,
        totST: v3321,
        wlArr: v11698,
        wlIndex: v11699
        };
      const v11703 = true;
      const v11704 = await txn1.getOutput('endOS', 'v11703', ctc3, v11703);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v11015, v11704), {
          at: './index.rsh:176:13:application',
          fs: ['at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:13:function exp)', 'at ./index.rsh:192:20:application call to "res" (defined at: ./index.rsh:185:13:function exp)', 'at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)'],
          msg: 'out',
          who: 'endOS'
          });
        }
      else {
        }
      
      const v24636 = v11702;
      const v24638 = v11143;
      const v24639 = v11702.totST;
      const v24640 = v11702.totBT;
      const v24641 = v11702.distrNum;
      const v24642 = v11702.saleLocked;
      const v24643 = v11702.docHash;
      const v24644 = v24643[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v24645 = v11702.cv;
      const v24646 = v24645[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v24647 = v24645[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v24648 = v11143[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v24649 = v24648[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v24650 = stdlib.cast("UInt", "UInt256", v24649, false);
      const v24651 = v11702.ctcMan;
      const v24652 = v11702.saleDetails;
      const v24653 = v24652.qty;
      const v24654 = v24652.price;
      const v24655 = v24652.sold;
      const v24656 = v24652.status;
      const v24657 = v24652.cumProceeds;
      return;
      
      break;
      }
    case 'optIn0_704': {
      const v11739 = v3772[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12463 = v3772[1];
      return;
      break;
      }
    }
  
  
  };
export async function _optIn3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _optIn3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _optIn3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc13]);
  const ctc27 = stdlib.T_Tuple([ctc9]);
  const ctc28 = stdlib.T_Tuple([ctc6]);
  const ctc29 = stdlib.T_Tuple([ctc1]);
  const ctc30 = stdlib.T_Tuple([ctc17]);
  const ctc31 = stdlib.T_Data({
    aST0_704: ctc25,
    addCoopId0_704: ctc26,
    addWL0_704: ctc27,
    buyOS0_704: ctc28,
    cBT0_704: ctc24,
    cCM0_704: ctc27,
    claimOSpr0_704: ctc24,
    createOS0_704: ctc15,
    dBT0_704: ctc29,
    docHash0_704: ctc30,
    endOS0_704: ctc24,
    optIn0_704: ctc24,
    remWL0_704: ctc27
    });
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3541 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:349:13:application call to [unknown function] (defined at: ./index.rsh:349:13:function exp)', 'at ./index.rsh:121:35:application call to "runoptIn0_704" (defined at: ./index.rsh:346:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'optIn'
    });
  const v3545 = ['optIn0_704', v3541];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370, v3545],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:352:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:352:25:decimal', stdlib.UInt_max, '0'), v2945]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
      
      switch (v3772[0]) {
        case 'aST0_704': {
          const v3775 = v3772[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4499 = v3772[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5223 = v3772[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5947 = v3772[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6671 = v3772[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7395 = v3772[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8119 = v3772[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8843 = v3772[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9567 = v3772[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10291 = v3772[1];
          
          break;
          }
        case 'endOS0_704': {
          const v11015 = v3772[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11739 = v3772[1];
          sim_r.txns.push({
            kind: 'api',
            who: "optIn"
            });
          ;
          const v11864 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v11865 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v11866 = [v3357, v11864, v11865];
          const v11867 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v11866);
          ;
          await stdlib.simMapSet(sim_r, 6, v3771, true);
          const v12441 = true;
          const v12442 = await txn1.getOutput('optIn', 'v12441', ctc3, v12441);
          
          const v25196 = v3270;
          const v25198 = v11867;
          const v25199 = v3270.totST;
          const v25200 = v3270.totBT;
          const v25201 = v3270.distrNum;
          const v25202 = v3270.saleLocked;
          const v25203 = v3270.docHash;
          const v25204 = v25203[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v25205 = v3270.cv;
          const v25206 = v25205[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v25207 = v25205[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v25208 = v11867[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v25209 = v25208[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v25210 = stdlib.cast("UInt", "UInt256", v25209, false);
          const v25211 = v3270.ctcMan;
          const v25212 = v3270.saleDetails;
          const v25213 = v25212.qty;
          const v25214 = v25212.price;
          const v25215 = v25212.sold;
          const v25216 = v25212.status;
          const v25217 = v25212.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        case 'remWL0_704': {
          const v12463 = v3772[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
  switch (v3772[0]) {
    case 'aST0_704': {
      const v3775 = v3772[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4499 = v3772[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5223 = v3772[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5947 = v3772[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6671 = v3772[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7395 = v3772[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8119 = v3772[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8843 = v3772[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9567 = v3772[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10291 = v3772[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v11015 = v3772[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11739 = v3772[1];
      undefined /* setApiDetails */;
      ;
      const v11864 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v11865 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v11866 = [v3357, v11864, v11865];
      const v11867 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v11866);
      ;
      await stdlib.mapSet(map6, v3771, true);
      const v12441 = true;
      const v12442 = await txn1.getOutput('optIn', 'v12441', ctc3, v12441);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v11739, v12442), {
          at: './index.rsh:347:13:application',
          fs: ['at ./index.rsh:347:13:application call to [unknown function] (defined at: ./index.rsh:347:13:function exp)', 'at ./index.rsh:356:20:application call to "res" (defined at: ./index.rsh:354:13:function exp)', 'at ./index.rsh:354:13:application call to [unknown function] (defined at: ./index.rsh:354:13:function exp)'],
          msg: 'out',
          who: 'optIn'
          });
        }
      else {
        }
      
      const v25196 = v3270;
      const v25198 = v11867;
      const v25199 = v3270.totST;
      const v25200 = v3270.totBT;
      const v25201 = v3270.distrNum;
      const v25202 = v3270.saleLocked;
      const v25203 = v3270.docHash;
      const v25204 = v25203[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v25205 = v3270.cv;
      const v25206 = v25205[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v25207 = v25205[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v25208 = v11867[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v25209 = v25208[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v25210 = stdlib.cast("UInt", "UInt256", v25209, false);
      const v25211 = v3270.ctcMan;
      const v25212 = v3270.saleDetails;
      const v25213 = v25212.qty;
      const v25214 = v25212.price;
      const v25215 = v25212.sold;
      const v25216 = v25212.status;
      const v25217 = v25212.cumProceeds;
      return;
      
      break;
      }
    case 'remWL0_704': {
      const v12463 = v3772[1];
      return;
      break;
      }
    }
  
  
  };
export async function _remWL3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _remWL3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _remWL3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '36'));
  const ctc14 = stdlib.T_Tuple([ctc12, ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc17 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc18 = stdlib.T_Tuple([ctc17, ctc6, ctc6]);
  const ctc19 = stdlib.T_Object({
    cumProceeds: ctc6,
    price: ctc6,
    qty: ctc6,
    sold: ctc6,
    status: ctc11
    });
  const ctc20 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc21 = stdlib.T_Object({
    ctcMan: ctc9,
    currDistr: ctc1,
    cv: ctc14,
    distrHis: ctc16,
    distrIndex: ctc6,
    distrNum: ctc1,
    docHash: ctc18,
    saleDetails: ctc19,
    saleLocked: ctc3,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc20,
    wlIndex: ctc6
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc6, ctc3]);
  const ctc23 = stdlib.T_Array(ctc22, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc24 = stdlib.T_Tuple([ctc9]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc26 = stdlib.T_Tuple([ctc13]);
  const ctc27 = stdlib.T_Tuple([ctc6]);
  const ctc28 = stdlib.T_Tuple([]);
  const ctc29 = stdlib.T_Tuple([ctc1]);
  const ctc30 = stdlib.T_Tuple([ctc17]);
  const ctc31 = stdlib.T_Data({
    aST0_704: ctc25,
    addCoopId0_704: ctc26,
    addWL0_704: ctc24,
    buyOS0_704: ctc27,
    cBT0_704: ctc28,
    cCM0_704: ctc24,
    claimOSpr0_704: ctc28,
    createOS0_704: ctc15,
    dBT0_704: ctc29,
    docHash0_704: ctc30,
    endOS0_704: ctc28,
    optIn0_704: ctc28,
    remWL0_704: ctc24
    });
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc4;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc5;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc8;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  
  const [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6]);
  const v3502 = ctc.selfAddress();
  const v3504 = stdlib.protect(ctc24, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:301:13:application call to [unknown function] (defined at: ./index.rsh:301:13:function exp)', 'at ./index.rsh:121:35:application call to "runremWL0_704" (defined at: ./index.rsh:298:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'in',
    who: 'remWL'
    });
  const v3508 = stdlib.addressEq(v3502, v2941);
  const v3510 = stdlib.addressEq(v3502, v3360);
  const v3511 = v3508 ? true : v3510;
  stdlib.assert(v3511, {
    at: './index.rsh:302:23:application',
    fs: ['at ./index.rsh:301:13:application call to [unknown function] (defined at: ./index.rsh:301:18:function exp)', 'at ./index.rsh:301:13:application call to [unknown function] (defined at: ./index.rsh:301:13:function exp)', 'at ./index.rsh:121:35:application call to "runremWL0_704" (defined at: ./index.rsh:298:13:function exp)', 'at ./index.rsh:121:35:application call to [unknown function] (defined at: ./index.rsh:121:35:function exp)'],
    msg: 'you must be creator or manager',
    who: 'remWL'
    });
  const v3515 = ['remWL0_704', v3504];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2941, v2945, v3266, v3270, v3273, v3321, v3322, v3323, v3325, v3347, v3349, v3351, v3352, v3354, v3356, v3357, v3358, v3360, v3365, v3366, v3367, v3368, v3369, v3370, v3515],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc31],
    pay: [stdlib.checkedBigNumberify('./index.rsh:306:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:306:26:decimal', stdlib.UInt_max, '0'), v2945]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      
      const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
      
      switch (v3772[0]) {
        case 'aST0_704': {
          const v3775 = v3772[1];
          
          break;
          }
        case 'addCoopId0_704': {
          const v4499 = v3772[1];
          
          break;
          }
        case 'addWL0_704': {
          const v5223 = v3772[1];
          
          break;
          }
        case 'buyOS0_704': {
          const v5947 = v3772[1];
          
          break;
          }
        case 'cBT0_704': {
          const v6671 = v3772[1];
          
          break;
          }
        case 'cCM0_704': {
          const v7395 = v3772[1];
          
          break;
          }
        case 'claimOSpr0_704': {
          const v8119 = v3772[1];
          
          break;
          }
        case 'createOS0_704': {
          const v8843 = v3772[1];
          
          break;
          }
        case 'dBT0_704': {
          const v9567 = v3772[1];
          
          break;
          }
        case 'docHash0_704': {
          const v10291 = v3772[1];
          
          break;
          }
        case 'endOS0_704': {
          const v11015 = v3772[1];
          
          break;
          }
        case 'optIn0_704': {
          const v11739 = v3772[1];
          
          break;
          }
        case 'remWL0_704': {
          const v12463 = v3772[1];
          sim_r.txns.push({
            kind: 'api',
            who: "remWL"
            });
          ;
          const v12588 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
          const v12589 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
          const v12590 = [v3357, v12588, v12589];
          const v12591 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v12590);
          ;
          const v13173 = v12463[stdlib.checkedBigNumberify('./index.rsh:298:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 7, v13173, undefined /* Nothing */);
          const v13179 = true;
          const v13180 = await txn1.getOutput('remWL', 'v13179', ctc3, v13179);
          
          const v25756 = v3270;
          const v25758 = v12591;
          const v25759 = v3270.totST;
          const v25760 = v3270.totBT;
          const v25761 = v3270.distrNum;
          const v25762 = v3270.saleLocked;
          const v25763 = v3270.docHash;
          const v25764 = v25763[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
          const v25765 = v3270.cv;
          const v25766 = v25765[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
          const v25767 = v25765[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
          const v25768 = v12591[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v25769 = v25768[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
          const v25770 = stdlib.cast("UInt", "UInt256", v25769, false);
          const v25771 = v3270.ctcMan;
          const v25772 = v3270.saleDetails;
          const v25773 = v25772.qty;
          const v25774 = v25772.price;
          const v25775 = v25772.sold;
          const v25776 = v25772.status;
          const v25777 = v25772.cumProceeds;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc10, ctc11, ctc21, ctc23, ctc1, ctc1, ctc1, ctc3, ctc18, ctc6, ctc14, ctc12, ctc13, ctc22, ctc6, ctc1, ctc9, ctc19, ctc6, ctc6, ctc6, ctc11, ctc6, ctc31],
    waitIfNotPresent: false
    }));
  const {data: [v3772], secs: v3774, time: v3773, didSend: v1599, from: v3771 } = txn1;
  switch (v3772[0]) {
    case 'aST0_704': {
      const v3775 = v3772[1];
      return;
      break;
      }
    case 'addCoopId0_704': {
      const v4499 = v3772[1];
      return;
      break;
      }
    case 'addWL0_704': {
      const v5223 = v3772[1];
      return;
      break;
      }
    case 'buyOS0_704': {
      const v5947 = v3772[1];
      return;
      break;
      }
    case 'cBT0_704': {
      const v6671 = v3772[1];
      return;
      break;
      }
    case 'cCM0_704': {
      const v7395 = v3772[1];
      return;
      break;
      }
    case 'claimOSpr0_704': {
      const v8119 = v3772[1];
      return;
      break;
      }
    case 'createOS0_704': {
      const v8843 = v3772[1];
      return;
      break;
      }
    case 'dBT0_704': {
      const v9567 = v3772[1];
      return;
      break;
      }
    case 'docHash0_704': {
      const v10291 = v3772[1];
      return;
      break;
      }
    case 'endOS0_704': {
      const v11015 = v3772[1];
      return;
      break;
      }
    case 'optIn0_704': {
      const v11739 = v3772[1];
      return;
      break;
      }
    case 'remWL0_704': {
      const v12463 = v3772[1];
      undefined /* setApiDetails */;
      ;
      const v12588 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '1')];
      const v12589 = v3356[stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '2')];
      const v12590 = [v3357, v12588, v12589];
      const v12591 = stdlib.Array_set(v3273, stdlib.checkedBigNumberify('./index.rsh:121:35:dot', stdlib.UInt_max, '0'), v12590);
      ;
      const v13173 = v12463[stdlib.checkedBigNumberify('./index.rsh:298:13:spread', stdlib.UInt_max, '0')];
      const v13174 = stdlib.addressEq(v3771, v2941);
      const v13176 = stdlib.addressEq(v3771, v3360);
      const v13177 = v13174 ? true : v13176;
      stdlib.assert(v13177, {
        at: './index.rsh:309:24:application',
        fs: ['at ./index.rsh:308:13:application call to [unknown function] (defined at: ./index.rsh:308:13:function exp)'],
        msg: 'you must be creator or manager',
        who: 'remWL'
        });
      await stdlib.mapSet(map7, v13173, undefined /* Nothing */);
      const v13179 = true;
      const v13180 = await txn1.getOutput('remWL', 'v13179', ctc3, v13179);
      if (v1599) {
        stdlib.protect(ctc0, await interact.out(v12463, v13180), {
          at: './index.rsh:299:13:application',
          fs: ['at ./index.rsh:299:13:application call to [unknown function] (defined at: ./index.rsh:299:13:function exp)', 'at ./index.rsh:312:20:application call to "res" (defined at: ./index.rsh:308:13:function exp)', 'at ./index.rsh:308:13:application call to [unknown function] (defined at: ./index.rsh:308:13:function exp)'],
          msg: 'out',
          who: 'remWL'
          });
        }
      else {
        }
      
      const v25756 = v3270;
      const v25758 = v12591;
      const v25759 = v3270.totST;
      const v25760 = v3270.totBT;
      const v25761 = v3270.distrNum;
      const v25762 = v3270.saleLocked;
      const v25763 = v3270.docHash;
      const v25764 = v25763[stdlib.checkedBigNumberify('./index.rsh:145:28:application', stdlib.UInt_max, '1')];
      const v25765 = v3270.cv;
      const v25766 = v25765[stdlib.checkedBigNumberify('./index.rsh:146:42:array ref', stdlib.UInt_max, '0')];
      const v25767 = v25765[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, '1')];
      const v25768 = v12591[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v25769 = v25768[stdlib.checkedBigNumberify('./index.rsh:147:46:application', stdlib.UInt_max, '0')];
      const v25770 = stdlib.cast("UInt", "UInt256", v25769, false);
      const v25771 = v3270.ctcMan;
      const v25772 = v3270.saleDetails;
      const v25773 = v25772.qty;
      const v25774 = v25772.price;
      const v25775 = v25772.sold;
      const v25776 = v25772.status;
      const v25777 = v25772.cumProceeds;
      return;
      
      break;
      }
    }
  
  
  };
export async function aST(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for aST expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for aST expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _aST3(ctcTop, interact);}
  };
export async function addCoopId(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for addCoopId expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for addCoopId expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _addCoopId3(ctcTop, interact);}
  };
export async function addWL(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for addWL expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for addWL expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _addWL3(ctcTop, interact);}
  };
export async function buyOS(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buyOS expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for buyOS expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _buyOS3(ctcTop, interact);}
  };
export async function cBT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for cBT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for cBT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _cBT3(ctcTop, interact);}
  };
export async function cCM(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for cCM expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for cCM expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _cCM3(ctcTop, interact);}
  };
export async function claimOSpr(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claimOSpr expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claimOSpr expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _claimOSpr3(ctcTop, interact);}
  };
export async function createOS(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for createOS expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for createOS expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _createOS3(ctcTop, interact);}
  };
export async function dBT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for dBT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for dBT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _dBT3(ctcTop, interact);}
  };
export async function docHash(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for docHash expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for docHash expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _docHash3(ctcTop, interact);}
  };
export async function endOS(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for endOS expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for endOS expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _endOS3(ctcTop, interact);}
  };
export async function optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _optIn3(ctcTop, interact);}
  };
export async function remWL(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for remWL expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for remWL expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _remWL3(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`aST(address,address,uint256)byte`, `addCoopId(byte[36])byte`, `addWL(address)byte`, `buyOS(uint64)(uint64,uint64,uint64,byte[5],uint64)`, `cBT()uint256`, `cCM(address)byte`, `claimOSpr()byte`, `createOS(uint64,uint64)(uint64,uint64,uint64,byte[5],uint64)`, `dBT(uint256)byte`, `docHash(byte[96])byte`, `endOS()byte`, `optIn()byte`, `remWL(address)byte`],
    pure: [`claimSTBT(address)(uint256,uint256)`, `saleLocked()byte`, `totSTBTD()(uint256,uint256,uint256)`, `totSTBTDRec(address)(uint256,uint256,uint256)`, `vBtBal()(uint256,uint64)`, `vCcCm()(address,address)`, `vCurrSale()(uint64,uint64,uint64,byte[5],uint64)`, `vHash()(byte[96],uint64,uint64)`, `vOptedIn(address)byte`, `vcVersion()(byte[4],byte[36])`, `wlMember(address)byte`, `wlMembers()address[25]`],
    sigs: [`aST(address,address,uint256)byte`, `addCoopId(byte[36])byte`, `addWL(address)byte`, `buyOS(uint64)(uint64,uint64,uint64,byte[5],uint64)`, `cBT()uint256`, `cCM(address)byte`, `claimOSpr()byte`, `claimSTBT(address)(uint256,uint256)`, `createOS(uint64,uint64)(uint64,uint64,uint64,byte[5],uint64)`, `dBT(uint256)byte`, `docHash(byte[96])byte`, `endOS()byte`, `optIn()byte`, `remWL(address)byte`, `saleLocked()byte`, `totSTBTD()(uint256,uint256,uint256)`, `totSTBTDRec(address)(uint256,uint256,uint256)`, `vBtBal()(uint256,uint64)`, `vCcCm()(address,address)`, `vCurrSale()(uint64,uint64,uint64,byte[5],uint64)`, `vHash()(byte[96],uint64,uint64)`, `vOptedIn(address)byte`, `vcVersion()(byte[4],byte[36])`, `wlMember(address)byte`, `wlMembers()address[25]`]
    },
  appApproval: `BiBRAH8IAQMgoAb9AvwD+wT6BfkGcQZowAyoDaYPxhUYBBBgBUARyAFwCQfqB7ytx6sIpdL0kgyamI65DMfr7O0N2I6Z4A7n7I64DeDlw7AMsILfsAzsFt3R4ZgJobfa1wr2lavaC4wWrBbMFtSdk8wI8eGT4QjtFvmEipEF/eappQfdlpaDCIrSwpsI7hjJ/Ji8BZec/dQGnPiDiAKO4/3gAtjb/JkDjRizGbsZwxnLGdAZl8TBrwGInfftAQL///////////8BLc4V+xUlDCHJB4QB5gbJAaEGZCYdAQEBBgEAAQIBAwEEAQUBBwEMAQgBCQEKAQsBDQEOAQ8BEAERARIBEwEUARUBFgEXARgBGQAgg4NGe0jACsbbGwAf9XxPwnqspe0HAhLyTDVhn3JaeGogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEiNQAxGEEdlCcaZEkiWzUBSSRbNQIhFVs1CDEZJRJBAFwxACEer0sBKksCVwB/ZksBKEsCV39/ZksBK0sCV/5/ZksBJwRLAiEHI1hmSwEnBUsCIQgjWGZLAScGSwIhCSNYZksBKUsCIQojWGZLAScHSwIhCyEMWGZISEIdCDYaABdJQQZMIjUEJTUGSSEfDEADiEkhIAxAAcJJISEMQADLSSEiDEAANUkhIwxAABUhIxJENhoBNf8nCDT/UCEYr1BCBtwhIhJENhoBNhoCUDX/Jwc0/1CBUK9QQgbDSSEkDEAAByEkEkQ0AQAhIRJENAEhBBJEKmQoZFArZFAnBGRQJwVkUCcGZFApZFAnB2RQJwlkUCcKZFAnC2RQJwxkUCcIZFAnDWRQJw5kUCcPZFAnEGRQJxFkUCcSZFAnE2RQJxRkUCcVZFAnFmRQJxdkUCcYZFAnGWRQSTUDgc4YIQVYNANXIAhQNQdCHClJISUMQADVSSEmDEAAeSEmEkQ0ASEEEkQqZChkUCtkUCcEZFAnBWRQJwZkUClkUCcHZFAnCWRQJwpkUCcLZFAnDGRQJwhkUCcNZFAnDmRQJw9kUCcQZFAnEWRQJxJkUCcTZFAnFGRQJxVkUCcWZFAnF2RQJxhkUCcZZFBJNQMhJyVYNQdCG6IhJRJENAEhBBJENhoBNf8yAzT/iBu1V0IhSTX+VwEgNP4iVU0yAzT/iBugV4QhSTX+VwEgNP4iVU1QMgM0/4gbilelIUk1/lcBIDT+IlVNUDUHQhtNISASRCcaNf8nCzT/UCEWr1BCBURJISgMQADdSSEpDEAApEkhKgxAABMhKhJEJxo1/yk0/1AhFq9QQgUcISkSRDQBIQQSRCpkKGRQK2RQJwRkUCcFZFAnBmRQKWRQJwdkUCcJZFAnCmRQJwtkUCcMZFAnCGRQJw1kUCcOZFAnD2RQJxBkUCcRZFAnEmRQJxNkUCcUZFAnFWRQJxZkUCcXZFAnGGRQJxlkUEk1AyErIQVYNAMhLCEFWFA0AyEtIQVYUDUHQhqHISgSRDQBIQQSRDYaAYgaoFfIAUk1/iJVQAAGIjX/QgAGJTX/QgAANP8WUQcINQdCGlVJIS4MQADASSEvDEAAPyEvEkQ0ASEEEkQ2GgE1/zIDNP+IGlpXACFJNf5XASA0/iJVTTIDNP+IGkVXISFJNf5XASA0/iJVTVA1B0IaCCEuEkQ0ASEEEkQqZChkUCtkUCcEZFAnBWRQJwZkUClkUCcHZFAnCWRQJwpkUCcLZFAnDGRQJwhkUCcNZFAnDmRQJw9kUCcQZFAnEWRQJxJkUCcTZFAnFGRQJxVkUCcWZFAnF2RQJxhkUCcZZFBJNQMhMCEbWDUHQhmOIR8SRDYaATX/KzT/UCEYr1BCA4VJITEMQAEaSSEyDEAAt0khMwxAADBJITQMQAAVITQSRDYaATX/Jwk0/1AhGK9QQgNUITMSRDYaATX/KDT/UIE8r1BCA0AhMhJENAEhBBJEKmQoZFArZFAnBGRQJwVkUCcGZFApZFAnB2RQJwlkUCcKZFAnC2RQJwxkUCcIZFAnDWRQJw5kUCcPZFAnEGRQJxFkUCcSZFAnE2RQJxRkUCcVZFAnFmRQJxdkUCcYZFAnGWRQSTUDVwAgNAMhNSEFWFA1B0IYtUkhNgxAAEFJITcMQAApITcSRDQBIQQSRCI2GgGIGL9XxgJJNf9XAQEXNP8iVU0WUQcINQdCGH4hNhJENhoBNf8nCjT/UEICeCExEkQnGjX/Jww0/1AhFq9QQgJkSSE4DEABPEkhOQxAASBJIToMQACDIToSRDQBIQQSRCpkKGRQK2RQJwRkUCcFZFAnBmRQKWRQJwdkUCcJZFAnCmRQJwtkUCcMZFAnCGRQJw1kUCcOZFAnD2RQJxBkUCcRZFAnEmRQJxNkUCcUZFAnFWRQJxZkUCcXZFAnGGRQJxlkUEk1AyE7IRRYNAOBkRiBJFhQNQdCF8EhORJENAEhBBJEKmQoZFArZFAnBGRQJwVkUCcGZFApZFAnB2RQJwlkUCcKZFAnC2RQJwxkUCcIZFAnDWRQJw5kUCcPZFAnEGRQJxFkUCcSZFAnE2RQJxRkUCcVZFAnFmRQJxdkUCcYZFAnGWRQSTUDITwkWDQDIT0kWFA0AyE+JFhQNAMhPyEXWFA0AyFAJFhQNQdCFyshOBJENhoBNf8nBjT/UCEYr1BCASFJIUEMQAAwSSFCDEAAFSFCEkQ2GgE1/ycENP9QgVivUEIA/iFBEkQnGjX/JwU0/1AhFq9QQgDqgfX635IBEkQ2GgE2GgJQNhoDUDX/KjT/UEIAzjYaAhc1BDYaAzYaARdJIUMMQBFqSSEEDEAAsiEEEkQhBDQBEkQ0BEkiEkw0AhIRRCpkKGRQK2RQJwRkUCcFZFAnBmRQKWRQJwdkUCcJZFAnCmRQJwtkUCcMZFAnCGRQJw1kUCcOZFAnD2RQJxBkUCcRZFAnEmRQJxNkUCcUZFAnFWRQJxZkUCcXZFAnGGRQJxlkUEk1A1cAIDX/gASnZcS0sDIGIUQPRDT/MQASRDT/NAMhBVs0A1coBTQDIUUhRlgyBjQDIUchGVhCE6ZIIQQ0ARJENARJIhJMNAISEUQqZChkUCtkUCcEZFAnBWRQJwZkUClkUCcHZFAnCWRQJwpkUCcLZFAnDGRQJwhkUCcNZFAnDmRQJw9kUCcQZFAnEWRQJxJkUCcTZFAnFGRQJxVkUCcWZFAnF2RQJxhkUCcZZFBJNQNJSkpKSkpKSkpKSVcAIDX/IQVbNf5XKAU1/SFFIUZYNfwhRyEZWDX7ISshBVg1+iEsIQVYNfkhLSEFWDX4ISclWBc19yEwIRtYNfaB3RdbNfWB5ReBKFg19IG1GCEZWDXzgcYYWzXyITUhBVg18YGOGSFIWDXwITxbNe8hPVs17iE+WzXtIT8hF1g17CFAWzXrSTUFNeqABOO40ZU06lCwMgYhRAxENOoiVUkhDQxABQpJIRwMQAKOSYELDEABXkkhSQxAAK4hSRJENOpXASA157EisgEhDbIQNAiyGLMxADT/EjEANPESEUQ050mIFLciIRpMVksBKksCVwB/ZksBKEsCV39/ZksBK0sCV/5/ZksBJwRLAiEHI1hmSwEnBUsCIQgjWGZLAScGSwIhCSNYZksBKUsCIQojWGZLAScHSwIhCyEMWGZISIAJAAAAAAAAM3sBsCg1BzT/NP40/TT8MgY08hY081cICFA081cQAVBCEbpIsSKyASENshA0CLIYszEAMQCIFB6AAgEBNedJVwDGNOdQTCEagaIGWFBLASpLAlcAf2ZLAShLAld/f2ZLAStLAlf+f2ZLAScESwIhByNYZksBJwVLAiEII1hmSwEnBksCIQkjWGZLASlLAiEKI1hmSwEnB0sCIQshDFhmSEiACQAAAAAAADCZAbAoNQc0/zT+NP00/DIGNPIWNPNXCAhQNPNXEAFQQhERSYEKDEAAl0ixIrIBIQ2yEDQIshizMQA0/xIxADTxEhFENOwBJxsSRIAJAAAAAAAALbcBsCg1BzT/NP40/TTxNPxXICBQNPRQNPwhDiEPWFA0/CEQJFhQNPhQNPZQNOsWNO4WUCSvUCSvUDT9UFA09xZRBwhQNPlQNPpQNPwhESEGWFA0/CESJFhQMgY08hY081cICFA081cQAVBCEHNINOpXAWA15zT1IhJEMQA0/xIxADTxEhFEgAkAAAAAAAAqrwGwKDUHNP80/jT9NPE0/FcgIFA09FA0/CEOIQ9YUDT8IRAkWFA0+FA05zT1JQgWUDIGFlBQNPBQNPcWUQcIUDT5UDT6UDT8IREhBlhQNPwhEiRYUDIGNPIWNPNXCAhQNPNXEAFQQg/oSSEdDEABnkkkDEAAvUg06lcBIDXnsSKyASENshA0CLIYszTnSTXmSUohFVsiEkQkWyISRCJbIhJEIRNbNeU05TT+iBJtMQA0/xIxADTxEhFENOUiDUSACQAAAAAAACe3AbAoNQc0/zT+NP008TTmUDT0UDT8IQ4hD1hQNPwhECRYUDT4JxygiBJIUDT2UDTwUDT3FlEHCFA0+TTmoIgSMlA0+lA0/CERIQZYUDT8IRIkWFAyBjTyNOUIFjTzVwgIUDTzVxABUEIPHkg06lcBEDXnsSKyASENshA0CLIYszTnIls15jTnJFs15TEANP8SMQA08RIRRDTmIg1ENOUiDUSABWFjdGl2NeSACAAAAAAAACSzNOYWNOUWUDTtFlA05FA06xZQULA05hY05RZQNO0WUDTkUDTrFlA1BzT/NP40/TTxNPxXICBQNPRQNPwhDiEPWFA0/CEQJFhQNPhQNPZQNOsWNOUWUDTmFlA07RZQNORQUDT3FlEHCFA0+VA0+lA0/CERIQZYUDT8IRIkWFAyBjTyFjTzVwgIUDTzVxABUEIOQ0ixIrIBIQ2yEDQIshizNPIWNPNXCAhQNPNXEAFQNecxADT/EjEANPESEUQ06yINRDTnVwARSTXmIltJNeU06w9EsSKyATTrshIhFLIQMQCyFDT+shGzgAkAAAAAAAAhrgGwKDUHNP80/jT9NPE0/FcgIFA09FA0/CEOIQ9YUDT8IRAkWFA0+FA09lAkrzTuFlA07xZQNO0WUDTsUFA09xZRBwhQNPlQNPpQNPwhESEGWFA0/CESJFhQMgY05TTrCRY05lcICFA05lcQAVBCDXNJIQQMQAW3SSEUDEACi0khFwxAAHxINOpXASA15zEANP8SMQA08RIRRIAJAAAAAAAAHpEBsCg1BzT/NP40/TTnNPxXICBQNPRQNPwhDiEPWFA0/CEQJFhQNPhQNPZQNPBQNPcWUQcIUDT5UDT6UDT8IREhBlhQNPwhEiRYUDIGNPIWNPNXCAhQNPNXEAFQQgziSLEisgEhDbIQNAiyGLM08hY081cICFA081cQAVA15zEAiA83V8gBSTXlIlVAAAYiNeZCAAYlNeZCAAA05kQ051cAEUk15SJbNeQhE6805BZQMgOlRDT6MgOlRDIDMQCIDvlXYyFJNeJXASA04iJVTTXjNPo046dENOMyA6VENOM0/FcgIKOID0M0+qKIDz1JNeJJSiEVWyISRCRbIhJEIlsiEkQhE1tJNeE05A5EsSKyATThshIhFLIQMQCyFDT+shGzMQAxAIgOkSgyAzEAiA6JV4QhSTXgVwEgNOAiVU004qCIDuZQNeBJVwCENOBQTIGlAYHFBlhQSwEqSwJXAH9mSwEoSwJXf39mSwErSwJX/n9mSwEnBEsCIQcjWGZLAScFSwIhCCNYZksBJwZLAiEJI1hmSwEpSwIhCiNYZksBJwdLAiELIQxYZkhIMQAxAIgOBygyAzEAiA3/V6UhSTXgVwEgNOAiVU0nHKCIDlxQNeBJVwClNOBQTIHGAYGkBlhQSwEqSwJXAH9mSwEoSwJXf39mSwErSwJX/n9mSwEnBEsCIQcjWGZLAScFSwIhCCNYZksBJwZLAiEJI1hmSwEpSwIhCiNYZksBJwdLAiELIQxYZkhIgAgAAAAAAAAbmTTiULA04jUHNP80/jT9NPwyBjTkNOEJFjTlVwgIUDTlVxABUEIK2kg06lcBCDXnIjXmsSKyASENshA0CLIYszTmJQhJNeYhHQxA/+Y05xc15jTuNOYLNeU05TT+iA1sNOYiDUQ07AEnGxJENO805g9EMQCIDQRXyAFJNeMiVUAABiI15EIABiU15EIAADTkRCETrzTmFlA14zEAMQCIDNooMgMxAIgM0lcAIUk14lcBIDTiIlVNNOOgiA0vUDXiIUohS1g04kxQSwEqSwJXAH9mSwEoSwJXf39mSwErSwJX/n9mSwEnBEsCIQcjWGZLAScFSwIhCCNYZksBJwZLAiEJI1hmSwEpSwIhCiNYZksBJwdLAiELIQxYZkhIMQAxAIgMVygyAzEAiAxPV2MhSTXiVwEgNOIiVU0046CIDKxQNeJJVwBjNOJQTCFMIU1YUEsBKksCVwB/ZksBKEsCV39/ZksBK0sCV/5/ZksBJwRLAiEHI1hmSwEnBUsCIQgjWGZLAScGSwIhCSNYZksBKUsCIQojWGZLAScHSwIhCyEMWGZISCEGrzEAiAvOIU4hT1hJNeElIQZYNOEiVU014iEcrzXhIjXgNOIkNOALJFgXNd804SJVQAAGJTXeQgAGIjXeQgAANOEoNOAWUDTeIjTfEhBNNeE04CUISTXgIVAMQP/EMQAxAIgLcCg04iIkIjThSTXgJVs04CJVTQtSNOYWUDTiJEkiNOFJNeAlWzTgIlVNCwghBlJQUDXgVwDJNOBQSwEqSwJXAH9mSwEoSwJXf39mSwErSwJX/n9mSwEnBEsCIQcjWGZLAScFSwIhCCNYZksBJwZLAiEJI1hmSwEpSwIhCiNYZksBJwdLAiELIQxYZkhINO805gk14DTtNOYINd806zTmNO4LCDXegAgAAAAAAAAYnTTgFjTuFlA03xZQNOxQNN4WUFCwNOAWNO4WUDTfFlA07FA03hZQNQc0/zT+NP008TT8VyAgUDT0UDT8IQ4hD1hQNPwhECRYUDT4UDT2UDTeFjTuFlA04BZQNN8WUDTsUFA09xZRBwhQNPlQNPpQNPwhESEGWFA0/CESJFhQMgY08jTlCBY081cICFA081cQAVBCB7VJJQxAAZJJIUMMQAETSDTqVwEgNeexIrIBIQ2yEDQIshizNOc15jEANP8SMQA08RIRRDTmSYgJ9iUhGkxWSwEqSwJXAH9mSwEoSwJXf39mSwErSwJX/n9mSwEnBEsCIQcjWGZLAScFSwIhCCNYZksBJwZLAiEJI1hmSwEpSwIhCiNYZksBJwdLAiELIQxYZkhINPwhEltJNeUlCCI05SETD0015IAJAAAAAAAAFWsBsCg1BzT/NP40/TTxNPxXICBQNPRQNPwhDiEPWFA0/CEQJFhQNPhQNPZQNPBQNPcWUQcIUDT5UDT6UDT8IREhBlhJIiEFNOQLUjTmUEwhBUk05AsIIQZSUFA05BZQMgY08hY081cICFA081cQAVBCBpVINOpXASQ154AJAAAAAAAAEmgBsCg1BzT/NP40/TTxNPxXICBQNAMhOyEUWDTnUFA0/CEOIQ9YUDT8IRAkWFA0+FA09lA08FA09xZRBwhQNPlQNPpQNPwhESEGWFA0/CESJFhQMgY08hY081cICFA081cQAVBCBh1INOpXAWA15yI15rEisgEhDbIQNAiyGLM05iUISTXmIR0MQP/mNOdXACA15jTnVyAgNeU051dAIDXkNOY0/xI05jTxEhFENOQyA6VENOVJiAhEJSEaTFZLASpLAlcAf2ZLAShLAld/f2ZLAStLAlf+f2ZLAScESwIhByNYZksBJwVLAiEII1hmSwEnBksCIQkjWGZLASlLAiEKI1hmSwEnB0sCIQshDFhmSEg05UmIB+UoMgM05YgH3VcAIUk141cBIDTjIlVNNOSgiAg6UDXjIUohS1g040xQSwEqSwJXAH9mSwEoSwJXf39mSwErSwJX/n9mSwEnBEsCIQcjWGZLAScFSwIhCCNYZksBJwZLAiEJI1hmSwEpSwIhCiNYZksBJwdLAiELIQxYZkhINOVJiAdjKDIDNOWIB1tXYyFJNeNXASA04yJVTTTkoIgHuFA140lXAGM041BMIUwhTVhQSwEqSwJXAH9mSwEoSwJXf39mSwErSwJX/n9mSwEnBEsCIQcjWGZLAScFSwIhCCNYZksBJwZLAiEJI1hmSwEpSwIhCiNYZksBJwdLAiELIQxYZkhIIQavNOWIBtohTiFPWEk14iUhBlg04iJVTTXjIRyvNeIiNeE04yQ04QskWBc14DTiIlVAAAYlNd9CAAYiNd9CAAA04ig04RZQNN8iNOASEE014jThJQhJNeEhUAxA/8Q05UmIBn0oNOMiJCI04kk14SVbNOEiVU0LUjTkSUohFVsiEkQkWyISRCJbIhJEIRNbFlA04yRJIjTiSTXhJVs04SJVTQsIIQZSUFA14VcAyTThUEsBKksCVwB/ZksBKEsCV39/ZksBK0sCV/5/ZksBJwRLAiEHI1hmSwEnBUsCIQgjWGZLAScGSwIhCSNYZksBKUsCIQojWGZLAScHSwIhCyEMWGZISIAJAAAAAAAAD2cBsCg1BzT/NP40/TTxNPxXICBQNPRQNPwhDiEPWFA0/CEQJFhQNPhQNPZQNPBQNPcWUQcIUDT5UDT6NOSgiAYDUDT8IREhBlhQNPwhEiRYUDIGNPIWNPNXCAhQNPNXEAFQQgL1IhJEgcCaDIgFnbEisgEhDbIQIrIYgAYGMQAyCRKyHimyH7O0PTUIIjQBEkQ0BEkiEkw0AhIRREk1BUlKSVcAgDX/V4ABFzX+V4EgNf2BoQFbNfxXqSA1+4AEmjD5HTT/UDT+FlEHCFA0/VA0/BZQNPtQsCEZr0k1+lcAETX5gaCNBogFIrEisgEishIhFLIQMgqyFDT8shGzIRWvNfiABWVuZGVkNfcxADT8NPc0/TIDUIAoMS4wM2Nvb3BlcmF0aXZJZGNvb3BlcmF0aXZJZGNvb3BlcmF0aXZJZFA0+ElQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQUCSvUDIDUIBwYWpkbmFlaW5hd2luZGlhZW5ndG5pZnJqd3JpdG5pcXdybmlyZWZpbmRpbmlnYWpkbmFlaW5hd2lkaWFlbmd0bmlpdG5pcXdybmlyZWZpbmRpbmlnZnVhZWJmdWJhd3VyAAAAAAAAAAAAAAAAAAAAAFAyAzT3UFA0/hZRBwhQMgNQMgNQMQAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFAxAFBQJK9QMgYkrzT5VwgIUDT5VxABUEIAADX/Nf41/TX8Nfs1+jT9gYYPIQVYNfk0/YHmDiEFWDX4NP2BsA0hBVg19zT9geUOJVgXNfY0/YHQDSEbWEk19SEWWzX0NP1XQChJNfNXAAQ18jTzVwQkNfE0/1cAEUk18CJbNe8hE6807xZQNe40/VcAIDXtNP2BwA4hSFhJNewhFVs16zTsJFs16jTsIRNbNek07FcgBTXoNOwiWzXnNPo0+xZQNPxQNP1QNP9QNPlQNPhQNPdQNPYWUQcIUDT1UDT0FlA081A08lA08VA08FA07xZQNO5QNO1QNOxQNOsWUDTqFlA06RZQNOhQNOcWUCpLAVcAf2coSwFXf39nK0sBV/5/ZycESwEhByNYZycFSwEhCCNYZycGSwEhCSNYZylLASEKI1hnJwdLASELI1hnJwlLAYH4ByNYZycKSwGB9wgjWGcnC0sBgfYJI1hnJwxLAYH1CiNYZycISwGB9AsjWGcnDUsBgfMMI1hnJw5LAYHyDSNYZycPSwGB8Q4jWGcnEEsBgfAPI1hnJxFLAYHvECNYZycSSwGB7hEjWGcnE0sBge0SI1hnJxRLAYHsEyNYZycVSwGB6xQjWGcnFksBgeoVI1hnJxdLAYHpFiNYZycYSwGB6BcjWGcnGUsBgecYIQxYZ0ghBDUBMgY1AkIALTEZIRcSRLEisgEhDbIQNAiyGCEXshmzsSKyASKyCCWyEDIJsgkyCrIHs0IABTEZIhJEJxo0ARY0AhY0CBZQUGc0BkEACoAEFR98dTQHULA0AEklCDIEEkQxFhJEJUMxGSISREL/3yIxNBJEgRsxNRJEIjE2EkQkMTcSRCI1ASI1AiI1CEL/pkkxGGFAAAVIIR6viUkqYksBKGJQSwErYlBLAScEYlBLAScFYlBLAScGYlBLASliUEsBJwdiUExIiTQASUolCDUAOAcyChJEOBAlEkQ4CBJEiTQASUpJJQg1ADgUMgoSRDgQIRQSRDgRTwISRDgSEkSJSRUhBUwJr0xQiQ==`,
  appClear: `Bg==`,
  companionInfo: {
    api_aST: 7,
    api_addWL: 1,
    api_buyOS: 7,
    api_cBT: 1,
    api_claimOSpr: 1,
    api_createOS: 1,
    api_dBT: 1,
    api_endOS: 1,
    api_optIn: 1,
    api_remWL: 1
    },
  extraPages: 3,
  mapDataKeys: 8,
  mapDataSize: 1002,
  stateKeys: 26,
  stateSize: 3288,
  unsupported: [],
  version: 10,
  warnings: [`Step 2 may use up to 9 transaction references, but the limit is 8. Step 2 starts at /app/index.rsh:121:35:dot.`]
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
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T27",
                "name": "v2942",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v2943",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v2944",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v2945",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v2946",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T29",
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
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T27",
                "name": "v2942",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v2943",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v2944",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v2945",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v2946",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T29",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T37",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T30",
                    "name": "_aST0_704",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes4",
                            "name": "elem1",
                            "type": "bytes4"
                          }
                        ],
                        "internalType": "struct T8",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T31",
                    "name": "_addCoopId0_704",
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
                    "internalType": "struct T32",
                    "name": "_addWL0_704",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T33",
                    "name": "_buyOS0_704",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_704",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T32",
                    "name": "_cCM0_704",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimOSpr0_704",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_createOS0_704",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T35",
                    "name": "_dBT0_704",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem2",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T12",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T36",
                    "name": "_docHash0_704",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_endOS0_704",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_704",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T32",
                    "name": "_remWL0_704",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T37",
                "name": "v3772",
                "type": "tuple"
              }
            ],
            "internalType": "struct T39",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T40",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
        "internalType": "struct T42",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v10167",
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
    "name": "_reach_oe_v10927",
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
    "name": "_reach_oe_v11703",
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
    "name": "_reach_oe_v12441",
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
    "name": "_reach_oe_v13179",
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
    "name": "_reach_oe_v3943",
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
    "name": "_reach_oe_v4712",
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
    "name": "_reach_oe_v5483",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "qty",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sold",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes5",
                "name": "elem0",
                "type": "bytes5"
              }
            ],
            "internalType": "struct T6",
            "name": "status",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "cumProceeds",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v6301",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v7065",
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
    "name": "_reach_oe_v7825",
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
    "name": "_reach_oe_v8622",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "qty",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sold",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes5",
                "name": "elem0",
                "type": "bytes5"
              }
            ],
            "internalType": "struct T6",
            "name": "status",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "cumProceeds",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v9395",
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
    "name": "_reachMap3Ref",
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
    "name": "_reachMap4Ref",
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
    "name": "_reachMap5Ref",
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
    "name": "_reachMap6Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T1",
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
    "name": "_reachMap7Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T2",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
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
    "name": "_reachMap8Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T4",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256[100]",
            "name": "_Some",
            "type": "uint256[100]"
          }
        ],
        "internalType": "struct T4",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T37",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T30",
                    "name": "_aST0_704",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes4",
                            "name": "elem1",
                            "type": "bytes4"
                          }
                        ],
                        "internalType": "struct T8",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T31",
                    "name": "_addCoopId0_704",
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
                    "internalType": "struct T32",
                    "name": "_addWL0_704",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T33",
                    "name": "_buyOS0_704",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_704",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T32",
                    "name": "_cCM0_704",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimOSpr0_704",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_createOS0_704",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T35",
                    "name": "_dBT0_704",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem2",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T12",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T36",
                    "name": "_docHash0_704",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_endOS0_704",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_704",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T32",
                    "name": "_remWL0_704",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T37",
                "name": "v3772",
                "type": "tuple"
              }
            ],
            "internalType": "struct T39",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T40",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
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
        "internalType": "struct T42",
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
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "_a1",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a2",
        "type": "uint256"
      }
    ],
    "name": "aST",
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
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes4",
            "name": "elem1",
            "type": "bytes4"
          }
        ],
        "internalType": "struct T8",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "addCoopId",
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
    "name": "addWL",
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
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "buyOS",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "qty",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sold",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes5",
                "name": "elem0",
                "type": "bytes5"
              }
            ],
            "internalType": "struct T6",
            "name": "status",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "cumProceeds",
            "type": "uint256"
          }
        ],
        "internalType": "struct T23",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "cBT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
    "name": "cCM",
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
    "inputs": [],
    "name": "claimOSpr",
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
        "name": "v25796",
        "type": "address"
      }
    ],
    "name": "claimSTBT",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T5",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "createOS",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "qty",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sold",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes5",
                "name": "elem0",
                "type": "bytes5"
              }
            ],
            "internalType": "struct T6",
            "name": "status",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "cumProceeds",
            "type": "uint256"
          }
        ],
        "internalType": "struct T23",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "dBT",
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
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T12",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "docHash",
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
    "inputs": [],
    "name": "endOS",
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
    "inputs": [],
    "name": "optIn",
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
    "name": "remWL",
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
    "inputs": [],
    "name": "saleLocked",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totSTBTD",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "internalType": "struct T20",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v25800",
        "type": "address"
      }
    ],
    "name": "totSTBTDRec",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "internalType": "struct T20",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vBtBal",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "elem1",
            "type": "address"
          }
        ],
        "internalType": "struct T21",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vCcCm",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "elem1",
            "type": "address"
          }
        ],
        "internalType": "struct T22",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vCurrSale",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "qty",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sold",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes5",
                "name": "elem0",
                "type": "bytes5"
              }
            ],
            "internalType": "struct T6",
            "name": "status",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "cumProceeds",
            "type": "uint256"
          }
        ],
        "internalType": "struct T23",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vHash",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T12",
            "name": "elem0",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "internalType": "struct T13",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v25806",
        "type": "address"
      }
    ],
    "name": "vOptedIn",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vcVersion",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "bytes4",
                "name": "elem0",
                "type": "bytes4"
              }
            ],
            "internalType": "struct T7",
            "name": "elem0",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes4",
                "name": "elem1",
                "type": "bytes4"
              }
            ],
            "internalType": "struct T8",
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v25809",
        "type": "address"
      }
    ],
    "name": "wlMember",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "wlMembers",
    "outputs": [
      {
        "internalType": "address payable[25]",
        "name": "",
        "type": "address[25]"
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
  Bytecode: `0x608060405260405162009508380380620095088339810160408190526200002691620016df565b6000805543600355620000386200103b565b7f02b022aadaf3519406008b26ba04539ab684bf46cb83f65dee6845a03a66bdf033836040516200006b929190620017b8565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528185018051949094528051518301518451909301929092529051518101519151911515910152620000ce3415601362000dcf565b6060810151339060006001600160a01b0390921660209290920201526060810151339060016001600160a01b0390921660209290920201526060810151339060026001600160a01b0390921660209290920201526060810151339060036001600160a01b0390921660209290920201526060810151339060046001600160a01b0390921660209290920201526060810151339060056001600160a01b0390921660209290920201526060810151339060066001600160a01b0390921660209290920201526060810151339060076001600160a01b0390921660209290920201526060810151339060086001600160a01b0390921660209290920201526060810151339060096001600160a01b03909216602092909202015260608101513390600a6001600160a01b03909216602092909202015260608101513390600b6001600160a01b03909216602092909202015260608101513390600c6001600160a01b03909216602092909202015260608101513390600d6001600160a01b03909216602092909202015260608101513390600e6001600160a01b03909216602092909202015260608101513390600f6001600160a01b0390921660209290920201526060810151339060106001600160a01b0390921660209290920201526060810151339060116001600160a01b0390921660209290920201526060810151339060126001600160a01b0390921660209290920201526060810151339060136001600160a01b0390921660209290920201526060810151339060146001600160a01b0390921660209290920201526060810151339060156001600160a01b0390921660209290920201526060810151339060166001600160a01b0390921660209290920201526060810151339060176001600160a01b0390921660209290920201526060810151339060186001600160a01b039092166020928302919091015260808201805160009081905281519092018290525160a083015190916020020152608081015160a082015160016020020152608081015160a082015160026020020152608081015160a082015160036020020152608081015160a082015160046020020152608081015160a082015160056020020152608081015160a082015160066020020152608081015160a082015160076020020152608081015160a082015160086020020152608081015160a082015160096020020152608081015160a0820151600a6020020152608081015160a0820151600b6020020152608081015160a0820151600c6020020152608081015160a0820151600d6020020152608081015160a0820151600e6020020152608081015160a0820151600f6020020152608081015160a082015160106020020152608081015160a082015160116020020152608081015160a082015160126020020152608081015160a082015160136020020152608081015160a082015160146020020152608081015160a082015160156020020152608081015160a082015160166020020152608081015160a082015160176020020152608081015160a082015160186020020152608081015160a082015160196020020152608081015160a0820151601a6020020152608081015160a0820151601b6020020152608081015160a0820151601c6020020152608081015160a0820151601d6020020152608081015160a0820151601e6020020152608081015160a0820151601f602002018190525080608001518160a00151602060648110620005de57620005de6200184b565b6020020152608081015160a082015160216020020152608081015160a082015160226020020152608081015160a082015160236020020152608081015160a082015160246020020152608081015160a082015160256020020152608081015160a082015160266020020152608081015160a082015160276020020152608081015160a082015160286020020152608081015160a082015160296020020152608081015160a0820151602a6020020152608081015160a0820151602b6020020152608081015160a0820151602c6020020152608081015160a0820151602d6020020152608081015160a0820151602e6020020152608081015160a0820151602f6020020152608081015160a082015160306020020152608081015160a082015160316020020152608081015160a082015160326020020152608081015160a082015160336020020152608081015160a082015160346020020152608081015160a082015160356020020152608081015160a082015160366020020152608081015160a082015160376020020152608081015160a082015160386020020152608081015160a082015160396020020152608081015160a0820151603a6020020152608081015160a0820151603b6020020152608081015160a0820151603c6020020152608081015160a0820151603d6020020152608081015160a0820151603e6020020152608081015160a0820151603f6020020152608081015160a082015160406020020152608081015160a082015160416020020152608081015160a082015160426020020152608081015160a082015160436020020152608081015160a082015160446020020152608081015160a082015160456020020152608081015160a082015160466020020152608081015160a082015160476020020152608081015160a082015160486020020152608081015160a082015160496020020152608081015160a0820151604a6020020152608081015160a0820151604b6020020152608081015160a0820151604c6020020152608081015160a0820151604d6020020152608081015160a0820151604e6020020152608081015160a0820151604f6020020152608081015160a082015160506020020152608081015160a082015160516020020152608081015160a082015160526020020152608081015160a082015160536020020152608081015160a082015160546020020152608081015160a082015160556020020152608081015160a082015160566020020152608081015160a082015160576020020152608081015160a082015160586020020152608081015160a082015160596020020152608081015160a0820151605a6020020152608081015160a0820151605b6020020152608081015160a0820151605c6020020152608081015160a0820151605d6020020152608081015160a0820151605e6020020152608081015160a0820151605f6020020152608081015160a082015160606020020152608081015160a082015160616020020152608081015160a082015160626020020152608081015160a08201516063602002018190525063312e303360e01b8160c00151600001906001600160e01b03191690816001600160e01b031916815250507f636f6f706572617469764964636f6f706572617469764964636f6f70657261748160e001516000018181525050631a5d925960e21b8160e00151602001906001600160e01b03191690816001600160e01b031916815250508060c00151816101000151600001819052508060e00151816101000151602001819052507f616a646e6165696e6177696e646961656e67746e6966726a777269746e69717781610120015160000181815250507f726e69726566696e64696e6967616a646e6165696e617769646961656e67746e81610120015160200181815250507f6969746e697177726e69726566696e64696e6967667561656266756261777572816101200151604001818152505080610120015181610140015160000181905250600081610140015160200181815250506000816101400151604001818152505064195b99195960da1b816101600151600001906001600160d81b03191690816001600160d81b031916815250506000816101800151600001818152505060008161018001516020018181525050600081610180015160400181815250506000816101800151606001818152505080610160015181610180015160800181905250816020015160400151816101a00151600001906001600160a01b031690816001600160a01b0316815250506000816101a001516020018181525050806101000151816101a00151604001819052508060a00151816101a00151606001819052506000816101a0015160800181815250506000816101a0015160a0018181525050806101400151816101a0015160c00181905250806101800151816101a0015160e00181905250816020015160200151816101a001516101000190151590811515815250506000816101a001516101200181815250506000816101a001516101400181815250508060600151816101a0015161016001819052506000816101a0015161018001818152505062000d55620011ab565b80513390526020838101516060015182516001600160a01b039091169082015261016083015182516040908101919091526101a0840151828401805191909152514390830152908301519083015162000db2919060009062000df9565b60208201516040015262000dc68162000e7c565b50505062001cd6565b8162000df55760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b62000e03620011e8565b60005b600181101562000e595784816001811062000e255762000e256200184b565b602002015182826001811062000e3f5762000e3f6200184b565b60200201528062000e508162001861565b91505062000e06565b508181846001811062000e705762000e706200184b565b60200201529392505050565b604080516020808201835260008252830151909101515151815262000ea062001235565b8251516001600160a01b039081168252835160209081015182168184015284516040908101518185015281860180515160608087019190915281518301516080808801919091528251516101409081015160a0808a01919091528451516101209081015160c0808c01919091528651519092015160e0808c0191909152865151610100908101511515908c0152865151830151918b01919091528551519091015187015191890191909152835151850151610160890152835151850151516101808901528351518501518601516101a08901528351850151516101c0890152835185015151516101e0890152885161020089015283515151909616610220880152825151860151610240880152825151860151840151610260880152825151860151850151610280880152825151860151909101516102a087015281515185015101516102c0860152515190920151516102e084015260036000554360015590516200100f9183910162001a88565b6040516020818303038152906040526002908051906020019062001035929190620013c9565b50505050565b60408051610220810190915260006101c082018181526101e0830182905261020083019190915281526020810162001072620011e8565b81526040805160608101825260008082526020828101829052928201529101908152602001620010a162001458565b8152602001620010c4604051806040016040528060008152602001600081525090565b8152602001620010d362001477565b815260408051602080820183526000808352818501929092528251808401845282815280820183905283850152825160608082018552818501848152825284518086018652848152808401859052828401528086019190915283518082018552838152808301849052808501849052608080870191909152845160c0808201875292810185815291810185905260a08082018690529181528084018590528086018590529086015283519182019093529081529082015260e00162001197620014b2565b8152602001620011a6620014fa565b905290565b6040805160a0810182526000818301818152606083018290528351602080820190955291825260808301919091528152908101620011a6620015d6565b60405180602001604052806001905b6200121e604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620011f75790505090565b60408051610300810182526000808252602080830182905283519081018452908152909182019081526020016200126b620014fa565b81526020016200127a620011e8565b8152602001600081526020016000815260200160008152602001600015158152602001620012d56040805160c0810182526000606082018181526080830182905260a083018290528252602082018190529181019190915290565b815260200160008152602001620013166040805160608101825260008183018181528252825180840190935280835260208084019190915281019190915290565b8152604080516020808201835260008083528185019290925282518084018452828152808201839052838501528251606080820185528382529181018390529283018290528301919091526080820181905260a0820181905260c082015260e00162001381620014b2565b8152602001600081526020016000815260200160008152602001620013bc604051806020016040528060006001600160d81b03191681525090565b8152602001600081525090565b828054620013d79062001c99565b90600052602060002090601f016020900481019282620013fb576000855562001446565b82601f106200141657805160ff191683800117855562001446565b8280016001018555821562001446579182015b828111156200144657825182559160200191906001019062001429565b506200145492915062001601565b5090565b6040518061032001604052806019906020820280368337509192915050565b60405180610c8001604052806064905b6040805180820190915260008082526020820152815260200190600190039081620014875790505090565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001620011a6604051806020016040528060006001600160d81b03191681525090565b604080516101a08101825260008082526020820152908101620015476040805160608101825260008183018181528252825180840190935280835260208084019190915281019190915290565b81526020016200155662001477565b81526020016000815260200160008152602001620015a16040805160c0810182526000606082018181526080830182905260a083018290528252602082018190529181019190915290565b8152602001620015b0620014b2565b81526020016000151581526020016000815260200160008152602001620013bc62001458565b6040518060600160405280620015eb620014fa565b815260200160008152602001620011a6620011e8565b5b8082111562001454576000815560010162001602565b604080519081016001600160401b03811182821017156200164957634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b03811182821017156200164957634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200164957634e487b7160e01b600052604160045260246000fd5b80518015158114620016c257600080fd5b919050565b80516001600160a01b0381168114620016c257600080fd5b6000818303610120811215620016f457600080fd5b620016fe62001618565b83518152601f1982019150610100808312156200171a57600080fd5b620017246200164f565b60808412156200173357600080fd5b6200173d62001680565b9350602086015184526040860151602085015260608601516040850152608086015160608501528381526200177560a08701620016b1565b60208201526200178860c08701620016c7565b60408201526200179b60e08701620016c7565b606082015294015160808501526020810193909352509092915050565b60006101408201905060018060a01b0380851683528351602084015260208401518051805160408601526020810151606086015260408101516080860152606081015160a0860152506020810151151560c08501528160408201511660e085015260608101519150620018376101008501836001600160a01b03169052565b608081015161012085015250509392505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200188457634e487b7160e01b600052601160045260246000fd5b5060010190565b63ffffffff60e01b8151511682526020810151620018c06020840182805182526020908101516001600160e01b031916910152565b505050565b8060005b606481101562001035578151805185526020908101518186015260409094019390910190600101620018c9565b8060005b6019811015620010355781516001600160a01b0316845260209384019390910190600101620018fa565b80516001600160a01b031682526020810151602083015260408101516200194f60408401826200188b565b5060608101516200196460a0840182620018c5565b506080818101516119a084015260a08201516119c084015260c0820151805180516119e0860152602080820151611a00870152604091820151611a2087015280830151611a4087015291810151611a6086015260e08401518051611a8087015291820151611aa0860152810151611ac08501526060810151611ae08501520151516001600160d81b031916611b008301526101008101511515611b20830152610120810151611b40830152610140810151611b6083015261016081015162001a31611b80840182620018f6565b506101800151611ea09190910152565b8060005b6001811015620010355762001a7184835180518252602080820151908301526040908101511515910152565b606093909301926020919091019060010162001a45565b81516001600160a01b031681526123808101602083015162001ab560208401826001600160a01b03169052565b50604083015162001ad36040840182516001600160d81b0319169052565b50606083015162001ae8606084018262001924565b50608083015162001afe611f2084018262001a41565b5060a0830151611f8083015260c0830151611fa083015260e0830151611fc08301526101008301511515611fe08301526101208301518051805161200085015260208082015161202086015260409182015161204086015282015161206085015201516120808301526101408301516120a083015261016083015162001b896120c08401826200188b565b50610180830151516001600160e01b03199081166121208401526101a084015180516121408501526020908101519091166121608401526101c08401518051612180850152808201516121a085015260409081015115156121c08501526101e08501516121e08501526102008501516122008501526102208501516001600160a01b031661222085015261024085015180516122408601529182015161226085015281015161228084015260608101516122a084015260800151516001600160d81b03199081166122c08401526102608401516122e08401526102808401516123008401526102a08401516123208401526102c084015151166123408301526102e0909201516123609091015290565b600181811c9082168062001cae57607f821691505b6020821081141562001cd057634e487b7160e01b600052602260045260246000fd5b50919050565b6178228062001ce66000396000f3fe60806040526004361061021c5760003560e01c80637333bd0911610122578063b7ba9551116100a5578063d9dcd84d1161006c578063d9dcd84d14610624578063dc01fb9d14610644578063e9b451af14610664578063f33cd53314610677578063fe9e59dd1461068a57005b8063b7ba9551146105b2578063b8003303146105c5578063cadc2e7a146105cd578063d07b8ddb146105ed578063d1ad1a371461060f57005b8063a153a9bd116100e9578063a153a9bd14610534578063a953303314610547578063ab53f2c61461054f578063abe9f98d14610572578063acf0cc221461059257005b80637333bd09146104d157806373b4522c146104d957806374fcef12146104ec578063817d57f3146104ff578063832307571461051f57005b80632152dd46116101aa57806350cea70f1161017157806350cea70f1461045457806354f2991c14610467578063573fa8a11461047a57806359cac3a41461049c5780635b48684e146104c957005b80632152dd46146103a55780633293bc79146103c75780633bc5b7bf146103e75780633c9febe8146104075780634a3912eb1461043457005b80631956a232116101ee5780631956a232146102cb5780631e3f5f07146103045780631e93b0f1146103175780631fa8b02f146103365780632080ea1c1461037857005b8063046989b61461022557806306dc92ff14610266578063125f48e41461029357806312822a75146102b657005b3661022357005b005b34801561023157600080fd5b5061023a61069f565b6040805182516001600160a01b0390811682526020938401511692810192909252015b60405180910390f35b34801561027257600080fd5b50610286610281366004616436565b6107ba565b60405161025d9190616479565b6102a66102a1366004616436565b6107e6565b604051901515815260200161025d565b3480156102c257600080fd5b506102a661082a565b3480156102d757600080fd5b506102e06108ee565b60408051825181526020928301516001600160a01b0316928101929092520161025d565b6102a66103123660046164a9565b610a03565b34801561032357600080fd5b506003545b60405190815260200161025d565b34801561034257600080fd5b50610356610351366004616436565b610a62565b604080518251815260208084015190820152918101519082015260600161025d565b34801561038457600080fd5b50610398610393366004616436565b610c27565b60405161025d91906164ea565b3480156103b157600080fd5b506103ba610c4d565b60405161025d9190616550565b6103da6103d536600461655e565b610d32565b60405161025d9190616577565b3480156103f357600080fd5b50610286610402366004616436565b610d73565b34801561041357600080fd5b50610427610422366004616436565b610d99565b60405161025d91906165b7565b34801561044057600080fd5b506102a661044f366004616436565b610daa565b6102a6610462366004616749565b610e97565b6102a661047536600461679f565b610ed2565b34801561048657600080fd5b5061048f610f0f565b60405161025d91906167f0565b3480156104a857600080fd5b506104bc6104b7366004616436565b610fd9565b60405161025d91906167fe565b6102a6611145565b610328611176565b6102236104e7366004616815565b6111a6565b6102a66104fa366004616436565b6111ca565b34801561050b57600080fd5b5061028661051a366004616436565b61120e565b34801561052b57600080fd5b50600154610328565b6102a6610542366004616436565b611234565b6102a661127a565b34801561055b57600080fd5b506105646112ab565b60405161025d929190616859565b34801561057e57600080fd5b506102a661058d366004616436565b611348565b34801561059e57600080fd5b506102866105ad366004616436565b61146f565b6103da6105c0366004616893565b611495565b6102a66114e5565b3480156105d957600080fd5b506102866105e8366004616436565b611515565b3480156105f957600080fd5b5061060261153b565b60405161025d91906168e1565b34801561061b57600080fd5b5061035661160a565b34801561063057600080fd5b5061039861063f366004616436565b611733565b34801561065057600080fd5b5061028661065f366004616436565b611759565b6102a661067236600461655e565b61177f565b6102236106853660046168f0565b6117bc565b34801561069657600080fd5b506103da6117dc565b6040805180820190915260008082526020820152600360005414156107ab576000600280546106cd90616903565b80601f01602080910402602001604051908101604052809291908181526020018280546106f990616903565b80156107465780601f1061071b57610100808354040283529160200191610746565b820191906000526020600020905b81548152906001019060200180831161072957829003601f168201915b505050505080602001905181019061075e9190616d87565b9050610780604080516060810182526000602082018181529282015290815290565b815181516001600160a01b039182169052610220909201518151921660209092019190915251919050565b6107b76000600c6118e1565b90565b60408051606081018252600080825260208201819052918101919091526107e082611907565b92915050565b60006107f0615767565b60208101805151600290525151606001516001600160a01b0384169052610815615781565b61081f82826119d9565b604001519392505050565b6000600360005414156108e25760006002805461084690616903565b80601f016020809104026020016040519081016040528092919081815260200182805461087290616903565b80156108bf5780601f10610894576101008083540402835291602001916108bf565b820191906000526020600020905b8154815290600101906020018083116108a257829003601f168201915b50505050508060200190518101906108d79190616d87565b610100015192915050565b6107b7600060086118e1565b6040805180820190915260008082526020820152600360005414156109f75760006002805461091c90616903565b80601f016020809104026020016040519081016040528092919081815260200182805461094890616903565b80156109955780601f1061096a57610100808354040283529160200191610995565b820191906000526020600020905b81548152906001019060200180831161097857829003601f168201915b50505050508060200190518101906109ad9190616d87565b90506109cf604080516060810182526000602082018181529282015290815290565b61020082015181515260209182015181516001600160a01b0390911692019190915251919050565b6107b76000600b6118e1565b6000610a0d615767565b6020818101805151600090528051518201516001600160a01b038881169091528151518301519087169083015251510151604001839052610a4c615781565b610a5682826119d9565b519150505b9392505050565b610a8660405180606001604052806000815260200160008152602001600081525090565b60036000541415610c1657600060028054610aa090616903565b80601f0160208091040260200160405190810160405280929190818152602001828054610acc90616903565b8015610b195780601f10610aee57610100808354040283529160200191610b19565b820191906000526020600020905b815481529060010190602001808311610afc57829003601f168201915b5050505050806020019051810190610b319190616d87565b9050610b5a60408051608081018252600060208201818152928201819052606082015290815290565b6001610b6585614b92565b516001811115610b7757610b77616453565b14610b83576000610b91565b610b8c84614b92565b604001515b8151526001610b9f85614c1f565b516001811115610bb157610bb1616453565b14610bbd576000610bcb565b610bc684614c1f565b604001515b8151602001526001610bdc85614cac565b516001811115610bee57610bee616453565b14610bfa576000610c08565b610c0384614cac565b604001515b815160400152519392505050565b610c226000600a6118e1565b919050565b60408051606081018252600080825260208201819052918101919091526107e082614d39565b610c556157f6565b60036000541415610d2657600060028054610c6f90616903565b80601f0160208091040260200160405190810160405280929190818152602001828054610c9b90616903565b8015610ce85780601f10610cbd57610100808354040283529160200191610ce8565b820191906000526020600020905b815481529060010190602001808311610ccb57829003601f168201915b5050505050806020019051810190610d009190616d87565b9050610d0a61582a565b6101808201518151526101a09091015181516020015251919050565b6107b7600060106118e1565b610d3a61583d565b610d42615767565b6020810180515160039052515160800151839052610d5e615781565b610d6882826119d9565b606001519392505050565b60408051606081018252600080825260208201819052918101919091526107e082614e02565b610da161587f565b6107e082614e8f565b600060036000541415610e8b57600060028054610dc690616903565b80601f0160208091040260200160405190810160405280929190818152602001828054610df290616903565b8015610e3f5780601f10610e1457610100808354040283529160200191610e3f565b820191906000526020600020905b815481529060010190602001808311610e2257829003601f168201915b5050505050806020019051810190610e579190616d87565b90506001610e6484614d39565b516001811115610e7657610e76616453565b14610e82576000610a5b565b61081f83614d39565b610c226000600f6118e1565b6000610ea1615767565b6020810180515160019052515160400151839052610ebd615781565b610ec782826119d9565b602001519392505050565b6000610edc615767565b602081018051516009905251516101400151839052610ef9615781565b610f0382826119d9565b61012001519392505050565b610f1761589e565b60036000541415610fcd57600060028054610f3190616903565b80601f0160208091040260200160405190810160405280929190818152602001828054610f5d90616903565b8015610faa5780601f10610f7f57610100808354040283529160200191610faa565b820191906000526020600020905b815481529060010190602001808311610f8d57829003601f168201915b5050505050806020019051810190610fc29190616d87565b610120015192915050565b6107b76000600e6118e1565b6040805180820190915260008082526020820152600360005414156111395760006002805461100790616903565b80601f016020809104026020016040519081016040528092919081815260200182805461103390616903565b80156110805780601f1061105557610100808354040283529160200191611080565b820191906000526020600020905b81548152906001019060200180831161106357829003601f168201915b50505050508060200190518101906110989190616d87565b90506110ba604080516060810182526000602082018181529282015290815290565b60016110c585614e02565b5160018111156110d7576110d7616453565b146110e35760006110f1565b6110ec84614e02565b604001515b81515260016110ff85614f6b565b51600181111561111157611111616453565b1461111d57600061112b565b61112684614f6b565b604001515b815160200152519392505050565b610c22600060076118e1565b600061114f615767565b602081015151600b9052611161615781565b61116b82826119d9565b610160015192915050565b6000611180615767565b60208101515160049052611192615781565b61119c82826119d9565b6080015192915050565b6111ae615781565b6111c66111c036849003840184616f2f565b82614ff8565b5050565b60006111d4615767565b6020810180515160059052515160c001516001600160a01b03841690526111f9615781565b61120382826119d9565b60a001519392505050565b60408051606081018252600080825260208201819052918101919091526107e082614b92565b600061123e615767565b60208101805151600c905251516101a001516001600160a01b0384169052611264615781565b61126e82826119d9565b61018001519392505050565b6000611284615767565b602081015151600a9052611296615781565b6112a082826119d9565b610140015192915050565b6000606060005460028080546112c090616903565b80601f01602080910402602001604051908101604052809291908181526020018280546112ec90616903565b80156113395780601f1061130e57610100808354040283529160200191611339565b820191906000526020600020905b81548152906001019060200180831161131c57829003601f168201915b50505050509050915091509091565b6000600360005414156114635760006002805461136490616903565b80601f016020809104026020016040519081016040528092919081815260200182805461139090616903565b80156113dd5780601f106113b2576101008083540402835291602001916113dd565b820191906000526020600020905b8154815290600101906020018083116113c057829003601f168201915b50505050508060200190518101906113f59190616d87565b6040805160208101909152600081529091506000611412856151a1565b51600181111561142457611424616453565b1415611433576000815261145b565b600161143e856151a1565b51600181111561145057611450616453565b141561145b57600181525b519392505050565b610c22600060116118e1565b60408051606081018252600080825260208201819052918101919091526107e082614c1f565b61149d61583d565b6114a5615767565b602081810180515160079052805151610100908101518790529051510151018390526114cf615781565b6114d982826119d9565b60e00151949350505050565b60006114ef615767565b60208101515160069052611501615781565b61150b82826119d9565b60c0015192915050565b60408051606081018252600080825260208201819052918101919091526107e082614f6b565b6115436158d2565b600360005414156115fe5760006002805461155d90616903565b80601f016020809104026020016040519081016040528092919081815260200182805461158990616903565b80156115d65780601f106115ab576101008083540402835291602001916115d6565b820191906000526020600020905b8154815290600101906020018083116115b957829003601f168201915b50505050508060200190518101906115ee9190616d87565b90506115fc600060126118e1565b505b6107b7600060126118e1565b61162e60405180606001604052806000815260200160008152602001600081525090565b600360005414156117275760006002805461164890616903565b80601f016020809104026020016040519081016040528092919081815260200182805461167490616903565b80156116c15780601f10611696576101008083540402835291602001916116c1565b820191906000526020600020905b8154815290600101906020018083116116a457829003601f168201915b50505050508060200190518101906116d99190616d87565b905061170260408051608081018252600060208201818152928201819052606082015290815290565b60a082015181515260c082015181516020015260e09091015181516040015251919050565b6107b7600060096118e1565b60408051606081018252600080825260208201819052918101919091526107e0826151a1565b60408051606081018252600080825260208201819052918101919091526107e082614cac565b6000611789615767565b6020810180515160089052515161012001518390526117a6615781565b6117b082826119d9565b61010001519392505050565b6117c4615781565b6111c66117d6368490038401846170a9565b826119d9565b6117e461583d565b600360005414156118d9576000600280546117fe90616903565b80601f016020809104026020016040519081016040528092919081815260200182805461182a90616903565b80156118775780601f1061184c57610100808354040283529160200191611877565b820191906000526020600020905b81548152906001019060200180831161185a57829003601f168201915b505050505080602001905181019061188f9190616d87565b90506118996158f1565b6102608201518151526102808201518151602001526102a08201518151604001526102c08201518151606001526102e09091015181516080015251919050565b6107b76000600d5b816111c65760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff16600181111561195357611953616453565b14156119ca576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff16600181111561199457611994616453565b60018111156119a5576119a5616453565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6119e960036000541460496118e1565b8151611a049015806119fd57508251600154145b604a6118e1565b600080805560028054611a1690616903565b80601f0160208091040260200160405190810160405280929190818152602001828054611a4290616903565b8015611a8f5780601f10611a6457610100808354040283529160200191611a8f565b820191906000526020600020905b815481529060010190602001808311611a7257829003601f168201915b5050505050806020019051810190611aa79190616d87565b9050611ab1615904565b611ac06000194310604b6118e1565b7f90f78d2789a6109e9975643a13ff35a09a55d33e4894868496af77e17e5e13333385604051611af1929190617255565b60405180910390a1600060208501515151600c811115611b1357611b13616453565b1415612435576020808501515101518152611b30341560146118e1565b6101e082015160208083018051929092526101c0840180518201518351830152516040908101519251921515920191909152820151611b7d90611b76903390600061522e565b60156118e1565b8151815151611bbe916001600160a01b03918216911614611bb4576102208301518251516001600160a01b03908116911614611bb7565b60015b60166118e1565b805160400151611bd190151560176118e1565b80516020908101516001600160a01b039081166000908152600b835260408082208054600160ff199182168117909255865186015185168452828420805462ff000019169055865186015190941683526004855291819020805490931682179092558351918201519190920151909190611c4a90614e02565b516001811115611c5c57611c5c616453565b14611c68576000611c7c565b815160200151611c7790614e02565b604001515b611c8691906173db565b81516020908101516001600160a01b0390811660009081526004835260408082206001908101959095558551840151909216815260078352819020805460ff191684179055835190810151910151909190611ce090611907565b516001811115611cf257611cf2616453565b14611cfe576000611d12565b815160200151611d0d90611907565b604001515b611d1c91906173db565b81516020908101516001600160a01b03166000908152600782526040808220600190810194909455808501805183905280518401839052805190910182905280516060018290528051608001829052805160a001829052805160c001829052805160e00182905280516101000182905280516101200182905280516101400182905280516101600182905280516101800182905280516101a00182905280516101c00182905280516101e00182905280516102000182905280516102200182905280516102400182905280516102600182905280516102800182905280516102a00182905280516102c00182905280516102e00182905280516103000182905280516103200182905280516103400182905280516103600182905280516103800182905280516103a00182905280516103c00182905280516103e00182905280516104000182905280516104200182905280516104400182905280516104600182905280516104800182905280516104a00182905280516104c00182905280516104e00182905280516105000182905280516105200182905280516105400182905280516105600182905280516105800182905280516105a00182905280516105c00182905280516105e00182905280516106000182905280516106200182905280516106400182905280516106600182905280516106800182905280516106a00182905280516106c00182905280516106e00182905280516107000182905280516107200182905280516107400182905280516107600182905280516107800182905280516107a00182905280516107c00182905280516107e00182905280516108000182905280516108200182905280516108400182905280516108600182905280516108800182905280516108a00182905280516108c00182905280516108e00182905280516109000182905280516109200182905280516109400182905280516109600182905280516109800182905280516109a00182905280516109c00182905280516109e0018290528051610a00018290528051610a20018290528051610a40018290528051610a60018290528051610a80018290528051610aa0018290528051610ac0018290528051610ae0018290528051610b00018290528051610b20018290528051610b40018290528051610b60018290528051610b80018290528051610ba0018290528051610bc0018290528051610be0018290528051610c00018290528051610c20018290528051610c400182905251610c600152825101516120c990614e8f565b5160018111156120db576120db616453565b146120ea5780604001516120fe565b8051602001516120f990614e8f565b604001515b60608201526080810180516000908190528151602001819052905160c08301525b60648110156121f2578160600151816064811061213e5761213e6173f3565b602002015160e0830152600060c083015151600181111561216157612161616453565b141561217457600161010083015261219c565b600160c083015151600181111561218d5761218d616453565b141561219c5760006101008301525b6101208201805160019052516040018190526101008201516121bf5760006121c6565b60e0820151155b6121d4578160c001516121db565b8161012001515b60c0830152806121ea81617409565b91505061211f565b5060c081015160a0820190815281516020908101516001600160a01b03166000908152600c90915260409020805460ff19166001908117909155606083015191515161226b9291908181111561224a5761224a616453565b14612256576000612260565b8260a00151604001515b835160400151615244565b81516020908101516001600160a01b03166000908152600c9091526040902061229b916001909101906064615f01565b50604051600181527fafb8a3b7849cd9af222cd6c61b4ca96694d0cdd65b1a5a4f7492e339c96571e79060200160405180910390a160018352610220820151610140820180516001600160a01b0390921690915260608084018051602090810151845190910152610160850151835160409081019190915281518301518451909301929092525160809081015183519091015260e080850151835160a09081019190915261012080870151855160c09081019190915261024088015186519094019390935261010080880151865190151591015291860151935190910192909252825101519083015161238e91906173db565b610140808301805190910191909152606083018051610160908101518351909101525161018090810151915101526123c4615f3f565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015261014083015181830180519190915251439082015260808401519083015161241d91906000906152b8565b60208201516040015261242f81615320565b50614b8c565b600160208501515151600c81111561244f5761244f616453565b14156126475760208401515160400151610160820152612471341560186118e1565b6101e082015161018082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516124c2906124bb903390600061522e565b60196118e1565b610180828101516101a08301805191909152610160808401515182516020908101919091526102208601516101c0860180516001600160a01b03909216909152606080880180518401518351850152945182516040908101919091528551820151835190920191909152845160809081015183519091015260e080890151835160a090810191909152610120808b0151855160c0908101919091526102408c0151865190940193909352610100808c01518651901515910152918a0151845190920191909152880151825161014001528451840151825190940193909352925184015192519093019190915251600181527fca0e1e7213d3fb2df3a7fdcea4b5115989a6448f61b7c1fdc60063371ce8f834910160405180910390a1600160208401526125ed615f3f565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526101c08301518183018051919091525143910152608083015161018083015161241d91906000906152b8565b600260208501515151600c81111561266157612661616453565b141561290757602084015151606001516101e08201526126833415601a6118e1565b6101e082015161020082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516126d4906126cd903390600061522e565b601b6118e1565b8151612712906001600160a01b03163314612708578261022001516001600160a01b0316336001600160a01b03161461270b565b60015b601c6118e1565b6101e081018051516001600160a01b039081166000908152600b6020526040808220805460ff19166001179055925151909116815220805462ff000019169055606082015161018001516018111561277f5760018260600151610180015161277a91906173db565b612782565b60005b61022080830191825283015161024080840180516001600160a01b0390931690925260608086018051602090810151855190910152610160808801518551604001528151830151855190930192909252805160809081015185519091015260e080880151855160a090810191909152610120808a0151875160c090810191909152958a0151875190930192909252610100808a0151875190151591015293880151855190910152918601519251610140019290925251015190516101e08301515161284e9291906154d3565b61024082018051610160019190915261022082015190516101800152604051600181527ff3e39e9890f9b301d992b327ce85bc36238ddf4a3bcbeebd67410a205ee711b29060200160405180910390a1600160408401526128ad615f3f565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526102408301518183018051919091525143910152608083015161020083015161241d91906000906152b8565b600360208501515151600c81111561292157612921616453565b141561341f576020840151516080015161026082018190525161028083015161294a9190617424565b61028082015261295c3415601d6118e1565b806102800151826101e0015161297291906173db565b6102a082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516102808201516129c2916129bb9133919061522e565b601e6118e1565b610260810151516129d6901515601f6118e1565b6102c0810180516430b1ba34bb60d91b9052516040805191516001600160d81b0319166020830152612a56910160408051808303601f1901815282825280516020918201206102c0870151516001600160d81b0319169184019190915291016040516020818303038152906040528051906020012060001c1460206118e1565b612a7281610260015160000151836102600151101560216118e1565b6000612a7d336151a1565b516001811115612a8f57612a8f616453565b1415612aa25760006102e0820152612ace565b6001612aad336151a1565b516001811115612abf57612abf616453565b1415612ace5760016102e08201525b612ade816102e0015160226118e1565b610260810151516103008201908152336000818152600460205260409020805460ff1916600190811790915591519190612b1790614e02565b516001811115612b2957612b29616453565b14612b35576000612b43565b612b3e33614e02565b604001515b612b4d91906173db565b33600081815260046020908152604080832060019081019590955560079091529020805460ff1916831790556103008301519190612b8a90611907565b516001811115612b9c57612b9c616453565b14612ba8576000612bb6565b612bb133611907565b604001515b612bc091906173db565b33600081815260076020908152604080832060019081019590955561032086810180518590528051909301849052825190910183905281516060018390528151608001839052815160a001839052815160c001839052815160e00183905281516101000183905281516101200183905281516101400183905281516101600183905281516101800183905281516101a00183905281516101c00183905281516101e00183905281516102000183905281516102200183905281516102400183905281516102600183905281516102800183905281516102a00183905281516102c00183905281516102e00183905281516103000183905281510182905280516103400182905280516103600182905280516103800182905280516103a00182905280516103c00182905280516103e00182905280516104000182905280516104200182905280516104400182905280516104600182905280516104800182905280516104a00182905280516104c00182905280516104e00182905280516105000182905280516105200182905280516105400182905280516105600182905280516105800182905280516105a00182905280516105c00182905280516105e00182905280516106000182905280516106200182905280516106400182905280516106600182905280516106800182905280516106a00182905280516106c00182905280516106e00182905280516107000182905280516107200182905280516107400182905280516107600182905280516107800182905280516107a00182905280516107c00182905280516107e00182905280516108000182905280516108200182905280516108400182905280516108600182905280516108800182905280516108a00182905280516108c00182905280516108e00182905280516109000182905280516109200182905280516109400182905280516109600182905280516109800182905280516109a00182905280516109c00182905280516109e0018290528051610a00018290528051610a20018290528051610a40018290528051610a60018290528051610a80018290528051610aa0018290528051610ac0018290528051610ae0018290528051610b00018290528051610b20018290528051610b40018290528051610b60018290528051610b80018290528051610ba0018290528051610bc0018290528051610be0018290528051610c00018290528051610c20018290528051610c400182905251610c600152612f5d90614e8f565b516001811115612f6f57612f6f616453565b14612f7f57806103200151612f8d565b612f8833614e8f565b604001515b61034082015261036081018051600090819052815160200181905290516103a08301525b606481101561308b578161034001518160648110612fd157612fd16173f3565b60200201516103c083015260006103a0830151516001811115612ff657612ff6616453565b14156130095760016103e0830152613032565b60016103a083015151600181111561302357613023616453565b14156130325760006103e08301525b6104008201805160019052516040018190526103e082015161305557600061305d565b6103c0820151155b61306c57816103a00151613073565b8161040001515b6103a08301528061308381617409565b915050612fb1565b506103a08101516103808201908152336000908152600c60205260409020805460ff191660019081179091556103408301519151516130f9929190818111156130d6576130d6616453565b146130e25760006130ed565b826103800151604001515b61026084015151615244565b336000908152600c60205260409020613119916001909101906064615f01565b506102608082015151908301516131309190617443565b610420820152610260810151516102a083015161314d91906173db565b6104408201526102808201516102608201515161316a9190617424565b826102e0015161317a91906173db565b816104600181815250508061046001518161048001516000018181525050816102800151816104800151602001818152505080610420015181610480015160400181815250508061044001518161048001516060018181525050816102c0015181610480015160800181905250816102200151816104a00151600001906001600160a01b031690816001600160a01b031681525050816060015160200151816104a001516020018181525050816101600151816104a0015160400181905250816060015160600151816104a0015160600181905250816060015160800151816104a0015160800181815250508160e00151816104a0015160a0018181525050816101200151816104a0015160c00181905250806104800151816104a0015160e00181905250816101000151816104a001516101000190151590811515815250508160c00151816104a001516101200181815250508160a00151816104a0015161014001818152505081606001516101600151816104a00151610160018190525081606001516101800151816104a00151610180018181525050806104200151816104c001516000018181525050816102800151816104c001516020018181525050806104400151816104c001516040018181525050816102c00151816104c0015160600181905250806104600151816104c0015160800181815250507fe93f2e1a6e7d21df616c755ac2b8ca937b93b786051f192ee37605b577693859816104c001516040516133aa9190616577565b60405180910390a16104c081015160608401526133c5615f3f565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526104a0830151818301805191909152514391015260808301516102a083015161241d91906000906152b8565b600460208501515151600c81111561343957613439616453565b14156137e55761344b341560236118e1565b6101e08201516104e082018051919091526101c0830180516020908101518351909101525160409081015182519015159101526080830151905161349291906000906152b8565b8161050001819052506134b56134ae338460200151600061522e565b60246118e1565b60006134c0336151a1565b5160018111156134d2576134d2616453565b14156134e5576000610520820152613511565b60016134f0336151a1565b51600181111561350257613502616453565b14156135115760016105208201525b61352181610520015160256118e1565b610500810151515161353690151560266118e1565b61354860008360a001511160276118e1565b600161355333611907565b51600181111561356557613565616453565b1461357157600061357f565b61357a33611907565b604001515b610540820181905260a083015161359991111560286118e1565b6135ac60008261054001511160296118e1565b8160a001518260600151602001518261054001516135ca9190617424565b6135d4919061745a565b6105608201819052610580820181905261050082015151516135f9911115602a6118e1565b61058081015161050082015151516136119190617443565b6105a0820180519190915261050082018051516020908101518351820152905151604090810151925192151592019190915282015161058082015161365891903390615563565b336000818152600860205260409020805460ff191660019081179091556105608301519161368590614c1f565b51600181111561369757613697616453565b146136a35760006136b1565b6136ac33614c1f565b604001515b6136bb91906173db565b33600081815260086020908152604080832060019081019590955560099091529020805460ff19168317905581906136f290614cac565b51600181111561370457613704616453565b1461371057600061371e565b61371933614cac565b604001515b61372891906173db565b336000908152600960209081526040918290206001019290925561056083015190519081527fe37b2f861d5dee6b6a74063e2cd498a32d41a2e8b1a3058a323e5cd9acb076cc910160405180910390a1610560810151608084015261378b615f3f565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835190910152606084015181830180519190915251439101526105008201516105a083015161241d91906000906152b8565b600560208501515151600c8111156137ff576137ff616453565b1415613a115760208401515160c001516105c08201526138213415602b6118e1565b6101e08201516105e082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516138729061386b903390600061522e565b602c6118e1565b81516138b0906001600160a01b031633146138a6578261022001516001600160a01b0316336001600160a01b0316146138a9565b60015b602d6118e1565b604051600181527ff40ad07fb32378913946a28325e997198137965654b97f21264ebeea04a8e12f9060200160405180910390a1600160a0808501919091526105c082015151610600830180516001600160a01b0390921690915260608085018051602090810151845190910152610160808701518451604001528151830151845190930192909252805160809081015184519091015260e080870151845186015261012080880151855160c0908101919091526102408901518651909301929092526101008089015186519015159101529087015184519091015292850151825161014001528251810151825190910152905161018090810151915101526139b7615f3f565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835190910152610600830151818301805191909152514391015260808301516105e083015161241d91906000906152b8565b600660208501515151600c811115613a2b57613a2b616453565b1415613d1b57613a3d3415602e6118e1565b6101e082015161062082018051919091526101c08301805160209081015183519091015251604090810151825190151591015260808301519051613a8491906000906152b8565b816106400181905250613aa7613aa0338460200151600061522e565b602f6118e1565b8151613ae5906001600160a01b03163314613adb578261022001516001600160a01b0316336001600160a01b031614613ade565b60015b60306118e1565b613af86000836102e001511160316118e1565b6102e08201516106408201515151613b1391111560326118e1565b6102e08201516106408201515151613b2b9190617443565b61066082018051919091526106408201805151602090810151835182015290515160409081015192519215159201919091528201516102e0830151613b7291903390615563565b6106808101805160009052610280830151815160209081019190915261026084015182516040908101919091526102a085015183516060908101919091526102c086015184516080908101919091526102208701516106a0870180516001600160a01b0390921690915282880180518601518251870152610160808a015183518701528151850151835190950194909452805183015182519093019290925260e080890151825160a090810191909152610120808b0151845160c0908101919091529851845190930192909252610100808b0151845190151591015296890151825190910152948701518551610140015280518201518551909201919091525161018090810151935101929092529051600181527f6a31411ee0aff4a3e5a1822e6486f47931e60c0003abf2b31ded9b0708a7bacb910160405180910390a1600160c0840152613cc0615f3f565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526106a0830151818301805191909152514391015261064082015161066083015161241d91906000906152b8565b600760208501515151600c811115613d3557613d35616453565b14156140ea5760208401515161010001516106c0820152613d58341560336118e1565b6101e08201516106e082018051919091526101c083018051602090810151835182015290516040908101519251921515920191909152820151613da990613da2903390600061522e565b60346118e1565b8151613de7906001600160a01b03163314613ddd578261022001516001600160a01b0316336001600160a01b031614613de0565b60015b60356118e1565b6106c081015151613dfb90151560366118e1565b613e126000826106c00151602001511160376118e1565b6430b1ba34bb60d91b816107000151600001906001600160d81b03191690816001600160d81b03191681525050816102e001518161072001516000018181525050806106c00151602001518161072001516020018181525050806106c00151600001518161072001516040018181525050816102a00151816107200151606001818152505080610700015181610720015160800181905250816102200151816107400151600001906001600160a01b031690816001600160a01b0316815250508160600151602001518161074001516020018181525050816101600151816107400151604001819052508160600151606001518161074001516060018190525081606001516080015181610740015160800181815250508160e0015181610740015160a001818152505081610120015181610740015160c0018190525080610720015181610740015160e001819052508161010001518161074001516101000190151590811515815250508160c001518161074001516101200181815250508160a0015181610740015161014001818152505081606001516101600151816107400151610160018190525081606001516101800151816107400151610180018181525050806106c00151600001518161076001516000018181525050806106c00151602001518161076001516020018181525050816102a00151816107600151604001818152505080610700015181610760015160600181905250816102e0015181610760015160800181815250507fa11a2f4405663dda985fc4298b8dda9376be14ddaef2f9ff9706ae77dbf6c73f8161076001516040516140759190616577565b60405180910390a161076081015160e0840152614090615f3f565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835190910152610740830151818301805191909152514391015260808301516106e083015161241d91906000906152b8565b600860208501515151600c81111561410457614104616453565b14156143745760208401515161012001516107808201819052516107a0820152614130341560386118e1565b806107a00151826101e0015161414691906173db565b6107c082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516107a08201516141969161418f9133919061522e565b60396118e1565b81516141d4906001600160a01b031633146141ca578261022001516001600160a01b0316336001600160a01b0316146141cd565b60015b603a6118e1565b6141e76000826107a0015111603b6118e1565b6102208201516107e0820180516001600160a01b039092169091526107808201515181516020015261016083015181516040015260608084018051820151835190920191909152516080908101519151015260e082015161424a906001906173db565b6107e08201805160a00191909152610120830151815160c090810191909152610240840151825160e00152610100808501519251921515920191909152610780820151519083015161429c91906173db565b6107e082018051610120019190915260a08301518151610140015260608301805161016090810151835190910152516101809081015191510152604051600181527f7fb5fb3064f105c4d76af37672f1b6f02949acd6aa02d0c7dd4f8fa9a2a66b499060200160405180910390a1600161010084015261431a615f3f565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526107e0830151818301805191909152514391015260808301516107c083015161241d91906000906152b8565b600960208501515151600c81111561438e5761438e616453565b14156145e45760208401515161014001516108008201526143b13415603c6118e1565b6101e082015161082082018051919091526101c083018051602090810151835182015290516040908101519251921515920191909152820151614402906143fb903390600061522e565b603d6118e1565b614415600083610140015114603e6118e1565b8151614453906001600160a01b03163314614449578261022001516001600160a01b0316336001600160a01b03161461444c565b60015b603f6118e1565b6108008101515161084082015152610140820151614473906001906173db565b61084082018051602090810192909252805143604091820152610220850151610860850180516001600160a01b039092169091526060808701805186015183518701526101608089015184518601528151830151845190930192909252805160809081015184519091015260e080890151845160a0908101919091529551845160c0908101919091526102408a0151855190920191909152610100808a0151855190151591015288015183516101200152938701518251610140015283518101518251909101529151610180908101519251019190915251600181527f36224e8c582c8edb3e6719cb13f17146bf82736ad5ebfda519be2270326541e6910160405180910390a1600161012084015261458a615f3f565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526108608301518183018051919091525143910152608083015161082083015161241d91906000906152b8565b600a60208501515151600c8111156145fe576145fe616453565b14156148c157614610341560406118e1565b6101e082015161088082018051919091526101c0830180516020908101518351820152905160409081015192519215159201919091528201516146619061465a903390600061522e565b60416118e1565b815161469f906001600160a01b03163314614695578261022001516001600160a01b0316336001600160a01b031614614698565b60015b60426118e1565b6108a0810180516430b1ba34bb60d91b9052516040805191516001600160d81b031916602083015261471f910160408051808303601f1901815282825280516020918201206102c0870151516001600160d81b0319169184019190915291016040516020818303038152906040528051906020012060001c1460436118e1565b6102e08201516108c08201805191909152610280830151815160209081019190915281516000604091820181905283516060908101919091528186015184516080908101919091526102208701516108e0870180516001600160a01b0390921690915282880180518601518251870152610160808a015183518701528151850151835190950194909452805183015182519093019290925260e080890151825160a090810191909152610120808b0151845160c0908101919091529851845190930192909252610100808b0151845190151591015296890151825190910152948701518551610140015280518201518551909201919091525161018090810151935101929092529051600181527f96c639246137611db9cee7bf1f5c72cd47c64fba97f050a66c4bf3af39b8eb56910160405180910390a16001610140840152614867615f3f565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526108e08301518183018051919091525143910152608083015161088083015161241d91906000906152b8565b600b60208501515151600c8111156148db576148db616453565b14156149fa576148ed341560446118e1565b6101e082015161090082018051919091526101c08301805160209081015183518201529051604090810151925192151592019190915282015161493e90614937903390600061522e565b60456118e1565b336000908152600a6020908152604091829020805462ff00ff1916620100011790559051600181527fedad108362dd3fe6c0be06fed2edd74fd42e124623e1e81b761abefb39d9a725910160405180910390a160016101608401526149a1615f3f565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608401518183018051919091525143910152608083015161090083015161241d91906000906152b8565b600c60208501515151600c811115614a1457614a14616453565b1415614b8c576020840151516101a00151610920820152614a37341560466118e1565b6101e082015161094082018051919091526101c083018051602090810151835182015290516040908101519251921515920191909152820151614a8890614a81903390600061522e565b60476118e1565b8151614ac6906001600160a01b03163314614abc578261022001516001600160a01b0316336001600160a01b031614614abf565b60015b60486118e1565b610920810151516001600160a01b03166000908152600b6020908152604091829020805462ffffff191690559051600181527f85f69cfe48149e7b60f134f9d4e9460f3ae9df55b4d6a08ab042453a47dcc4d3910160405180910390a16001610180840152614b33615f3f565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608401518183018051919091525143910152608083015161094083015161241d91906000906152b8565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115614bde57614bde616453565b14156119ca576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111561199457611994616453565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff166001811115614c6b57614c6b616453565b14156119ca576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff16600181111561199457611994616453565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526009602052604090205460ff166001811115614cf857614cf8616453565b14156119ca576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff16600181111561199457611994616453565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600a602052604090205460ff166001811115614d8557614d85616453565b14156119ca576001600160a01b0382166000908152600a6020526040908190208151606081019092528054829060ff166001811115614dc657614dc6616453565b6001811115614dd757614dd7616453565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115614e4e57614e4e616453565b14156119ca576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561199457611994616453565b614e9761587f565b60016001600160a01b0383166000908152600c602052604090205460ff166001811115614ec657614ec6616453565b14156119ca576001600160a01b0382166000908152600c6020526040908190208151606081019092528054829060ff166001811115614f0757614f07616453565b6001811115614f1857614f18616453565b81528154610100900460ff161515602082015260408051610c808101808352919092019190600184019060649082845b815481526020019060010190808311614f48575050505050815250509050919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115614fb757614fb7616453565b14156119ca576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561199457611994616453565b615008600360005414604e6118e1565b815161502390158061501c57508251600154145b604f6118e1565b60008080556002805461503590616903565b80601f016020809104026020016040519081016040528092919081815260200182805461506190616903565b80156150ae5780601f10615083576101008083540402835291602001916150ae565b820191906000526020600020905b81548152906001019060200180831161509157829003601f168201915b50505050508060200190518101906150c69190616d87565b90506150d860001943101560506118e1565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a161512b3415604c6118e1565b8051615143906001600160a01b03163314604d6118e1565b61514b615f3f565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183518201526060840151828401805191909152805143930192909252608084015191510152614b8c81615320565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600b602052604090205460ff1660018111156151ed576151ed616453565b14156119ca576001600160a01b0382166000908152600b6020526040908190208151606081019092528054829060ff166001811115614dc657614dc6616453565b600061523c8385308561557c565b949350505050565b61524c615f5f565b60005b60648110156152985784816064811061526a5761526a6173f3565b6020020151828260648110615281576152816173f3565b60200201528061529081617409565b91505061524f565b50818184606481106152ac576152ac6173f3565b60200201529392505050565b6152c0615f7e565b60005b600181101561530c578481600181106152de576152de6173f3565b60200201518282600181106152f5576152f56173f3565b60200201528061530481617409565b9150506152c3565b50818184600181106152ac576152ac6173f3565b6040805160208082018352600082528301519091015151518152615342615fc9565b8251516001600160a01b039081168252835160209081015182168184015284516040908101518185015281860180515160608087019190915281518301516080808801919091528251516101409081015160a0808a01919091528451516101209081015160c0808c01919091528651519092015160e0808c0191909152865151610100908101511515908c0152865151830151918b01919091528551519091015187015191890191909152835151850151610160890152835151850151516101808901528351518501518601516101a08901528351850151516101c0890152835185015151516101e0890152885161020089015283515151909616610220880152825151860151610240880152825151860151840151610260880152825151860151850151610280880152825151860151909101516102a087015281515185015101516102c0860152515190920151516102e084015260036000554360015590516154af918391016175f5565b60405160208183030381529060405260029080519060200190614b8c9291906160fd565b6154db6158d2565b60005b6019811015615535578481601981106154f9576154f96173f3565b6020020151828260198110615510576155106173f3565b6001600160a01b0390921660209290920201528061552d81617409565b9150506154de565b5081818460198110615549576155496173f3565b6001600160a01b0390921660209290920201529392505050565b61556e838383615656565b61557757600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916155e3916177b3565b60006040518083038185875af1925050503d8060008114615620576040519150601f19603f3d011682016040523d82523d6000602084013e615625565b606091505b509150915061563682826001615727565b508080602001905181019061564b91906177cf565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916156b5916177b3565b60006040518083038185875af1925050503d80600081146156f2576040519150601f19603f3d011682016040523d82523d6000602084013e6156f7565b606091505b509150915061570882826002615727565b508080602001905181019061571d91906177cf565b9695505050505050565b60608315615736575081610a5b565b8251156157465782518084602001fd5b60405163100960cb60e01b8152600481018390526024016118fe565b905290565b604051806040016040528060008152602001615762616170565b604080516101a08101825260008082526020820181905291810191909152606081016157ab61583d565b81526000602082018190526040820181905260608201526080016157cd61583d565b815260006020820181905260408201819052606082018190526080820181905260a09091015290565b6040805160608101825260009181019182529081908152602001615762604080518082019091526000808252602082015290565b60405180602001604052806157626157f6565b6040518060a0016040528060008152602001600081526020016000815260200161587260408051602081019091526000815290565b8152602001600081525090565b6040805160608101825260008082526020820152908101615762615f5f565b6040805160c0810182526000606082018181526080830182905260a083018290528252602082018190529181019190915290565b6040518061032001604052806019906020820280368337509192915050565b604051806020016040528061576261583d565b604080516109c0810182526000610960820181815261098083018290526109a083018290528252825160608101845281815260208082018390528185019290925290820152908101615954615f5f565b8152602001615961615f5f565b815260408051606080820183526000808352602080840182905283850182905280860193909352835180830185528181528084018290528085018290528486015283518083018552818152808401829052808501829052828601526080850181905260a08501819052835191820184528082529181018290529182015260c082015260e0016159ee616183565b8152602001615a13604080516060810182526000602082018181529282015290815290565b81526040805160608101825260008082526020828101829052928201529101908152602001615a406157f6565b8152602001615a4d616183565b8152602001615a6760408051602081019091526000815290565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001615a9b616183565b8152602001615ab66040518060200160405280600081525090565b815260200160008152602001615ae8604051806060016040528060008152602001600081526020016000151581525090565b8152602001615b0260408051602081019091526000815290565b81526000602082018190526040820152606001615b1d615f5f565b8152602001615b2a615f5f565b815260408051606080820183526000808352602080840182905283850182905280860193909352835180830185528181528084018290528085018290528486015283518083018552818152808401829052808501829052828601526080850181905260a08501819052835191820184528082529181018290529182015260c0909101908152602001600081526020016000815260200160008152602001615bcf6161fc565b8152602001615bdc616183565b8152602001615be961583d565b81526040805160608101825260008082526020828101829052928201529101908152602001615c16615f7e565b8152602001600015158152602001600081526020016000815260200160008152602001615c5f604051806060016040528060008152602001600081526020016000151581525090565b8152602001615c7960408051602081019091526000815290565b81526040805160608101825260008082526020828101829052928201529101908152602001615ca6616183565b81526040805160608101825260008082526020828101829052928201529101908152602001615cd3615f7e565b81526040805160608101825260008082526020828101829052928201529101908152602001615d006161fc565b8152602001615d0d616183565b8152602001615d2f604051806040016040528060008152602001600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001615d6960408051602081019091526000815290565b8152602001615d766161fc565b8152602001615d83616183565b8152602001615d9061583d565b8152602001615dab6040518060200160405280600081525090565b815260200160008152602001615ddd604051806060016040528060008152602001600081526020016000151581525090565b8152602001615dea616183565b8152602001615e1660408051608081018252600060208201818152928201819052606082015290815290565b81526040805160608101825260008082526020828101829052928201529101908152602001615e4361589e565b8152602001615e50616183565b81526040805160608101825260008082526020828101829052928201529101908152602001615e8a60408051602081019091526000815290565b8152602001615e976161fc565b8152602001615ea4616183565b81526040805160608101825260008082526020828101829052928201529101908152602001615ede60408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291015290565b8260648101928215615f2f579160200282015b82811115615f2f578251825591602001919060010190615f14565b50615f3b929150616238565b5090565b6040518060400160405280615f5261624d565b8152602001615762616279565b60405180610c8001604052806064906020820280368337509192915050565b60405180602001604052806001905b615fb3604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081615f8d5790505090565b604080516103008101825260008082526020820152908101615ff660408051602081019091526000815290565b8152602001616003616183565b8152602001616010615f7e565b815260200160008152602001600081526020016000815260200160001515815260200161603b61589e565b81526020016000815260200161604f6157f6565b8152604080516020818101909252600081529101908152602001616083604080518082019091526000808252602082015290565b81526040805160608101825260008082526020828101829052928201529101908152602001600081526020016000815260200160006001600160a01b031681526020016160ce6161fc565b815260200160008152602001600081526020016000815260200161587260408051602081019091526000815290565b82805461610990616903565b90600052602060002090601f01602090048101928261612b5760008555615f2f565b82601f1061614457805160ff1916838001178555615f2f565b82800160010185558215615f2f5791820182811115615f2f578251825591602001919060010190615f14565b60405180602001604052806157626162a0565b604080516101a081018252600080825260208201529081016161a36157f6565b81526020016161b06163e4565b815260200160008152602001600081526020016161cb61589e565b81526020016161d86161fc565b815260200160001515815260200160008152602001600081526020016158726158d2565b6040518060a001604052806000815260200160008152602001600081526020016000815260200161576260408051602081019091526000815290565b5b80821115615f3b5760008155600101616239565b604080516060810182526000808252602082015290810161576260408051602081019091526000815290565b604051806060016040528061628c616183565b815260200160008152602001615762615f7e565b604080516101c08101909152806000815260408051606081018252600080825260208281018290529282015291019081526020016162f4604080516060810182526000602082018181529282015290815290565b815260200161630e60408051602081019091526000815290565b81526020016163296040518060200160405280600081525090565b81526000602082015260400161634a60408051602081019091526000815290565b8152602001600015158152602001616375604051806040016040528060008152602001600081525090565b81526020016163906040518060200160405280600081525090565b81526020016163bc60408051608081018252600060208201818152928201819052606082015290815290565b8152600060208201819052604082015260600161576260408051602081019091526000815290565b60405180610c8001604052806064905b60408051808201909152600080825260208201528152602001906001900390816163f45790505090565b6001600160a01b038116811461643357600080fd5b50565b60006020828403121561644857600080fd5b8135610a5b8161641e565b634e487b7160e01b600052602160045260246000fd5b6002811061643357616433616453565b8151606082019061648981616469565b808352506020830151151560208301526040830151604083015292915050565b6000806000606084860312156164be57600080fd5b83356164c98161641e565b925060208401356164d98161641e565b929592945050506040919091013590565b815160608201906164fa81616469565b8083525060208301511515602083015260408301511515604083015292915050565b63ffffffff60e01b81515116825260208101516155776020840182805182526020908101516001600160e01b031916910152565b606081016107e0828461651c565b60006020828403121561657057600080fd5b5035919050565b815181526020808301519082015260408083015190820152606080830151516001600160d81b031916908201526080918201519181019190915260a00190565b8151610cc08201906165c881616469565b825260208381015115158184015260408085015190840160005b60648110156165ff578251825291830191908301906001016165e2565b5050505092915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561664257616642616609565b60405290565b6040516060810167ffffffffffffffff8111828210171561664257616642616609565b6040516020810167ffffffffffffffff8111828210171561664257616642616609565b6040516101a0810167ffffffffffffffff8111828210171561664257616642616609565b604051610300810167ffffffffffffffff8111828210171561664257616642616609565b6040516101c0810167ffffffffffffffff8111828210171561664257616642616609565b6001600160e01b03198116811461643357600080fd5b60006040828403121561672257600080fd5b61672a61661f565b905081358152602082013561673e816166fa565b602082015292915050565b60006040828403121561675b57600080fd5b610a5b8383616710565b60006060828403121561677757600080fd5b61677f616648565b905081358152602082013560208201526040820135604082015292915050565b6000606082840312156167b157600080fd5b610a5b8383616765565b6167da8282518051825260208082015190830152604090810151910152565b6020810151606083015260400151608090910152565b60a081016107e082846167bb565b8151815260208083015190820152604081016107e0565b60006040828403121561682757600080fd5b50919050565b60005b83811015616848578181015183820152602001616830565b83811115614b8c5750506000910152565b828152604060208201526000825180604084015261687e81606085016020870161682d565b601f01601f1916919091016060019392505050565b600080604083850312156168a657600080fd5b50508035926020909101359150565b8060005b6019811015614b8c5781516001600160a01b03168452602093840193909101906001016168b9565b61032081016107e082846168b5565b60006102a0828403121561682757600080fd5b600181811c9082168061691757607f821691505b6020821081141561682757634e487b7160e01b600052602260045260246000fd5b8051610c228161641e565b60006020828403121561695557600080fd5b61695d61666b565b82519091506001600160d81b03198116811461697857600080fd5b815292915050565b60006020828403121561699257600080fd5b61699a61666b565b90508151616978816166fa565b6000604082840312156169b957600080fd5b6169c161661f565b905081518152602082015161673e816166fa565b6000606082840312156169e757600080fd5b6169ef61661f565b90506169fb8383616980565b815261673e83602084016169a7565b600082601f830112616a1b57600080fd5b60408051610c80810181811067ffffffffffffffff82111715616a4057616a40616609565b825280611900850186811115616a5557600080fd5b855b81811015616a9457848189031215616a6f5760008081fd5b616a7761661f565b815181526020808301518183015290845292909201918401616a57565b50919695505050505050565b600081830360a0811215616ab357600080fd5b616abb616648565b91506060811215616acb57600080fd5b50616ad4616648565b82518152602083015160208201526040830151604082015280825250606082015160208201526080820151604082015292915050565b600060a08284031215616b1c57600080fd5b60405160a0810181811067ffffffffffffffff82111715616b3f57616b3f616609565b806040525080915082518152602083015160208201526040830151604082015260608301516060820152616b768460808501616943565b60808201525092915050565b801515811461643357600080fd5b8051610c2281616b82565b600082601f830112616bac57600080fd5b60405161032080820182811067ffffffffffffffff82111715616bd157616bd1616609565b60405283018185821115616be457600080fd5b845b82811015616c07578051616bf98161641e565b825260209182019101616be6565b509195945050505050565b6000611ec08284031215616c2557600080fd5b616c2d61668e565b9050616c3882616938565b815260208201516020820152616c5183604084016169d5565b6040820152616c638360a08401616a0a565b60608201526119a082015160808201526119c082015160a0820152616c8c836119e08401616aa0565b60c0820152616c9f83611a808401616b0a565b60e0820152616cb1611b208301616b90565b610100820152611b40820151610120820152611b60820151610140820152616cdd83611b808401616b9b565b610160820152611ea082015161018082015292915050565b600060608284031215616d0757600080fd5b616d0f616648565b905081518152602082015160208201526040820151616d2d81616b82565b604082015292915050565b600082601f830112616d4957600080fd5b616d5161666b565b80606080850186811115616d6457600080fd5b855b81811015616a9457616d788882616cf5565b85526020909401938201616d66565b60006123808284031215616d9a57600080fd5b616da26166b2565b616dab83616938565b8152616db960208401616938565b6020820152616dcb8460408501616943565b6040820152616ddd8460608501616c12565b6060820152616df084611f208501616d38565b6080820152611f8083015160a0820152611fa083015160c0820152611fc083015160e0820152616e23611fe08401616b90565b610100820152616e37846120008501616aa0565b6101208201526120a0830151610140820152616e57846120c085016169d5565b610160820152616e6b846121208501616980565b610180820152616e7f8461214085016169a7565b6101a0820152616e93846121808501616cf5565b6101c08201526121e08301516101e0820152612200830151610200820152616ebe6122208401616938565b610220820152616ed2846122408501616b0a565b6102408201526122e08301516102608201526123008301516102808201526123208301516102a0820152616f0a846123408501616943565b6102c082015261236092909201516102e083015250919050565b8035610c2281616b82565b600060408284031215616f4157600080fd5b6040516040810181811067ffffffffffffffff82111715616f6457616f64616609565b604052823581526020830135616f7981616b82565b60208201529392505050565b8035600d8110610c2257600080fd5b600060608284031215616fa657600080fd5b616fae616648565b90508135616fbb8161641e565b81526020820135616fcb8161641e565b806020830152506040820135604082015292915050565b600060408284031215616ff457600080fd5b616ffc61666b565b90506169788383616710565b60006020828403121561701a57600080fd5b61702261666b565b905081356169788161641e565b60006020828403121561704157600080fd5b61704961666b565b9135825250919050565b60006040828403121561706557600080fd5b61706d61661f565b9050813581526020820135602082015292915050565b60006060828403121561709557600080fd5b61709d61666b565b90506169788383616765565b60008183036102a08112156170bd57600080fd5b6170c561661f565b8335815261028080601f19840112156170dd57600080fd5b6170e561666b565b92506170ef6166d6565b6170fb60208701616f85565b815261710a8760408801616f94565b602082015261711c8760a08801616fe2565b604082015261712e8760e08801617008565b60608201526101006171428882890161702f565b6080830152610120617155818901616f24565b60a08401526101406171698a828b01617008565b60c085015261016061717c818b01616f24565b60e08601526101806171908c828d01617053565b858701526171a28c6101c08d0161702f565b848701526171b48c6101e08d01617083565b838701526171c56102408c01616f24565b828701526171d66102608c01616f24565b8187015250505050506171eb87838801617008565b6101a082015283525060208101919091529392505050565b600d811061721357617213616453565b9052565b6111c6828251805182526020908101516001600160e01b031916910152565b6111c68282518051825260208082015190830152604090810151910152565b60006102c08201905060018060a01b038416825282516020830152602083015151617284604084018251617203565b60208181015180516001600160a01b03908116606087015291810151909116608085015260409081015160a08501528101516172c360c0850182617217565b5060608101516101006172e181860183516001600160a01b03169052565b608083015191506101206172f781870184519052565b60a0840151925061014061730e8188018515159052565b60c0850151935061016061732d81890186516001600160a01b03169052565b60e08601519450610180617344818a018715159052565b9386015194506101a0936173648986018780518252602090810151910152565b83870151516101e08a01528287015195506173836102008a0187617236565b90860151151561026089015285015180151561028089015293506173a5915050565b919091015180516001600160a01b03166102a08501529050509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156173ee576173ee6173c5565b500190565b634e487b7160e01b600052603260045260246000fd5b600060001982141561741d5761741d6173c5565b5060010190565b600081600019048311821515161561743e5761743e6173c5565b500290565b600082821015617455576174556173c5565b500390565b60008261747757634e487b7160e01b600052601260045260246000fd5b500490565b8060005b6064811015614b8c5761749e84835180518252602090810151910152565b6040939093019260209190910190600101617480565b80518252602080820151908301526040808201519083015260608082015190830152608090810151516001600160d81b031916910152565b80516001600160a01b03168252602081015160208301526040810151617515604084018261651c565b50606081015161752860a084018261747c565b5060808101516119a083015260a08101516119c083015260c08101516175526119e08401826167bb565b5060e0810151617566611a808401826174b4565b506101008101511515611b20830152610120810151611b40830152610140810151611b608301526101608101516175a1611b808401826168b5565b506101800151611ea09190910152565b8060005b6001811015614b8c576175df84835180518252602080820151908301526040908101511515910152565b60609390930192602091909101906001016175b5565b81516001600160a01b031681526123808101602083015161762160208401826001600160a01b03169052565b50604083015161763e6040840182516001600160d81b0319169052565b50606083015161765160608401826174ec565b506080830151617665611f208401826175b1565b5060a0830151611f8083015260c0830151611fa083015260e0830151611fc08301526101008301511515611fe08301526101208301516176a96120008401826167bb565b506101408301516120a08301526101608301516176ca6120c084018261651c565b50610180830151516001600160e01b03199081166121208401526101a084015180516121408501526020908101519091166121608401526101c08401518051612180850152908101516121a08401526040015115156121c08301526101e08301516121e08301526102008301516122008301526102208301516001600160a01b03166122208301526102408301516177666122408401826174b4565b506102608301516122e08301526102808301516123008301526102a08301516123208301526102c0830151516001600160d81b0319166123408301526102e0909201516123609091015290565b600082516177c581846020870161682d565b9190910192915050565b6000602082840312156177e157600080fd5b8151610a5b81616b8256fea264697066735822122007a1b18d58859df74e09ffd4b25f127760db908745b95c403a5025ca7c106cbd64736f6c634300080c0033`,
  BytecodeLen: 38152,
  Which: `oD`,
  version: 7,
  views: {
    claimSTBT: `claimSTBT`,
    saleLocked: `saleLocked`,
    totSTBTD: `totSTBTD`,
    totSTBTDRec: `totSTBTDRec`,
    vBtBal: `vBtBal`,
    vCcCm: `vCcCm`,
    vCurrSale: `vCurrSale`,
    vHash: `vHash`,
    vOptedIn: `vOptedIn`,
    vcVersion: `vcVersion`,
    wlMember: `wlMember`,
    wlMembers: `wlMembers`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:452:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:121:35:after expr stmt semicolon',
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
  "aST": aST,
  "addCoopId": addCoopId,
  "addWL": addWL,
  "buyOS": buyOS,
  "cBT": cBT,
  "cCM": cCM,
  "claimOSpr": claimOSpr,
  "createOS": createOS,
  "dBT": dBT,
  "docHash": docHash,
  "endOS": endOS,
  "optIn": optIn,
  "remWL": remWL
  };
export const _APIs = {
  aST: aST,
  addCoopId: addCoopId,
  addWL: addWL,
  buyOS: buyOS,
  cBT: cBT,
  cCM: cCM,
  claimOSpr: claimOSpr,
  createOS: createOS,
  dBT: dBT,
  docHash: docHash,
  endOS: endOS,
  optIn: optIn,
  remWL: remWL
  };
