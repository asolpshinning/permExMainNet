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
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc10 = stdlib.T_Object({
    ctcMan: ctc0,
    currDistr: ctc2,
    cv: ctc3,
    distrHis: ctc6,
    distrIndex: ctc4,
    distrNum: ctc2,
    docHash: ctc7,
    saleLocked: ctc8,
    totBT: ctc2,
    totST: ctc2,
    wlArr: ctc9,
    wlIndex: ctc4
    });
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc8]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc13 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc14 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc16 = stdlib.T_Null;
  const ctc17 = stdlib.T_Data({
    None: ctc16,
    Some: ctc2
    });
  const ctc18 = stdlib.T_Data({
    None: ctc16,
    Some: ctc16
    });
  const ctc19 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc20 = stdlib.T_Data({
    None: ctc16,
    Some: ctc19
    });
  const map0_ctc = ctc17;
  
  const map1_ctc = ctc17;
  
  const map2_ctc = ctc17;
  
  const map3_ctc = ctc17;
  
  const map4_ctc = ctc17;
  
  const map5_ctc = ctc17;
  
  const map6_ctc = ctc18;
  
  const map7_ctc = ctc20;
  
  
  return {
    infos: {
      claimSTBT: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213] = svs;
            return (await ((async (_v2187 ) => {
                const v2187 = stdlib.protect(ctc0, _v2187, null);
              
              const v2188 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2187), null);
              const v2189 = stdlib.fromSome(v2188, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v2190 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2187), null);
              const v2191 = stdlib.fromSome(v2190, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v2192 = [v2189, v2191];
              
              return v2192;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc13
        },
      saleLocked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213] = svs;
            return (await ((async () => {
              
              
              return v2186;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        },
      totSTBTD: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213] = svs;
            return (await ((async () => {
              
              const v2185 = [v2182, v2183, v2184];
              
              return v2185;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc14
        },
      totSTBTDRec: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213] = svs;
            return (await ((async (_v2194 ) => {
                const v2194 = stdlib.protect(ctc0, _v2194, null);
              
              const v2195 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v2194), null);
              const v2196 = stdlib.fromSome(v2195, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v2197 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, v2194), null);
              const v2198 = stdlib.fromSome(v2197, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v2199 = stdlib.protect(map5_ctc, await viewlib.viewMapRef(5, v2194), null);
              const v2200 = stdlib.fromSome(v2199, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v2201 = [v2196, v2198, v2200];
              
              return v2201;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc14
        },
      vBtBal: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213] = svs;
            return (await ((async () => {
              
              
              return v2212;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      vCcCm: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213] = svs;
            return (await ((async () => {
              
              const v2214 = [v1831, v2213];
              
              return v2214;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc15
        },
      vHash: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213] = svs;
            return (await ((async () => {
              
              
              return v2208;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      vcVersion: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213] = svs;
            return (await ((async () => {
              
              
              return v2209;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      wlMember: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213] = svs;
            return (await ((async (_v2203 ) => {
                const v2203 = stdlib.protect(ctc0, _v2203, null);
              
              const v2204 = stdlib.protect(map6_ctc, await viewlib.viewMapRef(6, v2203), null);
              let v2205;
              switch (v2204[0]) {
                case 'None': {
                  const v2206 = v2204[1];
                  v2205 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v2207 = v2204[1];
                  v2205 = true;
                  
                  break;
                  }
                }
              
              return v2205;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        },
      wlMembers: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213] = svs;
            stdlib.assert(false, 'illegal view')
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc9
        }
      },
    views: {
      3: [ctc0, ctc1, ctc10, ctc12, ctc2, ctc2, ctc2, ctc8, ctc7, ctc3, ctc11, ctc4, ctc2, ctc0]
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc6]);
  return {
    mapDataTy: ctc7
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    authorizedST: ctc1,
    bT: ctc7,
    companyName: ctc8,
    lockSale: ctc9,
    managerAddr: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc10, ctc10, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc10]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc17 = stdlib.T_Tuple([ctc16]);
  const ctc18 = stdlib.T_Data({
    aST0_634: ctc12,
    addWL0_634: ctc13,
    cBT0_634: ctc14,
    cCM0_634: ctc13,
    dBT0_634: ctc15,
    docHash0_634: ctc17,
    optIn0_634: ctc14,
    remWL0_634: ctc13
    });
  const ctc19 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc20 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc21 = stdlib.T_Array(ctc20, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc22 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc23 = stdlib.T_Object({
    ctcMan: ctc10,
    currDistr: ctc1,
    cv: ctc19,
    distrHis: ctc21,
    distrIndex: ctc4,
    distrNum: ctc1,
    docHash: ctc16,
    saleLocked: ctc9,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc22,
    wlIndex: ctc4
    });
  const ctc24 = stdlib.T_Tuple([ctc4, ctc4, ctc9]);
  const ctc25 = stdlib.T_Array(ctc24, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
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
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: false,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc6;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: false,
    ty: map7_ctc
    });
  
  
  const v1812 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1813 = [v1812];
  const v1819 = 'I have deployed';
  const v1820 = stdlib.protect(ctc11, await interact.getParams(v1819), {
    at: './index.rsh:81:103:application',
    fs: ['at ./index.rsh:80:17:application call to [unknown function] (defined at: ./index.rsh:80:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v1821 = v1820.authorizedST;
  const v1822 = v1820.bT;
  const v1823 = v1820.companyName;
  const v1824 = v1820.lockSale;
  const v1825 = v1820.managerAddr;
  
  const txn1 = await (ctc.sendrecv({
    args: [v1823, v1824, v1825, v1822, v1821],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:85:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8, ctc9, ctc10, ctc7, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:85:13:decimal', stdlib.UInt_max, '0'), []],
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
      
      const {data: [v1832, v1833, v1834, v1835, v1836], secs: v1838, time: v1837, didSend: v42, from: v1831 } = txn1;
      
      const v1839 = v1813[stdlib.checkedBigNumberify('./index.rsh:85:13:dot', stdlib.UInt_max, '0')];
      const v1841 = v1839[stdlib.checkedBigNumberify('./index.rsh:85:13:dot', stdlib.UInt_max, '1')];
      const v1842 = v1839[stdlib.checkedBigNumberify('./index.rsh:85:13:dot', stdlib.UInt_max, '2')];
      const v1843 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1841, v1842];
      const v1844 = stdlib.Array_set(v1813, stdlib.checkedBigNumberify('./index.rsh:85:13:dot', stdlib.UInt_max, '0'), v1843);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1835
        });
      ;
      const v1847 = [v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831];
      const v1849 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v2049 = [v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849];
      const v2050 = '1.02';
      const v2152 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
      const v2154 = {
        ctcMan: v1834,
        currDistr: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        cv: v2050,
        distrHis: v2049,
        distrIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        distrNum: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        docHash: v2152,
        saleLocked: v1833,
        totBT: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        totST: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        wlArr: v1847,
        wlIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2155 = v2154;
      const v2156 = v1837;
      const v2158 = v1844;
      
      if (await (async () => {
        
        return true;})()) {
        const v2182 = v2155.totST;
        const v2183 = v2155.totBT;
        const v2184 = v2155.distrNum;
        const v2186 = v2155.saleLocked;
        const v2208 = v2155.docHash;
        const v2209 = v2155.cv;
        const v2210 = v2158[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
        const v2211 = v2210[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
        const v2212 = stdlib.cast("UInt", "UInt256", v2211, false);
        const v2213 = v2155.ctcMan;
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1835
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
    tys: [ctc8, ctc9, ctc10, ctc7, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1832, v1833, v1834, v1835, v1836], secs: v1838, time: v1837, didSend: v42, from: v1831 } = txn1;
  const v1839 = v1813[stdlib.checkedBigNumberify('./index.rsh:85:13:dot', stdlib.UInt_max, '0')];
  const v1841 = v1839[stdlib.checkedBigNumberify('./index.rsh:85:13:dot', stdlib.UInt_max, '1')];
  const v1842 = v1839[stdlib.checkedBigNumberify('./index.rsh:85:13:dot', stdlib.UInt_max, '2')];
  const v1843 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1841, v1842];
  const v1844 = stdlib.Array_set(v1813, stdlib.checkedBigNumberify('./index.rsh:85:13:dot', stdlib.UInt_max, '0'), v1843);
  ;
  ;
  const v1847 = [v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831, v1831];
  const v1849 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2049 = [v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849, v1849];
  const v2050 = '1.02';
  const v2152 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
  const v2154 = {
    ctcMan: v1834,
    currDistr: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    cv: v2050,
    distrHis: v2049,
    distrIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    distrNum: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    docHash: v2152,
    saleLocked: v1833,
    totBT: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    totST: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    wlArr: v1847,
    wlIndex: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2155 = v2154;
  let v2156 = v1837;
  let v2158 = v1844;
  
  while (await (async () => {
    
    return true;})()) {
    const v2182 = v2155.totST;
    const v2183 = v2155.totBT;
    const v2184 = v2155.distrNum;
    const v2186 = v2155.saleLocked;
    const v2208 = v2155.docHash;
    const v2209 = v2155.cv;
    const v2210 = v2158[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
    const v2211 = v2210[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
    const v2212 = stdlib.cast("UInt", "UInt256", v2211, false);
    const v2213 = v2155.ctcMan;
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc18],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213],
        evt_cnt: 0,
        funcNum: 3,
        lct: v2156,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:319:21:decimal', stdlib.UInt_max, '0'), []],
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
          
          const {data: [], secs: v5384, time: v5383, didSend: v1604, from: v5382 } = txn3;
          
          ;
          const cv2155 = v2155;
          const cv2156 = v5383;
          const cv2158 = v2158;
          
          await (async () => {
            const v2155 = cv2155;
            const v2156 = cv2156;
            const v2158 = cv2158;
            
            if (await (async () => {
              
              return true;})()) {
              const v2182 = v2155.totST;
              const v2183 = v2155.totBT;
              const v2184 = v2155.distrNum;
              const v2186 = v2155.saleLocked;
              const v2208 = v2155.docHash;
              const v2209 = v2155.cv;
              const v2210 = v2158[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
              const v2211 = v2210[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
              const v2212 = stdlib.cast("UInt", "UInt256", v2211, false);
              const v2213 = v2155.ctcMan;
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1835
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
        tys: [ctc10, ctc7, ctc23, ctc25, ctc1, ctc1, ctc1, ctc9, ctc16, ctc19, ctc24, ctc4, ctc1, ctc10],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v5384, time: v5383, didSend: v1604, from: v5382 } = txn3;
      ;
      const v5385 = stdlib.addressEq(v1831, v5382);
      stdlib.assert(v5385, {
        at: './index.rsh:319:21:dot',
        fs: ['at ./index.rsh:318:40:application call to [unknown function] (defined at: ./index.rsh:318:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv2155 = v2155;
      const cv2156 = v5383;
      const cv2158 = v2158;
      
      v2155 = cv2155;
      v2156 = cv2156;
      v2158 = cv2158;
      
      continue;
      }
    else {
      const {data: [v2451], secs: v2453, time: v2452, didSend: v1167, from: v2450 } = txn2;
      switch (v2451[0]) {
        case 'aST0_634': {
          const v2454 = v2451[1];
          undefined /* setApiDetails */;
          ;
          const v2537 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
          const v2538 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
          const v2539 = [v2211, v2537, v2538];
          const v2540 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v2539);
          ;
          const v2542 = v2454[stdlib.checkedBigNumberify('./index.rsh:201:13:spread', stdlib.UInt_max, '0')];
          const v2543 = v2454[stdlib.checkedBigNumberify('./index.rsh:201:13:spread', stdlib.UInt_max, '1')];
          const v2544 = v2454[stdlib.checkedBigNumberify('./index.rsh:201:13:spread', stdlib.UInt_max, '2')];
          const v2545 = stdlib.addressEq(v2542, v1831);
          const v2547 = stdlib.addressEq(v2542, v2213);
          const v2548 = v2545 ? true : v2547;
          stdlib.assert(v2548, {
            at: './index.rsh:213:24:application',
            fs: ['at ./index.rsh:212:13:application call to [unknown function] (defined at: ./index.rsh:212:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2549 = stdlib.gt256(v2544, stdlib.checkedBigNumberify('./index.rsh:214:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v2549, {
            at: './index.rsh:214:24:application',
            fs: ['at ./index.rsh:212:13:application call to [unknown function] (defined at: ./index.rsh:212:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v2543, null);
          const v2551 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2543), null);
          const v2552 = stdlib.fromSome(v2551, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2553 = stdlib.add256(v2552, v2544);
          await stdlib.mapSet(map0, v2543, v2553);
          const v2554 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2543), null);
          const v2555 = stdlib.fromSome(v2554, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2556 = stdlib.add256(v2555, v2544);
          await stdlib.mapSet(map3, v2543, v2556);
          const v2558 = stdlib.add256(v2182, v2544);
          const v2559 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v2543), null);
          const v2561 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v2563 = stdlib.fromSome(v2559, v2561);
          const v2564 = ['None', null];
          const v2565 = await stdlib.Array_asyncReduce([v2563], v2564, async([v2567], v2566, v2568) => {
            let v2569;
            switch (v2566[0]) {
              case 'None': {
                const v2570 = v2566[1];
                v2569 = true;
                
                break;
                }
              case 'Some': {
                const v2571 = v2566[1];
                v2569 = false;
                
                break;
                }
              }
            const v2572 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:223:53:decimal', stdlib.UInt_max, '0'), v2567);
            const v2573 = v2569 ? v2572 : false;
            const v2574 = ['Some', v2568];
            const v2575 = v2573 ? v2574 : v2566;
            
            return v2575;})
          const v2576 = stdlib.fromSome(v2565, stdlib.checkedBigNumberify('./index.rsh:92:41:decimal', stdlib.UInt_max, '0'));
          const v2577 = stdlib.cast("UInt256", "UInt", v2544, false);
          const v2579 = stdlib.Array_set(v2563, v2576, v2577);
          await stdlib.mapSet(map7, v2543, v2579);
          const v2580 = true;
          await txn2.getOutput('aST', 'v2580', ctc9, v2580);
          const v2590 = v2155.currDistr;
          const v2592 = v2155.distrHis;
          const v2593 = v2155.distrIndex;
          const v2599 = v2155.wlArr;
          const v2600 = v2155.wlIndex;
          const v2601 = {
            ctcMan: v2213,
            currDistr: v2590,
            cv: v2209,
            distrHis: v2592,
            distrIndex: v2593,
            distrNum: v2184,
            docHash: v2208,
            saleLocked: v2186,
            totBT: v2183,
            totST: v2558,
            wlArr: v2599,
            wlIndex: v2600
            };
          const cv2155 = v2601;
          const cv2156 = v2452;
          const cv2158 = v2540;
          
          v2155 = cv2155;
          v2156 = cv2156;
          v2158 = cv2158;
          
          continue;
          break;
          }
        case 'addWL0_634': {
          const v2820 = v2451[1];
          undefined /* setApiDetails */;
          ;
          const v2903 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
          const v2904 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
          const v2905 = [v2211, v2903, v2904];
          const v2906 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v2905);
          ;
          const v2972 = v2820[stdlib.checkedBigNumberify('./index.rsh:157:13:spread', stdlib.UInt_max, '0')];
          const v2973 = stdlib.addressEq(v2450, v1831);
          const v2975 = stdlib.addressEq(v2450, v2213);
          const v2976 = v2973 ? true : v2975;
          stdlib.assert(v2976, {
            at: './index.rsh:168:24:application',
            fs: ['at ./index.rsh:167:13:application call to [unknown function] (defined at: ./index.rsh:167:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v2972, null);
          const v2978 = v2155.wlIndex;
          const v2979 = stdlib.ge(v2978, stdlib.checkedBigNumberify('./index.rsh:173:80:decimal', stdlib.UInt_max, '24'));
          const v2981 = stdlib.add(v2978, stdlib.checkedBigNumberify('./index.rsh:173:105:decimal', stdlib.UInt_max, '1'));
          const v2982 = v2979 ? stdlib.checkedBigNumberify('./index.rsh:173:85:decimal', stdlib.UInt_max, '0') : v2981;
          const v2984 = v2155.currDistr;
          const v2986 = v2155.distrHis;
          const v2987 = v2155.distrIndex;
          const v2993 = v2155.wlArr;
          const v3003 = stdlib.Array_set(v2993, v2982, v2972);
          const v3004 = {
            ctcMan: v2213,
            currDistr: v2984,
            cv: v2209,
            distrHis: v2986,
            distrIndex: v2987,
            distrNum: v2184,
            docHash: v2208,
            saleLocked: v2186,
            totBT: v2183,
            totST: v2182,
            wlArr: v3003,
            wlIndex: v2982
            };
          const v3005 = true;
          await txn2.getOutput('addWL', 'v3005', ctc9, v3005);
          const cv2155 = v3004;
          const cv2156 = v2452;
          const cv2158 = v2906;
          
          v2155 = cv2155;
          v2156 = cv2156;
          v2158 = cv2158;
          
          continue;
          break;
          }
        case 'cBT0_634': {
          const v3186 = v2451[1];
          undefined /* setApiDetails */;
          ;
          const v3269 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
          const v3270 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
          const v3271 = [v2211, v3269, v3270];
          const v3272 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v3271);
          ;
          const v3382 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2450), null);
          let v3383;
          switch (v3382[0]) {
            case 'None': {
              const v3384 = v3382[1];
              v3383 = false;
              
              break;
              }
            case 'Some': {
              const v3385 = v3382[1];
              v3383 = true;
              
              break;
              }
            }
          stdlib.assert(v3383, {
            at: './index.rsh:284:24:application',
            fs: ['at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3386 = v3272[stdlib.checkedBigNumberify('./index.rsh:286:40:application', stdlib.UInt_max, '0')];
          const v3387 = v3386[stdlib.checkedBigNumberify('./index.rsh:286:40:application', stdlib.UInt_max, '0')];
          const v3388 = stdlib.cast("UInt", "UInt256", v3387, false);
          const v3389 = stdlib.gt256(v3388, stdlib.checkedBigNumberify('./index.rsh:286:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v3389, {
            at: './index.rsh:286:24:application',
            fs: ['at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
            msg: 'well, balance(bT) is 0',
            who: 'Creator'
            });
          const v3391 = stdlib.gt256(v2182, stdlib.checkedBigNumberify('./index.rsh:287:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v3391, {
            at: './index.rsh:287:24:application',
            fs: ['at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
            msg: 'totST is 0. This means there should be no distributions yet',
            who: 'Creator'
            });
          const v3393 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2450), null);
          const v3394 = stdlib.fromSome(v3393, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3395 = stdlib.ge256(v2182, v3394);
          stdlib.assert(v3395, {
            at: './index.rsh:288:24:application',
            fs: ['at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
            msg: 'weirdly, totST is less than totAllST[this]',
            who: 'Creator'
            });
          const v3398 = stdlib.gt256(v3394, stdlib.checkedBigNumberify('./index.rsh:289:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v3398, {
            at: './index.rsh:289:24:application',
            fs: ['at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
            msg: 'totAllST[this] is 0. This means you should not rec distr',
            who: 'Creator'
            });
          const v3401 = v2155.currDistr;
          const v3402 = stdlib.mul256(v3394, v3401);
          const v3404 = stdlib.div256(v3402, v2182);
          const v3405 = stdlib.cast("UInt256", "UInt", v3404, false);
          const v3408 = stdlib.le(v3405, v3387);
          stdlib.assert(v3408, {
            at: './index.rsh:291:24:application',
            fs: ['at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
            msg: 'weirdly, trying to withdraw more than available balance',
            who: 'Creator'
            });
          const v3415 = stdlib.sub(v3387, v3405);
          const v3418 = v3386[stdlib.checkedBigNumberify('./index.rsh:293:50:application', stdlib.UInt_max, '1')];
          const v3419 = v3386[stdlib.checkedBigNumberify('./index.rsh:293:50:application', stdlib.UInt_max, '2')];
          const v3420 = [v3415, v3418, v3419];
          const v3421 = stdlib.Array_set(v3272, stdlib.checkedBigNumberify('./index.rsh:293:50:application', stdlib.UInt_max, '0'), v3420);
          ;
          const v3422 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v2450), null);
          const v3423 = stdlib.fromSome(v3422, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3424 = stdlib.add256(v3423, v3404);
          await stdlib.mapSet(map4, v2450, v3424);
          const v3425 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v2450), null);
          const v3426 = stdlib.fromSome(v3425, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3427 = stdlib.add256(v3426, stdlib.checkedBigNumberify('./index.rsh:295:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.mapSet(map5, v2450, v3427);
          await txn2.getOutput('cBT', 'v3404', ctc1, v3404);
          const cv2155 = v2155;
          const cv2156 = v2452;
          const cv2158 = v3421;
          
          v2155 = cv2155;
          v2156 = cv2156;
          v2158 = cv2158;
          
          continue;
          break;
          }
        case 'cCM0_634': {
          const v3552 = v2451[1];
          undefined /* setApiDetails */;
          ;
          const v3635 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
          const v3636 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
          const v3637 = [v2211, v3635, v3636];
          const v3638 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v3637);
          ;
          const v3801 = v3552[stdlib.checkedBigNumberify('./index.rsh:300:13:spread', stdlib.UInt_max, '0')];
          const v3802 = stdlib.addressEq(v2450, v1831);
          const v3804 = stdlib.addressEq(v2450, v2213);
          const v3805 = v3802 ? true : v3804;
          stdlib.assert(v3805, {
            at: './index.rsh:311:24:application',
            fs: ['at ./index.rsh:310:13:application call to [unknown function] (defined at: ./index.rsh:310:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3806 = true;
          await txn2.getOutput('cCM', 'v3806', ctc9, v3806);
          const v3814 = v2155.currDistr;
          const v3816 = v2155.distrHis;
          const v3817 = v2155.distrIndex;
          const v3823 = v2155.wlArr;
          const v3824 = v2155.wlIndex;
          const v3825 = {
            ctcMan: v3801,
            currDistr: v3814,
            cv: v2209,
            distrHis: v3816,
            distrIndex: v3817,
            distrNum: v2184,
            docHash: v2208,
            saleLocked: v2186,
            totBT: v2183,
            totST: v2182,
            wlArr: v3823,
            wlIndex: v3824
            };
          const cv2155 = v3825;
          const cv2156 = v2452;
          const cv2158 = v3638;
          
          v2155 = cv2155;
          v2156 = cv2156;
          v2158 = cv2158;
          
          continue;
          break;
          }
        case 'dBT0_634': {
          const v3918 = v2451[1];
          undefined /* setApiDetails */;
          const v3956 = v3918[stdlib.checkedBigNumberify('./index.rsh:244:13:spread', stdlib.UInt_max, '0')];
          const v3957 = stdlib.cast("UInt256", "UInt", v3956, false);
          ;
          const v3998 = stdlib.add(v2211, v3957);
          const v4001 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
          const v4002 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
          const v4003 = [v3998, v4001, v4002];
          const v4004 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v4003);
          ;
          const v4197 = stdlib.addressEq(v2450, v1831);
          const v4199 = stdlib.addressEq(v2450, v2213);
          const v4200 = v4197 ? true : v4199;
          stdlib.assert(v4200, {
            at: './index.rsh:256:24:application',
            fs: ['at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v4202 = stdlib.gt(v3957, stdlib.checkedBigNumberify('./index.rsh:257:37:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v4202, {
            at: './index.rsh:257:24:application',
            fs: ['at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v4204 = stdlib.add256(v2183, v3956);
          const v4208 = v2155.distrHis;
          const v4209 = v2155.distrIndex;
          const v4215 = v2155.wlArr;
          const v4216 = v2155.wlIndex;
          const v4219 = stdlib.add256(v2184, stdlib.checkedBigNumberify('./index.rsh:260:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v4221 = {
            ctcMan: v2213,
            currDistr: v3956,
            cv: v2209,
            distrHis: v4208,
            distrIndex: v4209,
            distrNum: v4219,
            docHash: v2208,
            saleLocked: v2186,
            totBT: v4204,
            totST: v2182,
            wlArr: v4215,
            wlIndex: v4216
            };
          const v4222 = true;
          await txn2.getOutput('dBT', 'v4222', ctc9, v4222);
          const cv2155 = v4221;
          const cv2156 = v2452;
          const cv2158 = v4004;
          
          v2155 = cv2155;
          v2156 = cv2156;
          v2158 = cv2158;
          
          continue;
          break;
          }
        case 'docHash0_634': {
          const v4284 = v2451[1];
          undefined /* setApiDetails */;
          ;
          const v4367 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
          const v4368 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
          const v4369 = [v2211, v4367, v4368];
          const v4370 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v4369);
          ;
          const v4599 = v4284[stdlib.checkedBigNumberify('./index.rsh:140:13:spread', stdlib.UInt_max, '0')];
          const v4600 = stdlib.addressEq(v2450, v1831);
          const v4602 = stdlib.addressEq(v2450, v2213);
          const v4603 = v4600 ? true : v4602;
          stdlib.assert(v4603, {
            at: './index.rsh:151:24:application',
            fs: ['at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v4605 = v2155.currDistr;
          const v4607 = v2155.distrHis;
          const v4608 = v2155.distrIndex;
          const v4614 = v2155.wlArr;
          const v4615 = v2155.wlIndex;
          const v4616 = {
            ctcMan: v2213,
            currDistr: v4605,
            cv: v2209,
            distrHis: v4607,
            distrIndex: v4608,
            distrNum: v2184,
            docHash: v4599,
            saleLocked: v2186,
            totBT: v2183,
            totST: v2182,
            wlArr: v4614,
            wlIndex: v4615
            };
          const v4617 = true;
          await txn2.getOutput('docHash', 'v4617', ctc9, v4617);
          const cv2155 = v4616;
          const cv2156 = v2452;
          const cv2158 = v4370;
          
          v2155 = cv2155;
          v2156 = cv2156;
          v2158 = cv2158;
          
          continue;
          break;
          }
        case 'optIn0_634': {
          const v4650 = v2451[1];
          undefined /* setApiDetails */;
          ;
          const v4733 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
          const v4734 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
          const v4735 = [v2211, v4733, v4734];
          const v4736 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v4735);
          ;
          const v4994 = true;
          await txn2.getOutput('optIn', 'v4994', ctc9, v4994);
          const cv2155 = v2155;
          const cv2156 = v2452;
          const cv2158 = v4736;
          
          v2155 = cv2155;
          v2156 = cv2156;
          v2158 = cv2158;
          
          continue;
          break;
          }
        case 'remWL0_634': {
          const v5016 = v2451[1];
          undefined /* setApiDetails */;
          ;
          const v5099 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
          const v5100 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
          const v5101 = [v2211, v5099, v5100];
          const v5102 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v5101);
          ;
          const v5368 = v5016[stdlib.checkedBigNumberify('./index.rsh:182:13:spread', stdlib.UInt_max, '0')];
          const v5369 = stdlib.addressEq(v2450, v1831);
          const v5371 = stdlib.addressEq(v2450, v2213);
          const v5372 = v5369 ? true : v5371;
          stdlib.assert(v5372, {
            at: './index.rsh:193:24:application',
            fs: ['at ./index.rsh:192:13:application call to [unknown function] (defined at: ./index.rsh:192:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v5368, undefined /* Nothing */);
          const v5374 = true;
          await txn2.getOutput('remWL', 'v5374', ctc9, v5374);
          const cv2155 = v2155;
          const cv2156 = v2452;
          const cv2158 = v5102;
          
          v2155 = cv2155;
          v2156 = cv2156;
          v2158 = cv2158;
          
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc15 = stdlib.T_Object({
    ctcMan: ctc7,
    currDistr: ctc1,
    cv: ctc9,
    distrHis: ctc11,
    distrIndex: ctc4,
    distrNum: ctc1,
    docHash: ctc12,
    saleLocked: ctc13,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc14,
    wlIndex: ctc4
    });
  const ctc16 = stdlib.T_Tuple([ctc4, ctc4, ctc13]);
  const ctc17 = stdlib.T_Array(ctc16, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc18 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc7]);
  const ctc20 = stdlib.T_Tuple([]);
  const ctc21 = stdlib.T_Tuple([ctc1]);
  const ctc22 = stdlib.T_Tuple([ctc12]);
  const ctc23 = stdlib.T_Data({
    aST0_634: ctc18,
    addWL0_634: ctc19,
    cBT0_634: ctc20,
    cCM0_634: ctc19,
    dBT0_634: ctc21,
    docHash0_634: ctc22,
    optIn0_634: ctc20,
    remWL0_634: ctc19
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
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc6;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  
  const [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc7, ctc8, ctc15, ctc17, ctc1, ctc1, ctc1, ctc13, ctc12, ctc9, ctc16, ctc4, ctc1, ctc7]);
  const v2266 = stdlib.protect(ctc18, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:204:13:application call to [unknown function] (defined at: ./index.rsh:204:13:function exp)', 'at ./index.rsh:111:35:application call to "runaST0_634" (defined at: ./index.rsh:201:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: 'in',
    who: 'aST'
    });
  const v2267 = v2266[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2269 = v2266[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2274 = stdlib.addressEq(v2267, v1831);
  const v2276 = stdlib.addressEq(v2267, v2213);
  const v2277 = v2274 ? true : v2276;
  stdlib.assert(v2277, {
    at: './index.rsh:205:23:application',
    fs: ['at ./index.rsh:204:13:application call to [unknown function] (defined at: ./index.rsh:204:29:function exp)', 'at ./index.rsh:204:13:application call to [unknown function] (defined at: ./index.rsh:204:13:function exp)', 'at ./index.rsh:111:35:application call to "runaST0_634" (defined at: ./index.rsh:201:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v2278 = stdlib.gt256(v2269, stdlib.checkedBigNumberify('./index.rsh:206:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2278, {
    at: './index.rsh:206:23:application',
    fs: ['at ./index.rsh:204:13:application call to [unknown function] (defined at: ./index.rsh:204:29:function exp)', 'at ./index.rsh:204:13:application call to [unknown function] (defined at: ./index.rsh:204:13:function exp)', 'at ./index.rsh:111:35:application call to "runaST0_634" (defined at: ./index.rsh:201:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v2284 = ['aST0_634', v2266];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213, v2284],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:210:30:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:210:34:decimal', stdlib.UInt_max, '0'), v1835]]],
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
      
      const {data: [v2451], secs: v2453, time: v2452, didSend: v1167, from: v2450 } = txn1;
      
      switch (v2451[0]) {
        case 'aST0_634': {
          const v2454 = v2451[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aST"
            });
          ;
          const v2537 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
          const v2538 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
          const v2539 = [v2211, v2537, v2538];
          const v2540 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v2539);
          ;
          const v2543 = v2454[stdlib.checkedBigNumberify('./index.rsh:201:13:spread', stdlib.UInt_max, '1')];
          const v2544 = v2454[stdlib.checkedBigNumberify('./index.rsh:201:13:spread', stdlib.UInt_max, '2')];
          await stdlib.simMapSet(sim_r, 6, v2543, null);
          const v2551 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2543), null);
          const v2552 = stdlib.fromSome(v2551, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2553 = stdlib.add256(v2552, v2544);
          await stdlib.simMapSet(sim_r, 0, v2543, v2553);
          const v2554 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2543), null);
          const v2555 = stdlib.fromSome(v2554, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2556 = stdlib.add256(v2555, v2544);
          await stdlib.simMapSet(sim_r, 3, v2543, v2556);
          const v2558 = stdlib.add256(v2182, v2544);
          const v2559 = stdlib.protect(map7_ctc, await stdlib.simMapRef(sim_r, 7, v2543), null);
          const v2561 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v2563 = stdlib.fromSome(v2559, v2561);
          const v2564 = ['None', null];
          const v2565 = await stdlib.Array_asyncReduce([v2563], v2564, async([v2567], v2566, v2568) => {
            let v2569;
            switch (v2566[0]) {
              case 'None': {
                const v2570 = v2566[1];
                v2569 = true;
                
                break;
                }
              case 'Some': {
                const v2571 = v2566[1];
                v2569 = false;
                
                break;
                }
              }
            const v2572 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:223:53:decimal', stdlib.UInt_max, '0'), v2567);
            const v2573 = v2569 ? v2572 : false;
            const v2574 = ['Some', v2568];
            const v2575 = v2573 ? v2574 : v2566;
            
            return v2575;})
          const v2576 = stdlib.fromSome(v2565, stdlib.checkedBigNumberify('./index.rsh:92:41:decimal', stdlib.UInt_max, '0'));
          const v2577 = stdlib.cast("UInt256", "UInt", v2544, false);
          const v2579 = stdlib.Array_set(v2563, v2576, v2577);
          await stdlib.simMapSet(sim_r, 7, v2543, v2579);
          const v2580 = true;
          const v2581 = await txn1.getOutput('aST', 'v2580', ctc13, v2580);
          
          const v2590 = v2155.currDistr;
          const v2592 = v2155.distrHis;
          const v2593 = v2155.distrIndex;
          const v2599 = v2155.wlArr;
          const v2600 = v2155.wlIndex;
          const v2601 = {
            ctcMan: v2213,
            currDistr: v2590,
            cv: v2209,
            distrHis: v2592,
            distrIndex: v2593,
            distrNum: v2184,
            docHash: v2208,
            saleLocked: v2186,
            totBT: v2183,
            totST: v2558,
            wlArr: v2599,
            wlIndex: v2600
            };
          const v8088 = v2601;
          const v8090 = v2540;
          const v8091 = v2601.totST;
          const v8092 = v2601.totBT;
          const v8093 = v2601.distrNum;
          const v8094 = v2601.saleLocked;
          const v8095 = v2601.docHash;
          const v8096 = v2601.cv;
          const v8097 = v2540[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
          const v8098 = v8097[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
          const v8099 = stdlib.cast("UInt", "UInt256", v8098, false);
          const v8100 = v2601.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addWL0_634': {
          const v2820 = v2451[1];
          
          break;
          }
        case 'cBT0_634': {
          const v3186 = v2451[1];
          
          break;
          }
        case 'cCM0_634': {
          const v3552 = v2451[1];
          
          break;
          }
        case 'dBT0_634': {
          const v3918 = v2451[1];
          
          break;
          }
        case 'docHash0_634': {
          const v4284 = v2451[1];
          
          break;
          }
        case 'optIn0_634': {
          const v4650 = v2451[1];
          
          break;
          }
        case 'remWL0_634': {
          const v5016 = v2451[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc8, ctc15, ctc17, ctc1, ctc1, ctc1, ctc13, ctc12, ctc9, ctc16, ctc4, ctc1, ctc7, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v2451], secs: v2453, time: v2452, didSend: v1167, from: v2450 } = txn1;
  switch (v2451[0]) {
    case 'aST0_634': {
      const v2454 = v2451[1];
      undefined /* setApiDetails */;
      ;
      const v2537 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
      const v2538 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
      const v2539 = [v2211, v2537, v2538];
      const v2540 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v2539);
      ;
      const v2542 = v2454[stdlib.checkedBigNumberify('./index.rsh:201:13:spread', stdlib.UInt_max, '0')];
      const v2543 = v2454[stdlib.checkedBigNumberify('./index.rsh:201:13:spread', stdlib.UInt_max, '1')];
      const v2544 = v2454[stdlib.checkedBigNumberify('./index.rsh:201:13:spread', stdlib.UInt_max, '2')];
      const v2545 = stdlib.addressEq(v2542, v1831);
      const v2547 = stdlib.addressEq(v2542, v2213);
      const v2548 = v2545 ? true : v2547;
      stdlib.assert(v2548, {
        at: './index.rsh:213:24:application',
        fs: ['at ./index.rsh:212:13:application call to [unknown function] (defined at: ./index.rsh:212:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      const v2549 = stdlib.gt256(v2544, stdlib.checkedBigNumberify('./index.rsh:214:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v2549, {
        at: './index.rsh:214:24:application',
        fs: ['at ./index.rsh:212:13:application call to [unknown function] (defined at: ./index.rsh:212:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      await stdlib.mapSet(map6, v2543, null);
      const v2551 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2543), null);
      const v2552 = stdlib.fromSome(v2551, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2553 = stdlib.add256(v2552, v2544);
      await stdlib.mapSet(map0, v2543, v2553);
      const v2554 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2543), null);
      const v2555 = stdlib.fromSome(v2554, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2556 = stdlib.add256(v2555, v2544);
      await stdlib.mapSet(map3, v2543, v2556);
      const v2558 = stdlib.add256(v2182, v2544);
      const v2559 = stdlib.protect(map7_ctc, await stdlib.mapRef(map7, v2543), null);
      const v2561 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v2563 = stdlib.fromSome(v2559, v2561);
      const v2564 = ['None', null];
      const v2565 = await stdlib.Array_asyncReduce([v2563], v2564, async([v2567], v2566, v2568) => {
        let v2569;
        switch (v2566[0]) {
          case 'None': {
            const v2570 = v2566[1];
            v2569 = true;
            
            break;
            }
          case 'Some': {
            const v2571 = v2566[1];
            v2569 = false;
            
            break;
            }
          }
        const v2572 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:223:53:decimal', stdlib.UInt_max, '0'), v2567);
        const v2573 = v2569 ? v2572 : false;
        const v2574 = ['Some', v2568];
        const v2575 = v2573 ? v2574 : v2566;
        
        return v2575;})
      const v2576 = stdlib.fromSome(v2565, stdlib.checkedBigNumberify('./index.rsh:92:41:decimal', stdlib.UInt_max, '0'));
      const v2577 = stdlib.cast("UInt256", "UInt", v2544, false);
      const v2579 = stdlib.Array_set(v2563, v2576, v2577);
      await stdlib.mapSet(map7, v2543, v2579);
      const v2580 = true;
      const v2581 = await txn1.getOutput('aST', 'v2580', ctc13, v2580);
      if (v1167) {
        stdlib.protect(ctc0, await interact.out(v2454, v2581), {
          at: './index.rsh:202:13:application',
          fs: ['at ./index.rsh:202:13:application call to [unknown function] (defined at: ./index.rsh:202:13:function exp)', 'at ./index.rsh:225:20:application call to "res" (defined at: ./index.rsh:212:13:function exp)', 'at ./index.rsh:212:13:application call to [unknown function] (defined at: ./index.rsh:212:13:function exp)'],
          msg: 'out',
          who: 'aST'
          });
        }
      else {
        }
      
      const v2590 = v2155.currDistr;
      const v2592 = v2155.distrHis;
      const v2593 = v2155.distrIndex;
      const v2599 = v2155.wlArr;
      const v2600 = v2155.wlIndex;
      const v2601 = {
        ctcMan: v2213,
        currDistr: v2590,
        cv: v2209,
        distrHis: v2592,
        distrIndex: v2593,
        distrNum: v2184,
        docHash: v2208,
        saleLocked: v2186,
        totBT: v2183,
        totST: v2558,
        wlArr: v2599,
        wlIndex: v2600
        };
      const v8088 = v2601;
      const v8090 = v2540;
      const v8091 = v2601.totST;
      const v8092 = v2601.totBT;
      const v8093 = v2601.distrNum;
      const v8094 = v2601.saleLocked;
      const v8095 = v2601.docHash;
      const v8096 = v2601.cv;
      const v8097 = v2540[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
      const v8098 = v8097[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
      const v8099 = stdlib.cast("UInt", "UInt256", v8098, false);
      const v8100 = v2601.ctcMan;
      return;
      
      break;
      }
    case 'addWL0_634': {
      const v2820 = v2451[1];
      return;
      break;
      }
    case 'cBT0_634': {
      const v3186 = v2451[1];
      return;
      break;
      }
    case 'cCM0_634': {
      const v3552 = v2451[1];
      return;
      break;
      }
    case 'dBT0_634': {
      const v3918 = v2451[1];
      return;
      break;
      }
    case 'docHash0_634': {
      const v4284 = v2451[1];
      return;
      break;
      }
    case 'optIn0_634': {
      const v4650 = v2451[1];
      return;
      break;
      }
    case 'remWL0_634': {
      const v5016 = v2451[1];
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc15 = stdlib.T_Object({
    ctcMan: ctc7,
    currDistr: ctc1,
    cv: ctc9,
    distrHis: ctc11,
    distrIndex: ctc4,
    distrNum: ctc1,
    docHash: ctc12,
    saleLocked: ctc13,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc14,
    wlIndex: ctc4
    });
  const ctc16 = stdlib.T_Tuple([ctc4, ctc4, ctc13]);
  const ctc17 = stdlib.T_Array(ctc16, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc18 = stdlib.T_Tuple([ctc7]);
  const ctc19 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc20 = stdlib.T_Tuple([]);
  const ctc21 = stdlib.T_Tuple([ctc1]);
  const ctc22 = stdlib.T_Tuple([ctc12]);
  const ctc23 = stdlib.T_Data({
    aST0_634: ctc19,
    addWL0_634: ctc18,
    cBT0_634: ctc20,
    cCM0_634: ctc18,
    dBT0_634: ctc21,
    docHash0_634: ctc22,
    optIn0_634: ctc20,
    remWL0_634: ctc18
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
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc6;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  
  const [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc7, ctc8, ctc15, ctc17, ctc1, ctc1, ctc1, ctc13, ctc12, ctc9, ctc16, ctc4, ctc1, ctc7]);
  const v2234 = ctc.selfAddress();
  const v2236 = stdlib.protect(ctc18, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:160:13:application call to [unknown function] (defined at: ./index.rsh:160:13:function exp)', 'at ./index.rsh:111:35:application call to "runaddWL0_634" (defined at: ./index.rsh:157:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: 'in',
    who: 'addWL'
    });
  const v2240 = stdlib.addressEq(v2234, v1831);
  const v2242 = stdlib.addressEq(v2234, v2213);
  const v2243 = v2240 ? true : v2242;
  stdlib.assert(v2243, {
    at: './index.rsh:161:23:application',
    fs: ['at ./index.rsh:160:13:application call to [unknown function] (defined at: ./index.rsh:160:18:function exp)', 'at ./index.rsh:160:13:application call to [unknown function] (defined at: ./index.rsh:160:13:function exp)', 'at ./index.rsh:111:35:application call to "runaddWL0_634" (defined at: ./index.rsh:157:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: null,
    who: 'addWL'
    });
  const v2247 = ['addWL0_634', v2236];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213, v2247],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:165:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:165:26:decimal', stdlib.UInt_max, '0'), v1835]]],
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
      
      const {data: [v2451], secs: v2453, time: v2452, didSend: v1167, from: v2450 } = txn1;
      
      switch (v2451[0]) {
        case 'aST0_634': {
          const v2454 = v2451[1];
          
          break;
          }
        case 'addWL0_634': {
          const v2820 = v2451[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addWL"
            });
          ;
          const v2903 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
          const v2904 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
          const v2905 = [v2211, v2903, v2904];
          const v2906 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v2905);
          ;
          const v2972 = v2820[stdlib.checkedBigNumberify('./index.rsh:157:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v2972, null);
          const v2978 = v2155.wlIndex;
          const v2979 = stdlib.ge(v2978, stdlib.checkedBigNumberify('./index.rsh:173:80:decimal', stdlib.UInt_max, '24'));
          const v2981 = stdlib.add(v2978, stdlib.checkedBigNumberify('./index.rsh:173:105:decimal', stdlib.UInt_max, '1'));
          const v2982 = v2979 ? stdlib.checkedBigNumberify('./index.rsh:173:85:decimal', stdlib.UInt_max, '0') : v2981;
          const v2984 = v2155.currDistr;
          const v2986 = v2155.distrHis;
          const v2987 = v2155.distrIndex;
          const v2993 = v2155.wlArr;
          const v3003 = stdlib.Array_set(v2993, v2982, v2972);
          const v3004 = {
            ctcMan: v2213,
            currDistr: v2984,
            cv: v2209,
            distrHis: v2986,
            distrIndex: v2987,
            distrNum: v2184,
            docHash: v2208,
            saleLocked: v2186,
            totBT: v2183,
            totST: v2182,
            wlArr: v3003,
            wlIndex: v2982
            };
          const v3005 = true;
          const v3006 = await txn1.getOutput('addWL', 'v3005', ctc13, v3005);
          
          const v8295 = v3004;
          const v8297 = v2906;
          const v8298 = v3004.totST;
          const v8299 = v3004.totBT;
          const v8300 = v3004.distrNum;
          const v8301 = v3004.saleLocked;
          const v8302 = v3004.docHash;
          const v8303 = v3004.cv;
          const v8304 = v2906[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
          const v8305 = v8304[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
          const v8306 = stdlib.cast("UInt", "UInt256", v8305, false);
          const v8307 = v3004.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cBT0_634': {
          const v3186 = v2451[1];
          
          break;
          }
        case 'cCM0_634': {
          const v3552 = v2451[1];
          
          break;
          }
        case 'dBT0_634': {
          const v3918 = v2451[1];
          
          break;
          }
        case 'docHash0_634': {
          const v4284 = v2451[1];
          
          break;
          }
        case 'optIn0_634': {
          const v4650 = v2451[1];
          
          break;
          }
        case 'remWL0_634': {
          const v5016 = v2451[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc8, ctc15, ctc17, ctc1, ctc1, ctc1, ctc13, ctc12, ctc9, ctc16, ctc4, ctc1, ctc7, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v2451], secs: v2453, time: v2452, didSend: v1167, from: v2450 } = txn1;
  switch (v2451[0]) {
    case 'aST0_634': {
      const v2454 = v2451[1];
      return;
      break;
      }
    case 'addWL0_634': {
      const v2820 = v2451[1];
      undefined /* setApiDetails */;
      ;
      const v2903 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
      const v2904 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
      const v2905 = [v2211, v2903, v2904];
      const v2906 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v2905);
      ;
      const v2972 = v2820[stdlib.checkedBigNumberify('./index.rsh:157:13:spread', stdlib.UInt_max, '0')];
      const v2973 = stdlib.addressEq(v2450, v1831);
      const v2975 = stdlib.addressEq(v2450, v2213);
      const v2976 = v2973 ? true : v2975;
      stdlib.assert(v2976, {
        at: './index.rsh:168:24:application',
        fs: ['at ./index.rsh:167:13:application call to [unknown function] (defined at: ./index.rsh:167:13:function exp)'],
        msg: null,
        who: 'addWL'
        });
      await stdlib.mapSet(map6, v2972, null);
      const v2978 = v2155.wlIndex;
      const v2979 = stdlib.ge(v2978, stdlib.checkedBigNumberify('./index.rsh:173:80:decimal', stdlib.UInt_max, '24'));
      const v2981 = stdlib.add(v2978, stdlib.checkedBigNumberify('./index.rsh:173:105:decimal', stdlib.UInt_max, '1'));
      const v2982 = v2979 ? stdlib.checkedBigNumberify('./index.rsh:173:85:decimal', stdlib.UInt_max, '0') : v2981;
      const v2984 = v2155.currDistr;
      const v2986 = v2155.distrHis;
      const v2987 = v2155.distrIndex;
      const v2993 = v2155.wlArr;
      const v3003 = stdlib.Array_set(v2993, v2982, v2972);
      const v3004 = {
        ctcMan: v2213,
        currDistr: v2984,
        cv: v2209,
        distrHis: v2986,
        distrIndex: v2987,
        distrNum: v2184,
        docHash: v2208,
        saleLocked: v2186,
        totBT: v2183,
        totST: v2182,
        wlArr: v3003,
        wlIndex: v2982
        };
      const v3005 = true;
      const v3006 = await txn1.getOutput('addWL', 'v3005', ctc13, v3005);
      if (v1167) {
        stdlib.protect(ctc0, await interact.out(v2820, v3006), {
          at: './index.rsh:158:13:application',
          fs: ['at ./index.rsh:158:13:application call to [unknown function] (defined at: ./index.rsh:158:13:function exp)', 'at ./index.rsh:178:20:application call to "res" (defined at: ./index.rsh:167:13:function exp)', 'at ./index.rsh:167:13:application call to [unknown function] (defined at: ./index.rsh:167:13:function exp)'],
          msg: 'out',
          who: 'addWL'
          });
        }
      else {
        }
      
      const v8295 = v3004;
      const v8297 = v2906;
      const v8298 = v3004.totST;
      const v8299 = v3004.totBT;
      const v8300 = v3004.distrNum;
      const v8301 = v3004.saleLocked;
      const v8302 = v3004.docHash;
      const v8303 = v3004.cv;
      const v8304 = v2906[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
      const v8305 = v8304[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
      const v8306 = stdlib.cast("UInt", "UInt256", v8305, false);
      const v8307 = v3004.ctcMan;
      return;
      
      break;
      }
    case 'cBT0_634': {
      const v3186 = v2451[1];
      return;
      break;
      }
    case 'cCM0_634': {
      const v3552 = v2451[1];
      return;
      break;
      }
    case 'dBT0_634': {
      const v3918 = v2451[1];
      return;
      break;
      }
    case 'docHash0_634': {
      const v4284 = v2451[1];
      return;
      break;
      }
    case 'optIn0_634': {
      const v4650 = v2451[1];
      return;
      break;
      }
    case 'remWL0_634': {
      const v5016 = v2451[1];
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc15 = stdlib.T_Object({
    ctcMan: ctc7,
    currDistr: ctc1,
    cv: ctc9,
    distrHis: ctc11,
    distrIndex: ctc4,
    distrNum: ctc1,
    docHash: ctc12,
    saleLocked: ctc13,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc14,
    wlIndex: ctc4
    });
  const ctc16 = stdlib.T_Tuple([ctc4, ctc4, ctc13]);
  const ctc17 = stdlib.T_Array(ctc16, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc7]);
  const ctc21 = stdlib.T_Tuple([ctc1]);
  const ctc22 = stdlib.T_Tuple([ctc12]);
  const ctc23 = stdlib.T_Data({
    aST0_634: ctc19,
    addWL0_634: ctc20,
    cBT0_634: ctc18,
    cCM0_634: ctc20,
    dBT0_634: ctc21,
    docHash0_634: ctc22,
    optIn0_634: ctc18,
    remWL0_634: ctc20
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
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc6;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  
  const [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc7, ctc8, ctc15, ctc17, ctc1, ctc1, ctc1, ctc13, ctc12, ctc9, ctc16, ctc4, ctc1, ctc7]);
  const v2311 = ctc.selfAddress();
  const v2313 = stdlib.protect(ctc18, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:270:13:application call to [unknown function] (defined at: ./index.rsh:270:13:function exp)', 'at ./index.rsh:111:35:application call to "runcBT0_634" (defined at: ./index.rsh:267:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: 'in',
    who: 'cBT'
    });
  const v2315 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2311), null);
  let v2316;
  switch (v2315[0]) {
    case 'None': {
      const v2317 = v2315[1];
      v2316 = false;
      
      break;
      }
    case 'Some': {
      const v2318 = v2315[1];
      v2316 = true;
      
      break;
      }
    }
  stdlib.assert(v2316, {
    at: './index.rsh:271:23:application',
    fs: ['at ./index.rsh:270:13:application call to [unknown function] (defined at: ./index.rsh:270:17:function exp)', 'at ./index.rsh:270:13:application call to [unknown function] (defined at: ./index.rsh:270:13:function exp)', 'at ./index.rsh:111:35:application call to "runcBT0_634" (defined at: ./index.rsh:267:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v2322 = stdlib.gt256(v2212, stdlib.checkedBigNumberify('./index.rsh:273:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2322, {
    at: './index.rsh:273:23:application',
    fs: ['at ./index.rsh:270:13:application call to [unknown function] (defined at: ./index.rsh:270:17:function exp)', 'at ./index.rsh:270:13:application call to [unknown function] (defined at: ./index.rsh:270:13:function exp)', 'at ./index.rsh:111:35:application call to "runcBT0_634" (defined at: ./index.rsh:267:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: 'well, balance(bT) is 0',
    who: 'cBT'
    });
  const v2324 = stdlib.gt256(v2182, stdlib.checkedBigNumberify('./index.rsh:274:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2324, {
    at: './index.rsh:274:23:application',
    fs: ['at ./index.rsh:270:13:application call to [unknown function] (defined at: ./index.rsh:270:17:function exp)', 'at ./index.rsh:270:13:application call to [unknown function] (defined at: ./index.rsh:270:13:function exp)', 'at ./index.rsh:111:35:application call to "runcBT0_634" (defined at: ./index.rsh:267:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: 'totST is 0. This means there should be no distributions yet',
    who: 'cBT'
    });
  const v2326 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2311), null);
  const v2327 = stdlib.fromSome(v2326, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2328 = stdlib.ge256(v2182, v2327);
  stdlib.assert(v2328, {
    at: './index.rsh:275:23:application',
    fs: ['at ./index.rsh:270:13:application call to [unknown function] (defined at: ./index.rsh:270:17:function exp)', 'at ./index.rsh:270:13:application call to [unknown function] (defined at: ./index.rsh:270:13:function exp)', 'at ./index.rsh:111:35:application call to "runcBT0_634" (defined at: ./index.rsh:267:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: 'weirdly, totST is less than totAllST[this]',
    who: 'cBT'
    });
  const v2331 = stdlib.gt256(v2327, stdlib.checkedBigNumberify('./index.rsh:276:58:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2331, {
    at: './index.rsh:276:23:application',
    fs: ['at ./index.rsh:270:13:application call to [unknown function] (defined at: ./index.rsh:270:17:function exp)', 'at ./index.rsh:270:13:application call to [unknown function] (defined at: ./index.rsh:270:13:function exp)', 'at ./index.rsh:111:35:application call to "runcBT0_634" (defined at: ./index.rsh:267:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: 'totAllST[this] is 0. This means you should not rec distr',
    who: 'cBT'
    });
  const v2334 = v2155.currDistr;
  const v2335 = stdlib.mul256(v2327, v2334);
  const v2337 = stdlib.div256(v2335, v2182);
  const v2338 = stdlib.cast("UInt256", "UInt", v2337, false);
  const v2341 = stdlib.le(v2338, v2211);
  stdlib.assert(v2341, {
    at: './index.rsh:278:23:application',
    fs: ['at ./index.rsh:270:13:application call to [unknown function] (defined at: ./index.rsh:270:17:function exp)', 'at ./index.rsh:270:13:application call to [unknown function] (defined at: ./index.rsh:270:13:function exp)', 'at ./index.rsh:111:35:application call to "runcBT0_634" (defined at: ./index.rsh:267:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: 'weirdly, trying to withdraw more than available balance',
    who: 'cBT'
    });
  const v2344 = ['cBT0_634', v2313];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213, v2344],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:281:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:281:25:decimal', stdlib.UInt_max, '0'), v1835]]],
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
      
      const {data: [v2451], secs: v2453, time: v2452, didSend: v1167, from: v2450 } = txn1;
      
      switch (v2451[0]) {
        case 'aST0_634': {
          const v2454 = v2451[1];
          
          break;
          }
        case 'addWL0_634': {
          const v2820 = v2451[1];
          
          break;
          }
        case 'cBT0_634': {
          const v3186 = v2451[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cBT"
            });
          ;
          const v3269 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
          const v3270 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
          const v3271 = [v2211, v3269, v3270];
          const v3272 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v3271);
          ;
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v2450), null);
          const v3386 = v3272[stdlib.checkedBigNumberify('./index.rsh:286:40:application', stdlib.UInt_max, '0')];
          const v3387 = v3386[stdlib.checkedBigNumberify('./index.rsh:286:40:application', stdlib.UInt_max, '0')];
          const v3393 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2450), null);
          const v3394 = stdlib.fromSome(v3393, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3401 = v2155.currDistr;
          const v3402 = stdlib.mul256(v3394, v3401);
          const v3404 = stdlib.div256(v3402, v2182);
          const v3405 = stdlib.cast("UInt256", "UInt", v3404, false);
          const v3415 = stdlib.sub(v3387, v3405);
          const v3418 = v3386[stdlib.checkedBigNumberify('./index.rsh:293:50:application', stdlib.UInt_max, '1')];
          const v3419 = v3386[stdlib.checkedBigNumberify('./index.rsh:293:50:application', stdlib.UInt_max, '2')];
          const v3420 = [v3415, v3418, v3419];
          const v3421 = stdlib.Array_set(v3272, stdlib.checkedBigNumberify('./index.rsh:293:50:application', stdlib.UInt_max, '0'), v3420);
          sim_r.txns.push({
            kind: 'from',
            to: v2450,
            tok: v1835
            });
          const v3422 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v2450), null);
          const v3423 = stdlib.fromSome(v3422, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3424 = stdlib.add256(v3423, v3404);
          await stdlib.simMapSet(sim_r, 4, v2450, v3424);
          const v3425 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v2450), null);
          const v3426 = stdlib.fromSome(v3425, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3427 = stdlib.add256(v3426, stdlib.checkedBigNumberify('./index.rsh:295:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 5, v2450, v3427);
          const v3428 = await txn1.getOutput('cBT', 'v3404', ctc1, v3404);
          
          const v8502 = v2155;
          const v8504 = v3421;
          const v8505 = v2155.totST;
          const v8506 = v2155.totBT;
          const v8507 = v2155.distrNum;
          const v8508 = v2155.saleLocked;
          const v8509 = v2155.docHash;
          const v8510 = v2155.cv;
          const v8511 = v3421[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
          const v8512 = v8511[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
          const v8513 = stdlib.cast("UInt", "UInt256", v8512, false);
          const v8514 = v2155.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cCM0_634': {
          const v3552 = v2451[1];
          
          break;
          }
        case 'dBT0_634': {
          const v3918 = v2451[1];
          
          break;
          }
        case 'docHash0_634': {
          const v4284 = v2451[1];
          
          break;
          }
        case 'optIn0_634': {
          const v4650 = v2451[1];
          
          break;
          }
        case 'remWL0_634': {
          const v5016 = v2451[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc8, ctc15, ctc17, ctc1, ctc1, ctc1, ctc13, ctc12, ctc9, ctc16, ctc4, ctc1, ctc7, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v2451], secs: v2453, time: v2452, didSend: v1167, from: v2450 } = txn1;
  switch (v2451[0]) {
    case 'aST0_634': {
      const v2454 = v2451[1];
      return;
      break;
      }
    case 'addWL0_634': {
      const v2820 = v2451[1];
      return;
      break;
      }
    case 'cBT0_634': {
      const v3186 = v2451[1];
      undefined /* setApiDetails */;
      ;
      const v3269 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
      const v3270 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
      const v3271 = [v2211, v3269, v3270];
      const v3272 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v3271);
      ;
      const v3382 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v2450), null);
      let v3383;
      switch (v3382[0]) {
        case 'None': {
          const v3384 = v3382[1];
          v3383 = false;
          
          break;
          }
        case 'Some': {
          const v3385 = v3382[1];
          v3383 = true;
          
          break;
          }
        }
      stdlib.assert(v3383, {
        at: './index.rsh:284:24:application',
        fs: ['at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v3386 = v3272[stdlib.checkedBigNumberify('./index.rsh:286:40:application', stdlib.UInt_max, '0')];
      const v3387 = v3386[stdlib.checkedBigNumberify('./index.rsh:286:40:application', stdlib.UInt_max, '0')];
      const v3388 = stdlib.cast("UInt", "UInt256", v3387, false);
      const v3389 = stdlib.gt256(v3388, stdlib.checkedBigNumberify('./index.rsh:286:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v3389, {
        at: './index.rsh:286:24:application',
        fs: ['at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
        msg: 'well, balance(bT) is 0',
        who: 'cBT'
        });
      const v3391 = stdlib.gt256(v2182, stdlib.checkedBigNumberify('./index.rsh:287:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v3391, {
        at: './index.rsh:287:24:application',
        fs: ['at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
        msg: 'totST is 0. This means there should be no distributions yet',
        who: 'cBT'
        });
      const v3393 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2450), null);
      const v3394 = stdlib.fromSome(v3393, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3395 = stdlib.ge256(v2182, v3394);
      stdlib.assert(v3395, {
        at: './index.rsh:288:24:application',
        fs: ['at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
        msg: 'weirdly, totST is less than totAllST[this]',
        who: 'cBT'
        });
      const v3398 = stdlib.gt256(v3394, stdlib.checkedBigNumberify('./index.rsh:289:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v3398, {
        at: './index.rsh:289:24:application',
        fs: ['at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
        msg: 'totAllST[this] is 0. This means you should not rec distr',
        who: 'cBT'
        });
      const v3401 = v2155.currDistr;
      const v3402 = stdlib.mul256(v3394, v3401);
      const v3404 = stdlib.div256(v3402, v2182);
      const v3405 = stdlib.cast("UInt256", "UInt", v3404, false);
      const v3408 = stdlib.le(v3405, v3387);
      stdlib.assert(v3408, {
        at: './index.rsh:291:24:application',
        fs: ['at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
        msg: 'weirdly, trying to withdraw more than available balance',
        who: 'cBT'
        });
      const v3415 = stdlib.sub(v3387, v3405);
      const v3418 = v3386[stdlib.checkedBigNumberify('./index.rsh:293:50:application', stdlib.UInt_max, '1')];
      const v3419 = v3386[stdlib.checkedBigNumberify('./index.rsh:293:50:application', stdlib.UInt_max, '2')];
      const v3420 = [v3415, v3418, v3419];
      const v3421 = stdlib.Array_set(v3272, stdlib.checkedBigNumberify('./index.rsh:293:50:application', stdlib.UInt_max, '0'), v3420);
      ;
      const v3422 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v2450), null);
      const v3423 = stdlib.fromSome(v3422, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3424 = stdlib.add256(v3423, v3404);
      await stdlib.mapSet(map4, v2450, v3424);
      const v3425 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v2450), null);
      const v3426 = stdlib.fromSome(v3425, stdlib.checkedBigNumberify('./index.rsh:91:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3427 = stdlib.add256(v3426, stdlib.checkedBigNumberify('./index.rsh:295:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map5, v2450, v3427);
      const v3428 = await txn1.getOutput('cBT', 'v3404', ctc1, v3404);
      if (v1167) {
        stdlib.protect(ctc0, await interact.out(v3186, v3428), {
          at: './index.rsh:268:13:application',
          fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)', 'at ./index.rsh:296:20:application call to "res" (defined at: ./index.rsh:283:13:function exp)', 'at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)'],
          msg: 'out',
          who: 'cBT'
          });
        }
      else {
        }
      
      const v8502 = v2155;
      const v8504 = v3421;
      const v8505 = v2155.totST;
      const v8506 = v2155.totBT;
      const v8507 = v2155.distrNum;
      const v8508 = v2155.saleLocked;
      const v8509 = v2155.docHash;
      const v8510 = v2155.cv;
      const v8511 = v3421[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
      const v8512 = v8511[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
      const v8513 = stdlib.cast("UInt", "UInt256", v8512, false);
      const v8514 = v2155.ctcMan;
      return;
      
      break;
      }
    case 'cCM0_634': {
      const v3552 = v2451[1];
      return;
      break;
      }
    case 'dBT0_634': {
      const v3918 = v2451[1];
      return;
      break;
      }
    case 'docHash0_634': {
      const v4284 = v2451[1];
      return;
      break;
      }
    case 'optIn0_634': {
      const v4650 = v2451[1];
      return;
      break;
      }
    case 'remWL0_634': {
      const v5016 = v2451[1];
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc15 = stdlib.T_Object({
    ctcMan: ctc7,
    currDistr: ctc1,
    cv: ctc9,
    distrHis: ctc11,
    distrIndex: ctc4,
    distrNum: ctc1,
    docHash: ctc12,
    saleLocked: ctc13,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc14,
    wlIndex: ctc4
    });
  const ctc16 = stdlib.T_Tuple([ctc4, ctc4, ctc13]);
  const ctc17 = stdlib.T_Array(ctc16, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc18 = stdlib.T_Tuple([ctc7]);
  const ctc19 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc20 = stdlib.T_Tuple([]);
  const ctc21 = stdlib.T_Tuple([ctc1]);
  const ctc22 = stdlib.T_Tuple([ctc12]);
  const ctc23 = stdlib.T_Data({
    aST0_634: ctc19,
    addWL0_634: ctc18,
    cBT0_634: ctc20,
    cCM0_634: ctc18,
    dBT0_634: ctc21,
    docHash0_634: ctc22,
    optIn0_634: ctc20,
    remWL0_634: ctc18
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
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc6;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  
  const [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc7, ctc8, ctc15, ctc17, ctc1, ctc1, ctc1, ctc13, ctc12, ctc9, ctc16, ctc4, ctc1, ctc7]);
  const v2346 = ctc.selfAddress();
  const v2348 = stdlib.protect(ctc18, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:303:13:application call to [unknown function] (defined at: ./index.rsh:303:13:function exp)', 'at ./index.rsh:111:35:application call to "runcCM0_634" (defined at: ./index.rsh:300:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: 'in',
    who: 'cCM'
    });
  const v2352 = stdlib.addressEq(v2346, v1831);
  const v2354 = stdlib.addressEq(v2346, v2213);
  const v2355 = v2352 ? true : v2354;
  stdlib.assert(v2355, {
    at: './index.rsh:304:23:application',
    fs: ['at ./index.rsh:303:13:application call to [unknown function] (defined at: ./index.rsh:303:21:function exp)', 'at ./index.rsh:303:13:application call to [unknown function] (defined at: ./index.rsh:303:13:function exp)', 'at ./index.rsh:111:35:application call to "runcCM0_634" (defined at: ./index.rsh:300:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: null,
    who: 'cCM'
    });
  const v2359 = ['cCM0_634', v2348];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213, v2359],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:308:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:308:26:decimal', stdlib.UInt_max, '0'), v1835]]],
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
      
      const {data: [v2451], secs: v2453, time: v2452, didSend: v1167, from: v2450 } = txn1;
      
      switch (v2451[0]) {
        case 'aST0_634': {
          const v2454 = v2451[1];
          
          break;
          }
        case 'addWL0_634': {
          const v2820 = v2451[1];
          
          break;
          }
        case 'cBT0_634': {
          const v3186 = v2451[1];
          
          break;
          }
        case 'cCM0_634': {
          const v3552 = v2451[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cCM"
            });
          ;
          const v3635 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
          const v3636 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
          const v3637 = [v2211, v3635, v3636];
          const v3638 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v3637);
          ;
          const v3801 = v3552[stdlib.checkedBigNumberify('./index.rsh:300:13:spread', stdlib.UInt_max, '0')];
          const v3806 = true;
          const v3807 = await txn1.getOutput('cCM', 'v3806', ctc13, v3806);
          
          const v3814 = v2155.currDistr;
          const v3816 = v2155.distrHis;
          const v3817 = v2155.distrIndex;
          const v3823 = v2155.wlArr;
          const v3824 = v2155.wlIndex;
          const v3825 = {
            ctcMan: v3801,
            currDistr: v3814,
            cv: v2209,
            distrHis: v3816,
            distrIndex: v3817,
            distrNum: v2184,
            docHash: v2208,
            saleLocked: v2186,
            totBT: v2183,
            totST: v2182,
            wlArr: v3823,
            wlIndex: v3824
            };
          const v8709 = v3825;
          const v8711 = v3638;
          const v8712 = v3825.totST;
          const v8713 = v3825.totBT;
          const v8714 = v3825.distrNum;
          const v8715 = v3825.saleLocked;
          const v8716 = v3825.docHash;
          const v8717 = v3825.cv;
          const v8718 = v3638[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
          const v8719 = v8718[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
          const v8720 = stdlib.cast("UInt", "UInt256", v8719, false);
          const v8721 = v3825.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'dBT0_634': {
          const v3918 = v2451[1];
          
          break;
          }
        case 'docHash0_634': {
          const v4284 = v2451[1];
          
          break;
          }
        case 'optIn0_634': {
          const v4650 = v2451[1];
          
          break;
          }
        case 'remWL0_634': {
          const v5016 = v2451[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc8, ctc15, ctc17, ctc1, ctc1, ctc1, ctc13, ctc12, ctc9, ctc16, ctc4, ctc1, ctc7, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v2451], secs: v2453, time: v2452, didSend: v1167, from: v2450 } = txn1;
  switch (v2451[0]) {
    case 'aST0_634': {
      const v2454 = v2451[1];
      return;
      break;
      }
    case 'addWL0_634': {
      const v2820 = v2451[1];
      return;
      break;
      }
    case 'cBT0_634': {
      const v3186 = v2451[1];
      return;
      break;
      }
    case 'cCM0_634': {
      const v3552 = v2451[1];
      undefined /* setApiDetails */;
      ;
      const v3635 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
      const v3636 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
      const v3637 = [v2211, v3635, v3636];
      const v3638 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v3637);
      ;
      const v3801 = v3552[stdlib.checkedBigNumberify('./index.rsh:300:13:spread', stdlib.UInt_max, '0')];
      const v3802 = stdlib.addressEq(v2450, v1831);
      const v3804 = stdlib.addressEq(v2450, v2213);
      const v3805 = v3802 ? true : v3804;
      stdlib.assert(v3805, {
        at: './index.rsh:311:24:application',
        fs: ['at ./index.rsh:310:13:application call to [unknown function] (defined at: ./index.rsh:310:13:function exp)'],
        msg: null,
        who: 'cCM'
        });
      const v3806 = true;
      const v3807 = await txn1.getOutput('cCM', 'v3806', ctc13, v3806);
      if (v1167) {
        stdlib.protect(ctc0, await interact.out(v3552, v3807), {
          at: './index.rsh:301:13:application',
          fs: ['at ./index.rsh:301:13:application call to [unknown function] (defined at: ./index.rsh:301:13:function exp)', 'at ./index.rsh:314:20:application call to "res" (defined at: ./index.rsh:310:13:function exp)', 'at ./index.rsh:310:13:application call to [unknown function] (defined at: ./index.rsh:310:13:function exp)'],
          msg: 'out',
          who: 'cCM'
          });
        }
      else {
        }
      
      const v3814 = v2155.currDistr;
      const v3816 = v2155.distrHis;
      const v3817 = v2155.distrIndex;
      const v3823 = v2155.wlArr;
      const v3824 = v2155.wlIndex;
      const v3825 = {
        ctcMan: v3801,
        currDistr: v3814,
        cv: v2209,
        distrHis: v3816,
        distrIndex: v3817,
        distrNum: v2184,
        docHash: v2208,
        saleLocked: v2186,
        totBT: v2183,
        totST: v2182,
        wlArr: v3823,
        wlIndex: v3824
        };
      const v8709 = v3825;
      const v8711 = v3638;
      const v8712 = v3825.totST;
      const v8713 = v3825.totBT;
      const v8714 = v3825.distrNum;
      const v8715 = v3825.saleLocked;
      const v8716 = v3825.docHash;
      const v8717 = v3825.cv;
      const v8718 = v3638[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
      const v8719 = v8718[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
      const v8720 = stdlib.cast("UInt", "UInt256", v8719, false);
      const v8721 = v3825.ctcMan;
      return;
      
      break;
      }
    case 'dBT0_634': {
      const v3918 = v2451[1];
      return;
      break;
      }
    case 'docHash0_634': {
      const v4284 = v2451[1];
      return;
      break;
      }
    case 'optIn0_634': {
      const v4650 = v2451[1];
      return;
      break;
      }
    case 'remWL0_634': {
      const v5016 = v2451[1];
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc15 = stdlib.T_Object({
    ctcMan: ctc7,
    currDistr: ctc1,
    cv: ctc9,
    distrHis: ctc11,
    distrIndex: ctc4,
    distrNum: ctc1,
    docHash: ctc12,
    saleLocked: ctc13,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc14,
    wlIndex: ctc4
    });
  const ctc16 = stdlib.T_Tuple([ctc4, ctc4, ctc13]);
  const ctc17 = stdlib.T_Array(ctc16, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc18 = stdlib.T_Tuple([ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc7]);
  const ctc21 = stdlib.T_Tuple([]);
  const ctc22 = stdlib.T_Tuple([ctc12]);
  const ctc23 = stdlib.T_Data({
    aST0_634: ctc19,
    addWL0_634: ctc20,
    cBT0_634: ctc21,
    cCM0_634: ctc20,
    dBT0_634: ctc18,
    docHash0_634: ctc22,
    optIn0_634: ctc21,
    remWL0_634: ctc20
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
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc6;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  
  const [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc7, ctc8, ctc15, ctc17, ctc1, ctc1, ctc1, ctc13, ctc12, ctc9, ctc16, ctc4, ctc1, ctc7]);
  const v2294 = ctc.selfAddress();
  const v2296 = stdlib.protect(ctc18, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)', 'at ./index.rsh:111:35:application call to "rundBT0_634" (defined at: ./index.rsh:244:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: 'in',
    who: 'dBT'
    });
  const v2297 = v2296[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2300 = stdlib.addressEq(v2294, v1831);
  const v2302 = stdlib.addressEq(v2294, v2213);
  const v2303 = v2300 ? true : v2302;
  stdlib.assert(v2303, {
    at: './index.rsh:248:23:application',
    fs: ['at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:20:function exp)', 'at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)', 'at ./index.rsh:111:35:application call to "rundBT0_634" (defined at: ./index.rsh:244:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v2304 = stdlib.cast("UInt256", "UInt", v2297, false);
  const v2305 = stdlib.gt(v2304, stdlib.checkedBigNumberify('./index.rsh:249:36:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2305, {
    at: './index.rsh:249:23:application',
    fs: ['at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:20:function exp)', 'at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)', 'at ./index.rsh:111:35:application call to "rundBT0_634" (defined at: ./index.rsh:244:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v2309 = ['dBT0_634', v2296];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213, v2309],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:253:24:decimal', stdlib.UInt_max, '0'), [[v2304, v1835]]],
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
      
      const {data: [v2451], secs: v2453, time: v2452, didSend: v1167, from: v2450 } = txn1;
      
      switch (v2451[0]) {
        case 'aST0_634': {
          const v2454 = v2451[1];
          
          break;
          }
        case 'addWL0_634': {
          const v2820 = v2451[1];
          
          break;
          }
        case 'cBT0_634': {
          const v3186 = v2451[1];
          
          break;
          }
        case 'cCM0_634': {
          const v3552 = v2451[1];
          
          break;
          }
        case 'dBT0_634': {
          const v3918 = v2451[1];
          sim_r.txns.push({
            kind: 'api',
            who: "dBT"
            });
          const v3956 = v3918[stdlib.checkedBigNumberify('./index.rsh:244:13:spread', stdlib.UInt_max, '0')];
          const v3957 = stdlib.cast("UInt256", "UInt", v3956, false);
          ;
          const v3998 = stdlib.add(v2211, v3957);
          const v4001 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
          const v4002 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
          const v4003 = [v3998, v4001, v4002];
          const v4004 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v4003);
          sim_r.txns.push({
            amt: v3957,
            kind: 'to',
            tok: v1835
            });
          const v4204 = stdlib.add256(v2183, v3956);
          const v4208 = v2155.distrHis;
          const v4209 = v2155.distrIndex;
          const v4215 = v2155.wlArr;
          const v4216 = v2155.wlIndex;
          const v4219 = stdlib.add256(v2184, stdlib.checkedBigNumberify('./index.rsh:260:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v4221 = {
            ctcMan: v2213,
            currDistr: v3956,
            cv: v2209,
            distrHis: v4208,
            distrIndex: v4209,
            distrNum: v4219,
            docHash: v2208,
            saleLocked: v2186,
            totBT: v4204,
            totST: v2182,
            wlArr: v4215,
            wlIndex: v4216
            };
          const v4222 = true;
          const v4223 = await txn1.getOutput('dBT', 'v4222', ctc13, v4222);
          
          const v8916 = v4221;
          const v8918 = v4004;
          const v8919 = v4221.totST;
          const v8920 = v4221.totBT;
          const v8921 = v4221.distrNum;
          const v8922 = v4221.saleLocked;
          const v8923 = v4221.docHash;
          const v8924 = v4221.cv;
          const v8925 = v4004[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
          const v8926 = v8925[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
          const v8927 = stdlib.cast("UInt", "UInt256", v8926, false);
          const v8928 = v4221.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'docHash0_634': {
          const v4284 = v2451[1];
          
          break;
          }
        case 'optIn0_634': {
          const v4650 = v2451[1];
          
          break;
          }
        case 'remWL0_634': {
          const v5016 = v2451[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc8, ctc15, ctc17, ctc1, ctc1, ctc1, ctc13, ctc12, ctc9, ctc16, ctc4, ctc1, ctc7, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v2451], secs: v2453, time: v2452, didSend: v1167, from: v2450 } = txn1;
  switch (v2451[0]) {
    case 'aST0_634': {
      const v2454 = v2451[1];
      return;
      break;
      }
    case 'addWL0_634': {
      const v2820 = v2451[1];
      return;
      break;
      }
    case 'cBT0_634': {
      const v3186 = v2451[1];
      return;
      break;
      }
    case 'cCM0_634': {
      const v3552 = v2451[1];
      return;
      break;
      }
    case 'dBT0_634': {
      const v3918 = v2451[1];
      undefined /* setApiDetails */;
      const v3956 = v3918[stdlib.checkedBigNumberify('./index.rsh:244:13:spread', stdlib.UInt_max, '0')];
      const v3957 = stdlib.cast("UInt256", "UInt", v3956, false);
      ;
      const v3998 = stdlib.add(v2211, v3957);
      const v4001 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
      const v4002 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
      const v4003 = [v3998, v4001, v4002];
      const v4004 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v4003);
      ;
      const v4197 = stdlib.addressEq(v2450, v1831);
      const v4199 = stdlib.addressEq(v2450, v2213);
      const v4200 = v4197 ? true : v4199;
      stdlib.assert(v4200, {
        at: './index.rsh:256:24:application',
        fs: ['at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v4202 = stdlib.gt(v3957, stdlib.checkedBigNumberify('./index.rsh:257:37:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4202, {
        at: './index.rsh:257:24:application',
        fs: ['at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v4204 = stdlib.add256(v2183, v3956);
      const v4208 = v2155.distrHis;
      const v4209 = v2155.distrIndex;
      const v4215 = v2155.wlArr;
      const v4216 = v2155.wlIndex;
      const v4219 = stdlib.add256(v2184, stdlib.checkedBigNumberify('./index.rsh:260:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v4221 = {
        ctcMan: v2213,
        currDistr: v3956,
        cv: v2209,
        distrHis: v4208,
        distrIndex: v4209,
        distrNum: v4219,
        docHash: v2208,
        saleLocked: v2186,
        totBT: v4204,
        totST: v2182,
        wlArr: v4215,
        wlIndex: v4216
        };
      const v4222 = true;
      const v4223 = await txn1.getOutput('dBT', 'v4222', ctc13, v4222);
      if (v1167) {
        stdlib.protect(ctc0, await interact.out(v3918, v4223), {
          at: './index.rsh:245:13:application',
          fs: ['at ./index.rsh:245:13:application call to [unknown function] (defined at: ./index.rsh:245:13:function exp)', 'at ./index.rsh:263:20:application call to "res" (defined at: ./index.rsh:255:13:function exp)', 'at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)'],
          msg: 'out',
          who: 'dBT'
          });
        }
      else {
        }
      
      const v8916 = v4221;
      const v8918 = v4004;
      const v8919 = v4221.totST;
      const v8920 = v4221.totBT;
      const v8921 = v4221.distrNum;
      const v8922 = v4221.saleLocked;
      const v8923 = v4221.docHash;
      const v8924 = v4221.cv;
      const v8925 = v4004[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
      const v8926 = v8925[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
      const v8927 = stdlib.cast("UInt", "UInt256", v8926, false);
      const v8928 = v4221.ctcMan;
      return;
      
      break;
      }
    case 'docHash0_634': {
      const v4284 = v2451[1];
      return;
      break;
      }
    case 'optIn0_634': {
      const v4650 = v2451[1];
      return;
      break;
      }
    case 'remWL0_634': {
      const v5016 = v2451[1];
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc15 = stdlib.T_Object({
    ctcMan: ctc7,
    currDistr: ctc1,
    cv: ctc9,
    distrHis: ctc11,
    distrIndex: ctc4,
    distrNum: ctc1,
    docHash: ctc12,
    saleLocked: ctc13,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc14,
    wlIndex: ctc4
    });
  const ctc16 = stdlib.T_Tuple([ctc4, ctc4, ctc13]);
  const ctc17 = stdlib.T_Array(ctc16, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc18 = stdlib.T_Tuple([ctc12]);
  const ctc19 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc7]);
  const ctc21 = stdlib.T_Tuple([]);
  const ctc22 = stdlib.T_Tuple([ctc1]);
  const ctc23 = stdlib.T_Data({
    aST0_634: ctc19,
    addWL0_634: ctc20,
    cBT0_634: ctc21,
    cCM0_634: ctc20,
    dBT0_634: ctc22,
    docHash0_634: ctc18,
    optIn0_634: ctc21,
    remWL0_634: ctc20
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
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc6;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  
  const [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc7, ctc8, ctc15, ctc17, ctc1, ctc1, ctc1, ctc13, ctc12, ctc9, ctc16, ctc4, ctc1, ctc7]);
  const v2219 = ctc.selfAddress();
  const v2221 = stdlib.protect(ctc18, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:143:13:application call to [unknown function] (defined at: ./index.rsh:143:13:function exp)', 'at ./index.rsh:111:35:application call to "rundocHash0_634" (defined at: ./index.rsh:140:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: 'in',
    who: 'docHash'
    });
  const v2225 = stdlib.addressEq(v2219, v1831);
  const v2227 = stdlib.addressEq(v2219, v2213);
  const v2228 = v2225 ? true : v2227;
  stdlib.assert(v2228, {
    at: './index.rsh:144:23:application',
    fs: ['at ./index.rsh:143:13:application call to [unknown function] (defined at: ./index.rsh:143:18:function exp)', 'at ./index.rsh:143:13:application call to [unknown function] (defined at: ./index.rsh:143:13:function exp)', 'at ./index.rsh:111:35:application call to "rundocHash0_634" (defined at: ./index.rsh:140:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: null,
    who: 'docHash'
    });
  const v2232 = ['docHash0_634', v2221];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213, v2232],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:148:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:148:26:decimal', stdlib.UInt_max, '0'), v1835]]],
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
      
      const {data: [v2451], secs: v2453, time: v2452, didSend: v1167, from: v2450 } = txn1;
      
      switch (v2451[0]) {
        case 'aST0_634': {
          const v2454 = v2451[1];
          
          break;
          }
        case 'addWL0_634': {
          const v2820 = v2451[1];
          
          break;
          }
        case 'cBT0_634': {
          const v3186 = v2451[1];
          
          break;
          }
        case 'cCM0_634': {
          const v3552 = v2451[1];
          
          break;
          }
        case 'dBT0_634': {
          const v3918 = v2451[1];
          
          break;
          }
        case 'docHash0_634': {
          const v4284 = v2451[1];
          sim_r.txns.push({
            kind: 'api',
            who: "docHash"
            });
          ;
          const v4367 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
          const v4368 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
          const v4369 = [v2211, v4367, v4368];
          const v4370 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v4369);
          ;
          const v4599 = v4284[stdlib.checkedBigNumberify('./index.rsh:140:13:spread', stdlib.UInt_max, '0')];
          const v4605 = v2155.currDistr;
          const v4607 = v2155.distrHis;
          const v4608 = v2155.distrIndex;
          const v4614 = v2155.wlArr;
          const v4615 = v2155.wlIndex;
          const v4616 = {
            ctcMan: v2213,
            currDistr: v4605,
            cv: v2209,
            distrHis: v4607,
            distrIndex: v4608,
            distrNum: v2184,
            docHash: v4599,
            saleLocked: v2186,
            totBT: v2183,
            totST: v2182,
            wlArr: v4614,
            wlIndex: v4615
            };
          const v4617 = true;
          const v4618 = await txn1.getOutput('docHash', 'v4617', ctc13, v4617);
          
          const v9123 = v4616;
          const v9125 = v4370;
          const v9126 = v4616.totST;
          const v9127 = v4616.totBT;
          const v9128 = v4616.distrNum;
          const v9129 = v4616.saleLocked;
          const v9130 = v4616.docHash;
          const v9131 = v4616.cv;
          const v9132 = v4370[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
          const v9133 = v9132[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
          const v9134 = stdlib.cast("UInt", "UInt256", v9133, false);
          const v9135 = v4616.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'optIn0_634': {
          const v4650 = v2451[1];
          
          break;
          }
        case 'remWL0_634': {
          const v5016 = v2451[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc8, ctc15, ctc17, ctc1, ctc1, ctc1, ctc13, ctc12, ctc9, ctc16, ctc4, ctc1, ctc7, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v2451], secs: v2453, time: v2452, didSend: v1167, from: v2450 } = txn1;
  switch (v2451[0]) {
    case 'aST0_634': {
      const v2454 = v2451[1];
      return;
      break;
      }
    case 'addWL0_634': {
      const v2820 = v2451[1];
      return;
      break;
      }
    case 'cBT0_634': {
      const v3186 = v2451[1];
      return;
      break;
      }
    case 'cCM0_634': {
      const v3552 = v2451[1];
      return;
      break;
      }
    case 'dBT0_634': {
      const v3918 = v2451[1];
      return;
      break;
      }
    case 'docHash0_634': {
      const v4284 = v2451[1];
      undefined /* setApiDetails */;
      ;
      const v4367 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
      const v4368 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
      const v4369 = [v2211, v4367, v4368];
      const v4370 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v4369);
      ;
      const v4599 = v4284[stdlib.checkedBigNumberify('./index.rsh:140:13:spread', stdlib.UInt_max, '0')];
      const v4600 = stdlib.addressEq(v2450, v1831);
      const v4602 = stdlib.addressEq(v2450, v2213);
      const v4603 = v4600 ? true : v4602;
      stdlib.assert(v4603, {
        at: './index.rsh:151:24:application',
        fs: ['at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
        msg: null,
        who: 'docHash'
        });
      const v4605 = v2155.currDistr;
      const v4607 = v2155.distrHis;
      const v4608 = v2155.distrIndex;
      const v4614 = v2155.wlArr;
      const v4615 = v2155.wlIndex;
      const v4616 = {
        ctcMan: v2213,
        currDistr: v4605,
        cv: v2209,
        distrHis: v4607,
        distrIndex: v4608,
        distrNum: v2184,
        docHash: v4599,
        saleLocked: v2186,
        totBT: v2183,
        totST: v2182,
        wlArr: v4614,
        wlIndex: v4615
        };
      const v4617 = true;
      const v4618 = await txn1.getOutput('docHash', 'v4617', ctc13, v4617);
      if (v1167) {
        stdlib.protect(ctc0, await interact.out(v4284, v4618), {
          at: './index.rsh:141:13:application',
          fs: ['at ./index.rsh:141:13:application call to [unknown function] (defined at: ./index.rsh:141:13:function exp)', 'at ./index.rsh:153:20:application call to "res" (defined at: ./index.rsh:150:13:function exp)', 'at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
          msg: 'out',
          who: 'docHash'
          });
        }
      else {
        }
      
      const v9123 = v4616;
      const v9125 = v4370;
      const v9126 = v4616.totST;
      const v9127 = v4616.totBT;
      const v9128 = v4616.distrNum;
      const v9129 = v4616.saleLocked;
      const v9130 = v4616.docHash;
      const v9131 = v4616.cv;
      const v9132 = v4370[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
      const v9133 = v9132[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
      const v9134 = stdlib.cast("UInt", "UInt256", v9133, false);
      const v9135 = v4616.ctcMan;
      return;
      
      break;
      }
    case 'optIn0_634': {
      const v4650 = v2451[1];
      return;
      break;
      }
    case 'remWL0_634': {
      const v5016 = v2451[1];
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc15 = stdlib.T_Object({
    ctcMan: ctc7,
    currDistr: ctc1,
    cv: ctc9,
    distrHis: ctc11,
    distrIndex: ctc4,
    distrNum: ctc1,
    docHash: ctc12,
    saleLocked: ctc13,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc14,
    wlIndex: ctc4
    });
  const ctc16 = stdlib.T_Tuple([ctc4, ctc4, ctc13]);
  const ctc17 = stdlib.T_Array(ctc16, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc7]);
  const ctc21 = stdlib.T_Tuple([ctc1]);
  const ctc22 = stdlib.T_Tuple([ctc12]);
  const ctc23 = stdlib.T_Data({
    aST0_634: ctc19,
    addWL0_634: ctc20,
    cBT0_634: ctc18,
    cCM0_634: ctc20,
    dBT0_634: ctc21,
    docHash0_634: ctc22,
    optIn0_634: ctc18,
    remWL0_634: ctc20
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
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc6;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  
  const [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc7, ctc8, ctc15, ctc17, ctc1, ctc1, ctc1, ctc13, ctc12, ctc9, ctc16, ctc4, ctc1, ctc7]);
  const v2288 = stdlib.protect(ctc18, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:233:13:application call to [unknown function] (defined at: ./index.rsh:233:13:function exp)', 'at ./index.rsh:111:35:application call to "runoptIn0_634" (defined at: ./index.rsh:230:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: 'in',
    who: 'optIn'
    });
  const v2292 = ['optIn0_634', v2288];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213, v2292],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:237:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:237:25:decimal', stdlib.UInt_max, '0'), v1835]]],
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
      
      const {data: [v2451], secs: v2453, time: v2452, didSend: v1167, from: v2450 } = txn1;
      
      switch (v2451[0]) {
        case 'aST0_634': {
          const v2454 = v2451[1];
          
          break;
          }
        case 'addWL0_634': {
          const v2820 = v2451[1];
          
          break;
          }
        case 'cBT0_634': {
          const v3186 = v2451[1];
          
          break;
          }
        case 'cCM0_634': {
          const v3552 = v2451[1];
          
          break;
          }
        case 'dBT0_634': {
          const v3918 = v2451[1];
          
          break;
          }
        case 'docHash0_634': {
          const v4284 = v2451[1];
          
          break;
          }
        case 'optIn0_634': {
          const v4650 = v2451[1];
          sim_r.txns.push({
            kind: 'api',
            who: "optIn"
            });
          ;
          const v4733 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
          const v4734 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
          const v4735 = [v2211, v4733, v4734];
          const v4736 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v4735);
          ;
          const v4994 = true;
          const v4995 = await txn1.getOutput('optIn', 'v4994', ctc13, v4994);
          
          const v9330 = v2155;
          const v9332 = v4736;
          const v9333 = v2155.totST;
          const v9334 = v2155.totBT;
          const v9335 = v2155.distrNum;
          const v9336 = v2155.saleLocked;
          const v9337 = v2155.docHash;
          const v9338 = v2155.cv;
          const v9339 = v4736[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
          const v9340 = v9339[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
          const v9341 = stdlib.cast("UInt", "UInt256", v9340, false);
          const v9342 = v2155.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        case 'remWL0_634': {
          const v5016 = v2451[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc8, ctc15, ctc17, ctc1, ctc1, ctc1, ctc13, ctc12, ctc9, ctc16, ctc4, ctc1, ctc7, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v2451], secs: v2453, time: v2452, didSend: v1167, from: v2450 } = txn1;
  switch (v2451[0]) {
    case 'aST0_634': {
      const v2454 = v2451[1];
      return;
      break;
      }
    case 'addWL0_634': {
      const v2820 = v2451[1];
      return;
      break;
      }
    case 'cBT0_634': {
      const v3186 = v2451[1];
      return;
      break;
      }
    case 'cCM0_634': {
      const v3552 = v2451[1];
      return;
      break;
      }
    case 'dBT0_634': {
      const v3918 = v2451[1];
      return;
      break;
      }
    case 'docHash0_634': {
      const v4284 = v2451[1];
      return;
      break;
      }
    case 'optIn0_634': {
      const v4650 = v2451[1];
      undefined /* setApiDetails */;
      ;
      const v4733 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
      const v4734 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
      const v4735 = [v2211, v4733, v4734];
      const v4736 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v4735);
      ;
      const v4994 = true;
      const v4995 = await txn1.getOutput('optIn', 'v4994', ctc13, v4994);
      if (v1167) {
        stdlib.protect(ctc0, await interact.out(v4650, v4995), {
          at: './index.rsh:231:13:application',
          fs: ['at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:240:20:application call to "res" (defined at: ./index.rsh:239:13:function exp)', 'at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
          msg: 'out',
          who: 'optIn'
          });
        }
      else {
        }
      
      const v9330 = v2155;
      const v9332 = v4736;
      const v9333 = v2155.totST;
      const v9334 = v2155.totBT;
      const v9335 = v2155.distrNum;
      const v9336 = v2155.saleLocked;
      const v9337 = v2155.docHash;
      const v9338 = v2155.cv;
      const v9339 = v4736[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
      const v9340 = v9339[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
      const v9341 = stdlib.cast("UInt", "UInt256", v9340, false);
      const v9342 = v2155.ctcMan;
      return;
      
      break;
      }
    case 'remWL0_634': {
      const v5016 = v2451[1];
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc15 = stdlib.T_Object({
    ctcMan: ctc7,
    currDistr: ctc1,
    cv: ctc9,
    distrHis: ctc11,
    distrIndex: ctc4,
    distrNum: ctc1,
    docHash: ctc12,
    saleLocked: ctc13,
    totBT: ctc1,
    totST: ctc1,
    wlArr: ctc14,
    wlIndex: ctc4
    });
  const ctc16 = stdlib.T_Tuple([ctc4, ctc4, ctc13]);
  const ctc17 = stdlib.T_Array(ctc16, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc18 = stdlib.T_Tuple([ctc7]);
  const ctc19 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc20 = stdlib.T_Tuple([]);
  const ctc21 = stdlib.T_Tuple([ctc1]);
  const ctc22 = stdlib.T_Tuple([ctc12]);
  const ctc23 = stdlib.T_Data({
    aST0_634: ctc19,
    addWL0_634: ctc18,
    cBT0_634: ctc20,
    cCM0_634: ctc18,
    dBT0_634: ctc21,
    docHash0_634: ctc22,
    optIn0_634: ctc20,
    remWL0_634: ctc18
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
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc6;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  
  const [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc7, ctc8, ctc15, ctc17, ctc1, ctc1, ctc1, ctc13, ctc12, ctc9, ctc16, ctc4, ctc1, ctc7]);
  const v2249 = ctc.selfAddress();
  const v2251 = stdlib.protect(ctc18, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)', 'at ./index.rsh:111:35:application call to "runremWL0_634" (defined at: ./index.rsh:182:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: 'in',
    who: 'remWL'
    });
  const v2255 = stdlib.addressEq(v2249, v1831);
  const v2257 = stdlib.addressEq(v2249, v2213);
  const v2258 = v2255 ? true : v2257;
  stdlib.assert(v2258, {
    at: './index.rsh:186:23:application',
    fs: ['at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:18:function exp)', 'at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)', 'at ./index.rsh:111:35:application call to "runremWL0_634" (defined at: ./index.rsh:182:13:function exp)', 'at ./index.rsh:111:35:application call to [unknown function] (defined at: ./index.rsh:111:35:function exp)'],
    msg: null,
    who: 'remWL'
    });
  const v2262 = ['remWL0_634', v2251];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1831, v1835, v2155, v2158, v2182, v2183, v2184, v2186, v2208, v2209, v2210, v2211, v2212, v2213, v2262],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:190:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:190:26:decimal', stdlib.UInt_max, '0'), v1835]]],
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
      
      const {data: [v2451], secs: v2453, time: v2452, didSend: v1167, from: v2450 } = txn1;
      
      switch (v2451[0]) {
        case 'aST0_634': {
          const v2454 = v2451[1];
          
          break;
          }
        case 'addWL0_634': {
          const v2820 = v2451[1];
          
          break;
          }
        case 'cBT0_634': {
          const v3186 = v2451[1];
          
          break;
          }
        case 'cCM0_634': {
          const v3552 = v2451[1];
          
          break;
          }
        case 'dBT0_634': {
          const v3918 = v2451[1];
          
          break;
          }
        case 'docHash0_634': {
          const v4284 = v2451[1];
          
          break;
          }
        case 'optIn0_634': {
          const v4650 = v2451[1];
          
          break;
          }
        case 'remWL0_634': {
          const v5016 = v2451[1];
          sim_r.txns.push({
            kind: 'api',
            who: "remWL"
            });
          ;
          const v5099 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
          const v5100 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
          const v5101 = [v2211, v5099, v5100];
          const v5102 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v5101);
          ;
          const v5368 = v5016[stdlib.checkedBigNumberify('./index.rsh:182:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v5368, undefined /* Nothing */);
          const v5374 = true;
          const v5375 = await txn1.getOutput('remWL', 'v5374', ctc13, v5374);
          
          const v9537 = v2155;
          const v9539 = v5102;
          const v9540 = v2155.totST;
          const v9541 = v2155.totBT;
          const v9542 = v2155.distrNum;
          const v9543 = v2155.saleLocked;
          const v9544 = v2155.docHash;
          const v9545 = v2155.cv;
          const v9546 = v5102[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
          const v9547 = v9546[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
          const v9548 = stdlib.cast("UInt", "UInt256", v9547, false);
          const v9549 = v2155.ctcMan;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc8, ctc15, ctc17, ctc1, ctc1, ctc1, ctc13, ctc12, ctc9, ctc16, ctc4, ctc1, ctc7, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v2451], secs: v2453, time: v2452, didSend: v1167, from: v2450 } = txn1;
  switch (v2451[0]) {
    case 'aST0_634': {
      const v2454 = v2451[1];
      return;
      break;
      }
    case 'addWL0_634': {
      const v2820 = v2451[1];
      return;
      break;
      }
    case 'cBT0_634': {
      const v3186 = v2451[1];
      return;
      break;
      }
    case 'cCM0_634': {
      const v3552 = v2451[1];
      return;
      break;
      }
    case 'dBT0_634': {
      const v3918 = v2451[1];
      return;
      break;
      }
    case 'docHash0_634': {
      const v4284 = v2451[1];
      return;
      break;
      }
    case 'optIn0_634': {
      const v4650 = v2451[1];
      return;
      break;
      }
    case 'remWL0_634': {
      const v5016 = v2451[1];
      undefined /* setApiDetails */;
      ;
      const v5099 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '1')];
      const v5100 = v2210[stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '2')];
      const v5101 = [v2211, v5099, v5100];
      const v5102 = stdlib.Array_set(v2158, stdlib.checkedBigNumberify('./index.rsh:111:35:dot', stdlib.UInt_max, '0'), v5101);
      ;
      const v5368 = v5016[stdlib.checkedBigNumberify('./index.rsh:182:13:spread', stdlib.UInt_max, '0')];
      const v5369 = stdlib.addressEq(v2450, v1831);
      const v5371 = stdlib.addressEq(v2450, v2213);
      const v5372 = v5369 ? true : v5371;
      stdlib.assert(v5372, {
        at: './index.rsh:193:24:application',
        fs: ['at ./index.rsh:192:13:application call to [unknown function] (defined at: ./index.rsh:192:13:function exp)'],
        msg: null,
        who: 'remWL'
        });
      await stdlib.mapSet(map6, v5368, undefined /* Nothing */);
      const v5374 = true;
      const v5375 = await txn1.getOutput('remWL', 'v5374', ctc13, v5374);
      if (v1167) {
        stdlib.protect(ctc0, await interact.out(v5016, v5375), {
          at: './index.rsh:183:13:application',
          fs: ['at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:13:function exp)', 'at ./index.rsh:196:20:application call to "res" (defined at: ./index.rsh:192:13:function exp)', 'at ./index.rsh:192:13:application call to [unknown function] (defined at: ./index.rsh:192:13:function exp)'],
          msg: 'out',
          who: 'remWL'
          });
        }
      else {
        }
      
      const v9537 = v2155;
      const v9539 = v5102;
      const v9540 = v2155.totST;
      const v9541 = v2155.totBT;
      const v9542 = v2155.distrNum;
      const v9543 = v2155.saleLocked;
      const v9544 = v2155.docHash;
      const v9545 = v2155.cv;
      const v9546 = v5102[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
      const v9547 = v9546[stdlib.checkedBigNumberify('./index.rsh:137:45:application', stdlib.UInt_max, '0')];
      const v9548 = stdlib.cast("UInt", "UInt256", v9547, false);
      const v9549 = v2155.ctcMan;
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
    impure: [`aST(address,address,uint256)byte`, `addWL(address)byte`, `cBT()uint256`, `cCM(address)byte`, `dBT(uint256)byte`, `docHash(byte[96])byte`, `optIn()byte`, `remWL(address)byte`],
    pure: [`claimSTBT(address)(uint256,uint256)`, `saleLocked()byte`, `totSTBTD()(uint256,uint256,uint256)`, `totSTBTDRec(address)(uint256,uint256,uint256)`, `vBtBal()uint256`, `vCcCm()(address,address)`, `vHash()byte[96]`, `vcVersion()byte[4]`, `wlMember(address)byte`, `wlMembers()address[25]`],
    sigs: [`aST(address,address,uint256)byte`, `addWL(address)byte`, `cBT()uint256`, `cCM(address)byte`, `claimSTBT(address)(uint256,uint256)`, `dBT(uint256)byte`, `docHash(byte[96])byte`, `optIn()byte`, `remWL(address)byte`, `saleLocked()byte`, `totSTBTD()(uint256,uint256,uint256)`, `totSTBTDRec(address)(uint256,uint256,uint256)`, `vBtBal()uint256`, `vCcCm()(address,address)`, `vHash()byte[96]`, `vcVersion()byte[4]`, `wlMember(address)byte`, `wlMembers()address[25]`]
    },
  appApproval: `BiA6AH8BCCAD/QL8A/sE+gX5Bm+gBgQGGBBgRMAMhA3NDu0UQBHGAQXoB/Hhk+EIv8rY8Aqwgt+wDOfsjrgN2I6Z4A6OFuDlw7AM7xb52Z68CaG32tcKrhXOFe4V3dHhmAn5hIqRBf3mqaUHitLCmwi8rcerCKwXyfyYvAWc+IOIAqHg7OcEjxaXxMGvAQL///////////8BKPUUnRUHJhoBAQEGAQABAgEDAQQBBQEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIjUAMRhBFCgnGGRJIls1AUklWzUCIRBbNQgxGSQSQQBcMQAhG69LASpLAlcAf2ZLAShLAld/f2ZLAStLAlf+f2ZLAScESwIhBiNYZksBJwVLAiEHI1hmSwEnBksCIQgjWGZLASlLAiEJI1hmSwEnB0sCIQohC1hmSEhCE5w2GgAXSUEEsiI1BCQ1BkkhHAxAAvJJIR0MQAFwSSEeDEAAm0khHwxAACNJISAMQAAVISASRDYaATX/Jwc0/1AhF69QQgU1IR8SRDQBACEeEkQ0ASEFEkQqZChkUCtkUCcEZFAnBWRQJwZkUClkUCcHZFAnCGRQJwlkUCcKZFAnC2RQJwxkUCcNZFAnDmRQJw9kUCcQZFAnEWRQJxJkUCcTZFAnFGRQJxVkUCcWZFAnF2RQSTUDISEkWDUHQhLtSSEiDEAAVSEiEkQ0ASEFEkQ2GgE1/zIDNP+IEvlXQiFJNf5XASA0/iJVTTIDNP+IEuRXhCFJNf5XASA0/iJVTVAyAzT/iBLOV6UhSTX+VwEgNP4iVU1QNQdCEpEhHRJENAEhBRJEKmQoZFArZFAnBGRQJwVkUCcGZFApZFAnB2RQJwhkUCcJZFAnCmRQJwtkUCcMZFAnDWRQJw5kUCcPZFAnEGRQJxFkUCcSZFAnE2RQJxRkUCcVZFAnFmRQJxdkUEk1AyEjIQ1YNQdCEh9JISQMQAD8SSElDEAAgiElEkQ0ASEFEkQqZChkUCtkUCcEZFAnBWRQJwZkUClkUCcHZFAnCGRQJwlkUCcKZFAnC2RQJwxkUCcNZFAnDmRQJw9kUCcQZFAnEWRQJxJkUCcTZFAnFGRQJxVkUCcWZFAnF2RQSTUDISYhBFg0AyEnIQRYUDQDISghBFhQNQdCEY8hJBJENAEhBRJEKmQoZFArZFAnBGRQJwVkUCcGZFApZFAnB2RQJwhkUCcJZFAnCmRQJwtkUCcMZFAnDWRQJw5kUCcPZFAnEGRQJxFkUCcSZFAnE2RQJxRkUCcVZFAnFmRQJxdkUEk1A4GMFyEEWDUHQhEcSSEpDEAAMiEpEkQ0ASEFEkQ2GgGIES5XxgFJNf4iVUAABiI1/0IABiQ1/0IAADT/FlEHCDUHQhDjIRwSRDQBIQUSRDYaATX/MgM0/4gQ9lcAIUk1/lcBIDT+IlVNMgM0/4gQ4VchIUk1/lcBIDT+IlVNUDUHQhCkSSEqDEAA4UkhKwxAAK9JISwMQAAwSSEtDEAAFCEtEkQ2GgE1/yg0/1AhF69QQgJEISwSRDYaATX/JwU0/1AhF69QQgIvISsSRDQBIQUSRCpkKGRQK2RQJwRkUCcFZFAnBmRQKWRQJwdkUCcIZFAnCWRQJwpkUCcLZFAnDGRQJw1kUCcOZFAnD2RQJxBkUCcRZFAnEmRQJxNkUCcUZFAnFWRQJxZkUCcXZFBJNQNXACA0AyEuIQRYUDUHQg/nSSEvDEAAESEvEkQ2GgE1/ycGNP9QQgGfISoSRCcYNf8pNP9QIRGvUEIBjEkhMAxAAI5JITEMQAByITESRDQBIQUSRCpkKGRQK2RQJwRkUCcFZFAnBmRQKWRQJwdkUCcIZFAnCWRQJwpkUCcLZFAnDGRQJw1kUCcOZFAnD2RQJxBkUCcRZFAnEmRQJxNkUCcUZFAnFWRQJxZkUCcXZFBJNQMhMiERWDUHQg88ITASRDYaATX/JwQ0/1AhF69QQgD3SSEzDEAAEyEzEkQnGDX/KzT/UCERr1BCAN2B9frfkgESRDYaATYaAlA2GgNQNf8qNP9QQgDBNhoCFzUENhoDNhoBF0khNAxAClNJIQUMQAClIQUSRCEFNAESRDQESSISTDQCEhFEKmQoZFArZFAnBGRQJwVkUCcGZFApZFAnB2RQJwhkUCcJZFAnCmRQJwtkUCcMZFAnDWRQJw5kUCcPZFAnEGRQJxFkUCcSZFAnE2RQJxRkUCcVZFAnFmRQJxdkUEk1A1cAIDX/gASnZcS0sDIGITUPRDT/MQASRDT/NAMhBFs0AyE2ITdYMgY0AyE4IRhYQgxXSCEFNAESRDQESSISTDQCEhFEKmQoZFArZFAnBGRQJwVkUCcGZFApZFAnB2RQJwhkUCcJZFAnCmRQJwtkUCcMZFAnDWRQJw5kUCcPZFAnEGRQJxFkUCcSZFAnE2RQJxRkUCcVZFAnFmRQJxdkUEk1A0lKSkpKSklXACA1/yEEWzX+ITYhN1g1/SE4IRhYNfwhJiEEWDX7ISchBFg1+iEoIQRYNfkhISRYFzX4ITIhEVg19yEjIQ1YNfaB8xYhGFg19YGEF1s19CEuIQRYNfNJNQU18oAE47jRlTTyULAyBiE1DEQ08iJVSSENDEACAEkhDgxAANBJITkMQACfITkSRDTyVwEgNfAxADT/EjEANPMSEUQ08EmIDUEiIRlMVksBKksCVwB/ZksBKEsCV39/ZksBK0sCV/5/ZksBJwRLAiEGI1hmSwEnBUsCIQcjWGZLAScGSwIhCCNYZksBKUsCIQkjWGZLAScHSwIhCiELWGZISIAJAAAAAAAAFP4BsCg1BzT/NP40/TIGNPQWNPVXCAhQNPVXEAFQQgq8SIAJAAAAAAAAE4IBsCg1BzT/NP40/TIGNPQWNPVXCAhQNPVXEAFQQgqSSSEaDEAAd0g08lcBYDXwMQA0/xIxADTzEhFEgAkAAAAAAAASCQGwKDUHNP80/jTzNP1XICBQNPZQNP0hEiETWFA0/SEUJVhQNPlQNPBQNPgWUQcIUDT6UDT7UDT9IRUhDFhQNP0hFiVYUDIGNPQWNPVXCAhQNPVXEAFQQgoUSDTyVwEgNfA08Ek170lKIRBbIhJEJVsiEkQiWyISRCEPWzXuNO40/ogMPTEANP8SMQA08xIRRDTuIg1EgAkAAAAAAAAQfgGwKDUHNP80/jTzNO9QNPZQNP0hEiETWFA0/SEUJVhQNPknGaCIDBpQNPdQNPgWUQcIUDT6NO+giAwHUDT7UDT9IRUhDFhQNP0hFiVYUDIGNPQ07ggWNPVXCAhQNPVXEAFQQglpSSE0DEACg0khBQxAAHdINPJXASA18DEANP8SMQA08xIRRIAJAAAAAAAADt4BsCg1BzT/NP408DT9VyAgUDT2UDT9IRIhE1hQNP0hFCVYUDT5UDT3UDT4FlEHCFA0+lA0+1A0/SEVIQxYUDT9IRYlWFAyBjT0FjT1VwgIUDT1VxABUEII5EixIrIBIQ6yEDQIshizNPQWNPVXCAhQNPVXEAFQNfAxAIgKw1fGAUk17iJVQAAGIjXvQgAGJDXvQgAANO9ENPBXABFJNe4iWzXtIQ+vNO0WUDIDpUQ0+zIDpUQyAzEAiAqFV2MhSTXrVwEgNOsiVU017DT7NOynRDTsMgOlRDTsNP1XICCjiArPNPuiiArJSTXrSUohEFsiEkQlWyISRCJbIhJEIQ9bSTXqNO0ORLEisgE06rISIQ2yEDEAshQ0/rIRszEAMQCICh0oMgMxAIgKFVeEIUk16VcBIDTpIlVNNOugiApyUDXpSVcAhDTpUEyBpQGBwwZYUEsBKksCVwB/ZksBKEsCV39/ZksBK0sCV/5/ZksBJwRLAiEGI1hmSwEnBUsCIQcjWGZLAScGSwIhCCNYZksBKUsCIQkjWGZLAScHSwIhCiELWGZISDEAMQCICZMoMgMxAIgJi1elIUk16VcBIDTpIlVNJxmgiAnoUDXpSVcApTTpUEwhGYGiBlhQSwEqSwJXAH9mSwEoSwJXf39mSwErSwJX/n9mSwEnBEsCIQYjWGZLAScFSwIhByNYZksBJwZLAiEII1hmSwEpSwIhCSNYZksBJwdLAiEKIQtYZkhIgAgAAAAAAAANTDTrULA06zUHNP80/jT9MgY07TTqCRY07lcICFA07lcQAVBCBt9JJAxAAQFINPJXASA18DTwNe8xADT/EjEANPMSEUQ070mICL4kIRlMVksBKksCVwB/ZksBKEsCV39/ZksBK0sCV/5/ZksBJwRLAiEGI1hmSwEnBUsCIQcjWGZLAScGSwIhCCNYZksBKUsCIQkjWGZLAScHSwIhCiELWGZISDT9IRZbSTXuJAgiNO4hDw9NNe2ACQAAAAAAAAu9AbAoNQc0/zT+NPM0/VcgIFA09lA0/SESIRNYUDT9IRQlWFA0+VA091A0+BZRBwhQNPpQNPtQNP0hFSEMWEkiIQQ07QtSNO9QTCEESTTtCwghDFJQUDTtFlAyBjT0FjT1VwgIUDT1VxABUEIF2Eg08lcBYDXwIjXvsSKyASEOshA0CLIYszTvJAhJNe8hDgxA/+Y08FcAIDXvNPBXICA17jTwV0AgNe007zT/EjTvNPMSEUQ07TIDpUQ07kmIB4kkIRlMVksBKksCVwB/ZksBKEsCV39/ZksBK0sCV/5/ZksBJwRLAiEGI1hmSwEnBUsCIQcjWGZLAScGSwIhCCNYZksBKUsCIQkjWGZLAScHSwIhCiELWGZISDTuSYgHKigyAzTuiAciVwAhSTXsVwEgNOwiVU007aCIB39QNeyBIYHHB1g07ExQSwEqSwJXAH9mSwEoSwJXf39mSwErSwJX/n9mSwEnBEsCIQYjWGZLAScFSwIhByNYZksBJwZLAiEII1hmSwEpSwIhCSNYZksBJwdLAiEKIQtYZkhINO5JiAanKDIDNO6IBp9XYyFJNexXASA07CJVTTTtoIgG/FA17ElXAGM07FBMgYQBgeQGWFBLASpLAlcAf2ZLAShLAld/f2ZLAStLAlf+f2ZLAScESwIhBiNYZksBJwVLAiEHI1hmSwEnBksCIQgjWGZLASlLAiEJI1hmSwEnB0sCIQohC1hmSEghDK807ogGHIHHAYGhBlhJNeskIQxYNOsiVU017IEJrzXrIjXqNOwlNOoLJVgXNek06yJVQAAGJDXoQgAGIjXoQgAANOsoNOoWUDToIjTpEhBNNes06iQISTXqgWQMQP/ENO5JiAW9KDTsIiUiNOtJNeokWzTqIlVNC1I07UlKIRBbIhJEJVsiEkQiWyISRCEPWxZQNOwlSSI060k16iRbNOoiVU0LCCEMUlBQNepXAMc06lBLASpLAlcAf2ZLAShLAld/f2ZLAStLAlf+f2ZLAScESwIhBiNYZksBJwVLAiEHI1hmSwEnBksCIQgjWGZLASlLAiEJI1hmSwEnB0sCIQohC1hmSEiACQAAAAAAAAoUAbAoNQc0/zT+NPM0/VcgIFA09lA0/SESIRNYUDT9IRQlWFA0+VA091A0+BZRBwhQNPpQNPs07aCIBUhQNP0hFSEMWFA0/SEWJVhQMgY09BY09VcICFA09VcQAVBCArAiEkSBwJoMiATisSKyASEOshAishiABgYxADIJErIeKbIfs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUpJVwCANf9XgAEXNf5XgSA1/YGhAVs1/FepIDX7gASaMPkdNP9QNP4WUQcIUDT9UDT8FlA0+1CwIRivSTX6VwARNfmBoI0GiARnsSKyASKyEiENshAyCrIUNPyyEbMhEK81+DEANPw0/TIDUIAEMS4wMlA0+ElQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQUCWvUDIDUIBgYWpkbmFlaW5hd2luZGlhZW5ndG5pZnJqd3JpdG5pcXdybmlyZWZpbmRpbmlnYWpkbmFlaW5hd2lkaWFlbmd0bmlpdG5pcXdybmlyZWZpbmRpbmlnZnVhZWJmdWJhd3VyUDT+FlEHCFAyA1AyA1AxADEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUDEAUFAlr1AyBiWvNPlXCAhQNPlXEAFQQgAANf81/jX9Nfw1+zT9ga0OIQRYNfo0/YGNDiEEWDX5NP2BjA0hBFg1+DT9gYwOJFgXNfc0/YGsDSERWDX2NP1XQAQ19TT/VwARSTX0Ils18yEPrzTzFlA18jT9VwAgNfE0+zT8FlA0/VA0/1A0+lA0+VA0+FA09xZRBwhQNPZQNPVQNPRQNPMWUDTyUDTxUCpLAVcAf2coSwFXf39nK0sBV/5/ZycESwEhBiNYZycFSwEhByNYZycGSwEhCCNYZylLASEJI1hnJwdLASEKI1hnJwhLAYH4ByNYZycJSwGB9wgjWGcnCksBgfYJI1hnJwtLAYH1CiNYZycMSwGB9AsjWGcnDUsBgfMMI1hnJw5LAYHyDSNYZycPSwGB8Q4jWGcnEEsBgfAPI1hnJxFLAYHvECNYZycSSwGB7hEjWGcnE0sBge0SI1hnJxRLAYHsEyNYZycVSwGB6xQjWGcnFksBgeoVI1hnJxdLAYHpFoFjWGdIIQU1ATIGNQJCAC0xGSEaEkSxIrIBIQ6yEDQIshghGrIZs7EisgEisggkshAyCbIJMgqyB7NCAAUxGSISRCcYNAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJJAgyBBJEMRYSRCRDMRkiEkRC/98iMTQSRIEZMTUSRCIxNhJEJTE3EkQiNQEiNQIiNQhC/6ZJMRhhQAAFSCEbr4lJKmJLAShiUEsBK2JQSwEnBGJQSwEnBWJQSwEnBmJQSwEpYlBLAScHYlBMSIk0AElKJAg1ADgHMgoSRDgQJBJEOAgSRIk0AElKSSQINQA4FDIKEkQ4ECENEkQ4EU8CEkQ4EhJEiUkVIQRMCa9MUIk=`,
  appClear: `Bg==`,
  companionInfo: {
    api_aST: 6,
    api_cBT: 1
    },
  extraPages: 2,
  mapDataKeys: 8,
  mapDataSize: 1000,
  stateKeys: 24,
  stateSize: 3020,
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
                "internalType": "struct T19",
                "name": "v1832",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v1833",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v1834",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1835",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1836",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
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
                "internalType": "struct T19",
                "name": "v1832",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v1833",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v1834",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1835",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1836",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
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
                    "internalType": "enum _enum_T27",
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
                    "internalType": "struct T22",
                    "name": "_aST0_634",
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
                    "internalType": "struct T23",
                    "name": "_addWL0_634",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_634",
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
                    "internalType": "struct T23",
                    "name": "_cCM0_634",
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
                    "internalType": "struct T25",
                    "name": "_dBT0_634",
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
                        "internalType": "struct T8",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T26",
                    "name": "_docHash0_634",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_634",
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
                    "internalType": "struct T23",
                    "name": "_remWL0_634",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T27",
                "name": "v2451",
                "type": "tuple"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T30",
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
        "internalType": "struct T32",
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
    "name": "_reach_oe_v2580",
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
    "name": "_reach_oe_v3005",
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
    "name": "_reach_oe_v3404",
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
    "name": "_reach_oe_v3806",
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
    "name": "_reach_oe_v4222",
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
    "name": "_reach_oe_v4617",
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
    "name": "_reach_oe_v4994",
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
    "name": "_reach_oe_v5374",
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
            "internalType": "enum _enum_T3",
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
        "internalType": "struct T3",
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
                    "internalType": "enum _enum_T27",
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
                    "internalType": "struct T22",
                    "name": "_aST0_634",
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
                    "internalType": "struct T23",
                    "name": "_addWL0_634",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_634",
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
                    "internalType": "struct T23",
                    "name": "_cCM0_634",
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
                    "internalType": "struct T25",
                    "name": "_dBT0_634",
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
                        "internalType": "struct T8",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T26",
                    "name": "_docHash0_634",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_634",
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
                    "internalType": "struct T23",
                    "name": "_remWL0_634",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T27",
                "name": "v2451",
                "type": "tuple"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T30",
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
        "internalType": "struct T32",
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
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v9560",
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
        "internalType": "struct T4",
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
        "internalType": "struct T8",
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
        "internalType": "struct T14",
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
        "name": "v9564",
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
        "internalType": "struct T14",
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
        "internalType": "struct T15",
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
        "internalType": "struct T8",
        "name": "",
        "type": "tuple"
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
            "internalType": "bytes4",
            "name": "elem0",
            "type": "bytes4"
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
        "internalType": "address payable",
        "name": "v9570",
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
  Bytecode: `0x60806040526040516200649b3803806200649b83398101604081905262000026916200103c565b60008055436003556200003862000bac565b7f02b022aadaf3519406008b26ba04539ab684bf46cb83f65dee6845a03a66bdf033836040516200006b92919062001115565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528185018051949094528051518301518451909301929092529051518101519151911515910152620000ce34156011620009df565b6060810151339060006001600160a01b0390921660209290920201526060810151339060016001600160a01b0390921660209290920201526060810151339060026001600160a01b0390921660209290920201526060810151339060036001600160a01b0390921660209290920201526060810151339060046001600160a01b0390921660209290920201526060810151339060056001600160a01b0390921660209290920201526060810151339060066001600160a01b0390921660209290920201526060810151339060076001600160a01b0390921660209290920201526060810151339060086001600160a01b0390921660209290920201526060810151339060096001600160a01b03909216602092909202015260608101513390600a6001600160a01b03909216602092909202015260608101513390600b6001600160a01b03909216602092909202015260608101513390600c6001600160a01b03909216602092909202015260608101513390600d6001600160a01b03909216602092909202015260608101513390600e6001600160a01b03909216602092909202015260608101513390600f6001600160a01b0390921660209290920201526060810151339060106001600160a01b0390921660209290920201526060810151339060116001600160a01b0390921660209290920201526060810151339060126001600160a01b0390921660209290920201526060810151339060136001600160a01b0390921660209290920201526060810151339060146001600160a01b0390921660209290920201526060810151339060156001600160a01b0390921660209290920201526060810151339060166001600160a01b0390921660209290920201526060810151339060176001600160a01b0390921660209290920201526060810151339060186001600160a01b039092166020928302919091015260808201805160009081905281519092018290525160a083015190916020020152608081015160a082015160016020020152608081015160a082015160026020020152608081015160a082015160036020020152608081015160a082015160046020020152608081015160a082015160056020020152608081015160a082015160066020020152608081015160a082015160076020020152608081015160a082015160086020020152608081015160a082015160096020020152608081015160a0820151600a6020020152608081015160a0820151600b6020020152608081015160a0820151600c6020020152608081015160a0820151600d6020020152608081015160a0820151600e6020020152608081015160a0820151600f6020020152608081015160a082015160106020020152608081015160a082015160116020020152608081015160a082015160126020020152608081015160a082015160136020020152608081015160a082015160146020020152608081015160a082015160156020020152608081015160a082015160166020020152608081015160a082015160176020020152608081015160a082015160186020020152608081015160a082015160196020020152608081015160a0820151601a6020020152608081015160a0820151601b6020020152608081015160a0820151601c6020020152608081015160a0820151601d6020020152608081015160a0820151601e6020020152608081015160a0820151601f602002018190525080608001518160a00151602060648110620005de57620005de620011a8565b602090810291909101919091526080828101805160a080860180516104200192909252825182516104400152825182516104600152825182516104800152825182516104a00152825182516104c00152825182516104e00152825182516105000152825182516105200152825182516105400152825182516105600152825182516105800152825182516105a00152825182516105c00152825182516105e00152825182516106000152825182516106200152825182516106400152825182516106600152825182516106800152825182516106a00152825182516106c00152825182516106e00152825182516107000152825182516107200152825182516107400152825182516107600152825182516107800152825182516107a00152825182516107c00152825182516107e00152825182516108000152825182516108200152825182516108400152825182516108600152825182516108800152825182516108a00152825182516108c00152825182516108e00152825182516109000152825182516109200152825182516109400152825182516109600152825182516109800152825182516109a00152825182516109c00152825182516109e0015282518251610a00015282518251610a20015282518251610a40015282518251610a60015282518251610a80015282518251610aa0015282518251610ac0015282518251610ae0015282518251610b00015282518251610b20015282518251610b40015282518251610b60015282518251610b80015282518251610ba0015282518251610bc0015282518251610be0015282518251610c00015282518251610c20015282518251610c40015291518151610c60015260c08086018051631897181960e11b905260e080880180517f616a646e6165696e6177696e646961656e67746e6966726a777269746e697177905280517f726e69726566696e64696e6967616a646e6165696e617769646961656e67746e9089015280517f6969746e697177726e69726566696e64696e69676675616562667562617775726040918201528a89018051820151610100808d0180516001600160a01b0390931690925281516000908d018190529651825190940193909352965187516060908101919091528751909901859052865190970184905290518551909401939093529351909501518251901515930192909252805190910183905280516101200183905290830151815161014001525161016001526200097662000c8d565b80513390526020838101516060015182516001600160a01b03909116908201526101008301518183018051919091525143908201528201516040830151620009c2919060009062000a09565b602082015160400152620009d68162000a8c565b505050620014b0565b8162000a055760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b62000a1362000cb8565b60005b600181101562000a695784816001811062000a355762000a35620011a8565b602002015182826001811062000a4f5762000a4f620011a8565b60200201528062000a6081620011be565b91505062000a16565b508181846001811062000a805762000a80620011a8565b60200201529392505050565b604080516020808201835260008252830151909101515151815262000ab062000d05565b8251516001600160a01b0390811682528351602090810151821681840152808501805151604080860191909152815181015160608601528151516101209081015160808701528251516101009081015160a080890191909152845151015160c08089019190915284515160e09081015115159089015284515101519087015282515182015190860152815181015151610140860152815181015151516101608601528551610180860152905151519092166101a0840152600360005543600155905162000b80918391016200135b565b6040516020818303038152906040526002908051906020019062000ba692919062000db7565b50505050565b60408051610180810190915260006101208201818152610140830182905261016083019190915281526020810162000be362000cb8565b8152604080516060810182526000808252602082810182905292820152910190815260200162000c1262000e46565b815260200162000c35604051806040016040528060008152602001600081525090565b815260200162000c4462000e65565b8152604080516020818101909252600081529101908152604080516060810182526000808252602082810182905292820152910190815260200162000c8862000ea0565b905290565b60408051608081018252600091810182815260608201929092529081526020810162000c8862000f33565b60405180602001604052806001905b62000cee604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908162000cc75790505090565b604080516101c0810182526000808252602082015290810162000d2762000ea0565b815260200162000d3662000cb8565b81526000602080830182905260408084018390526060808501849052608085018490528151808201835284815280840185905280830185905260a08601528151808401835284815260c086015281519081018252838152918201839052810182905260e0830152610100820181905261012082018190526101409091015290565b82805462000dc59062001473565b90600052602060002090601f01602090048101928262000de9576000855562000e34565b82601f1062000e0457805160ff191683800117855562000e34565b8280016001018555821562000e34579182015b8281111562000e3457825182559160200191906001019062000e17565b5062000e4292915062000f5e565b5090565b6040518061032001604052806019906020820280368337509192915050565b60405180610c8001604052806064905b604080518082019091526000808252602082015281526020019060019003908162000e755790505090565b604080516101808101825260008082526020808301829052835190810184529081529091820190815260200162000ed662000e65565b8152600060208083018290526040808401839052805160608082018352848252928101849052908101839052908301526080820181905260a0820181905260c082015260e00162000f2662000e46565b8152602001600081525090565b604051806060016040528062000f4862000ea0565b81526020016000815260200162000c8862000cb8565b5b8082111562000e42576000815560010162000f5f565b604080519081016001600160401b038111828210171562000fa657634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b038111828210171562000fa657634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b038111828210171562000fa657634e487b7160e01b600052604160045260246000fd5b805180151581146200101f57600080fd5b919050565b80516001600160a01b03811681146200101f57600080fd5b60008183036101208112156200105157600080fd5b6200105b62000f75565b83518152601f1982019150610100808312156200107757600080fd5b6200108162000fac565b60808412156200109057600080fd5b6200109a62000fdd565b935060208601518452604086015160208501526060860151604085015260808601516060850152838152620010d260a087016200100e565b6020820152620010e560c0870162001024565b6040820152620010f860e0870162001024565b606082015294015160808501526020810193909352509092915050565b60006101408201905060018060a01b0380851683528351602084015260208401518051805160408601526020810151606086015260408101516080860152606081015160a0860152506020810151151560c08501528160408201511660e085015260608101519150620011946101008501836001600160a01b03169052565b608081015161012085015250509392505050565b634e487b7160e01b600052603260045260246000fd5b6000600019821415620011e157634e487b7160e01b600052601160045260246000fd5b5060010190565b8060005b606481101562000ba6578151805185526020908101518186015260409094019390910190600101620011ec565b8060005b601981101562000ba65781516001600160a01b03168452602093840193909101906001016200121d565b80516001600160a01b031682526020810151602083015260408101516200127b6040840182516001600160e01b0319169052565b506060810151620012906060840182620011e8565b50608081015161196083015260a081015161198083015260c081015180516119a084015260208101516119c0840152604001516119e083015260e08101511515611a00830152610100810151611a20830152610120810151611a4083015261014081015162001304611a6084018262001219565b506101600151611d809190910152565b8060005b600181101562000ba6576200134484835180518252602080820151908301526040908101511515910152565b606093909301926020919091019060010162001318565b81516001600160a01b03168152612000810160208301516200138860208401826001600160a01b03169052565b5060408301516200139d604084018262001247565b506060830151620013b3611de084018262001314565b506080830151611e4083015260a0830151611e6083015260c0830151611e8083015260e08301511515611ea08301526101008301518051611ec0840152602080820151611ee0850152604091820151611f00850152610120850151516001600160e01b031916611f208501526101408501518051611f4086015290810151611f6085015201511515611f80830152610160830151611fa0830152610180830151611fc08301526101a0909201516001600160a01b0316611fe09091015290565b600181811c908216806200148857607f821691505b60208210811415620014aa57634e487b7160e01b600052602260045260246000fd5b50919050565b614fdb80620014c06000396000f3fe6080604052600436106101c45760003560e01c80637333bd09116100f6578063acf0cc221161008f578063d750cd0811610061578063d750cd0814610515578063d9dcd84d14610528578063dc01fb9d14610555578063e9b451af1461057557005b8063acf0cc221461049e578063cadc2e7a146104be578063d07b8ddb146104de578063d1ad1a371461050057005b806383230757116100c85780638323075714610433578063a153a9bd14610448578063ab53f2c61461045b578063abe9f98d1461047e57005b80637333bd09146103e557806373b4522c146103ed57806374fcef1214610400578063817d57f31461041357005b80631fa8b02f1161016857806354f2991c1161013a57806354f2991c1461037b578063573fa8a11461038e57806359cac3a4146103b05780635b48684e146103dd57005b80631fa8b02f146102be5780632080ea1c146103005780632152dd461461032d5780633bc5b7bf1461035b57005b806312822a75116101a157806312822a751461025e5780631956a232146102735780631e3f5f07146102965780631e93b0f1146102a957005b8063046989b6146101cd57806306dc92ff1461020e578063125f48e41461023b57005b366101cb57005b005b3480156101d957600080fd5b506101e2610588565b6040805182516001600160a01b0390811682526020938401511692810192909252015b60405180910390f35b34801561021a57600080fd5b5061022e610229366004614147565b6106a3565b604051610205919061418a565b61024e610249366004614147565b6106cf565b6040519015158152602001610205565b34801561026a57600080fd5b5061024e610713565b34801561027f57600080fd5b506102886107d6565b604051908152602001610205565b61024e6102a43660046141ba565b61089a565b3480156102b557600080fd5b50600354610288565b3480156102ca57600080fd5b506102de6102d9366004614147565b6108f9565b6040805182518152602080840151908201529181015190820152606001610205565b34801561030c57600080fd5b5061032061031b366004614147565b610abe565b60405161020591906141fb565b34801561033957600080fd5b50610342610ae4565b60405190516001600160e01b0319168152602001610205565b34801561036757600080fd5b5061022e610376366004614147565b610bb5565b61024e610389366004614358565b610bdb565b34801561039a57600080fd5b506103a3610c16565b6040516102059190614374565b3480156103bc57600080fd5b506103d06103cb366004614147565b610cf3565b6040516102059190614395565b61024e610e5f565b610288610e8f565b6101cb6103fb3660046143ac565b610ebf565b61024e61040e366004614147565b610ee3565b34801561041f57600080fd5b5061022e61042e366004614147565b610f27565b34801561043f57600080fd5b50600154610288565b61024e610456366004614147565b610f4d565b34801561046757600080fd5b50610470610f92565b6040516102059291906143f0565b34801561048a57600080fd5b5061024e610499366004614147565b61102f565b3480156104aa57600080fd5b5061022e6104b9366004614147565b611156565b3480156104ca57600080fd5b5061022e6104d9366004614147565b61117c565b3480156104ea57600080fd5b506104f36111a2565b6040516102059190614456565b34801561050c57600080fd5b506102de611271565b6101cb610523366004614465565b61139a565b34801561053457600080fd5b50610548610543366004614147565b6113ba565b6040516102059190614478565b34801561056157600080fd5b5061022e610570366004614147565b6113cb565b61024e6105833660046144ca565b6113f1565b604080518082019091526000808252602082015260036000541415610694576000600280546105b6906144e3565b80601f01602080910402602001604051908101604052809291908181526020018280546105e2906144e3565b801561062f5780601f106106045761010080835404028352916020019161062f565b820191906000526020600020905b81548152906001019060200180831161061257829003601f168201915b50505050508060200190518101906106479190614821565b9050610669604080516060810182526000602082018181529282015290815290565b815181516001600160a01b0391821690526101a0909201518151921660209092019190915251919050565b6106a06000600c61142c565b90565b60408051606081018252600080825260208201819052918101919091526106c982611452565b92915050565b60006106d961397d565b60208101805151600190525151604001516001600160a01b03841690526106fe613997565b6107088282611524565b602001519392505050565b6000600360005414156107ca5760006002805461072f906144e3565b80601f016020809104026020016040519081016040528092919081815260200182805461075b906144e3565b80156107a85780601f1061077d576101008083540402835291602001916107a8565b820191906000526020600020905b81548152906001019060200180831161078b57829003601f168201915b50505050508060200190518101906107c09190614821565b60e0015192915050565b6106a06000600861142c565b60006003600054141561088e576000600280546107f2906144e3565b80601f016020809104026020016040519081016040528092919081815260200182805461081e906144e3565b801561086b5780601f106108405761010080835404028352916020019161086b565b820191906000526020600020905b81548152906001019060200180831161084e57829003601f168201915b50505050508060200190518101906108839190614821565b610180015192915050565b6106a06000600b61142c565b60006108a461397d565b6020818101805151600090528051518201516001600160a01b0388811690915281515183015190871690830152515101516040018390526108e3613997565b6108ed8282611524565b519150505b9392505050565b61091d60405180606001604052806000815260200160008152602001600081525090565b60036000541415610aad57600060028054610937906144e3565b80601f0160208091040260200160405190810160405280929190818152602001828054610963906144e3565b80156109b05780601f10610985576101008083540402835291602001916109b0565b820191906000526020600020905b81548152906001019060200180831161099357829003601f168201915b50505050508060200190518101906109c89190614821565b90506109f160408051608081018252600060208201818152928201819052606082015290815290565b60016109fc85612ede565b516001811115610a0e57610a0e614164565b14610a1a576000610a28565b610a2384612ede565b604001515b8151526001610a3685612f6b565b516001811115610a4857610a48614164565b14610a54576000610a62565b610a5d84612f6b565b604001515b8151602001526001610a7385612ff8565b516001811115610a8557610a85614164565b14610a91576000610a9f565b610a9a84612ff8565b604001515b815160400152519392505050565b610ab96000600a61142c565b919050565b60408051606081018252600080825260208201819052918101919091526106c982613085565b60408051602081019091526000815260036000541415610ba957600060028054610b0d906144e3565b80601f0160208091040260200160405190810160405280929190818152602001828054610b39906144e3565b8015610b865780601f10610b5b57610100808354040283529160200191610b86565b820191906000526020600020905b815481529060010190602001808311610b6957829003601f168201915b5050505050806020019051810190610b9e9190614821565b610120015192915050565b6106a06000600e61142c565b60408051606081018252600080825260208201819052918101919091526106c98261314e565b6000610be561397d565b6020810180515160059052515160c00151839052610c01613997565b610c0b8282611524565b60a001519392505050565b60408051606081018252600080825260208201819052918101829052905460031415610ce757600060028054610c4b906144e3565b80601f0160208091040260200160405190810160405280929190818152602001828054610c77906144e3565b8015610cc45780601f10610c9957610100808354040283529160200191610cc4565b820191906000526020600020905b815481529060010190602001808311610ca757829003601f168201915b5050505050806020019051810190610cdc9190614821565b610100015192915050565b6106a06000600d61142c565b604080518082019091526000808252602082015260036000541415610e5357600060028054610d21906144e3565b80601f0160208091040260200160405190810160405280929190818152602001828054610d4d906144e3565b8015610d9a5780601f10610d6f57610100808354040283529160200191610d9a565b820191906000526020600020905b815481529060010190602001808311610d7d57829003601f168201915b5050505050806020019051810190610db29190614821565b9050610dd4604080516060810182526000602082018181529282015290815290565b6001610ddf8561314e565b516001811115610df157610df1614164565b14610dfd576000610e0b565b610e068461314e565b604001515b8151526001610e19856131db565b516001811115610e2b57610e2b614164565b14610e37576000610e45565b610e40846131db565b604001515b815160200152519392505050565b610ab96000600761142c565b6000610e6961397d565b60208101515160069052610e7b613997565b610e858282611524565b60c0015192915050565b6000610e9961397d565b60208101515160029052610eab613997565b610eb58282611524565b6040015192915050565b610ec7613997565b610edf610ed936849003840184614929565b82613268565b5050565b6000610eed61397d565b60208101805151600390525151608001516001600160a01b0384169052610f12613997565b610f1c8282611524565b606001519392505050565b60408051606081018252600080825260208201819052918101919091526106c982612ede565b6000610f5761397d565b6020810180515160079052515161010001516001600160a01b0384169052610f7d613997565b610f878282611524565b60e001519392505050565b600060606000546002808054610fa7906144e3565b80601f0160208091040260200160405190810160405280929190818152602001828054610fd3906144e3565b80156110205780601f10610ff557610100808354040283529160200191611020565b820191906000526020600020905b81548152906001019060200180831161100357829003601f168201915b50505050509050915091509091565b60006003600054141561114a5760006002805461104b906144e3565b80601f0160208091040260200160405190810160405280929190818152602001828054611077906144e3565b80156110c45780601f10611099576101008083540402835291602001916110c4565b820191906000526020600020905b8154815290600101906020018083116110a757829003601f168201915b50505050508060200190518101906110dc9190614821565b60408051602081019091526000815290915060006110f985613085565b51600181111561110b5761110b614164565b141561111a5760008152611142565b600161112585613085565b51600181111561113757611137614164565b141561114257600181525b519392505050565b610ab96000600f61142c565b60408051606081018252600080825260208201819052918101919091526106c982612f6b565b60408051606081018252600080825260208201819052918101919091526106c9826131db565b6111aa6139db565b60036000541415611265576000600280546111c4906144e3565b80601f01602080910402602001604051908101604052809291908181526020018280546111f0906144e3565b801561123d5780601f106112125761010080835404028352916020019161123d565b820191906000526020600020905b81548152906001019060200180831161122057829003601f168201915b50505050508060200190518101906112559190614821565b90506112636000601061142c565b505b6106a06000601061142c565b61129560405180606001604052806000815260200160008152602001600081525090565b6003600054141561138e576000600280546112af906144e3565b80601f01602080910402602001604051908101604052809291908181526020018280546112db906144e3565b80156113285780601f106112fd57610100808354040283529160200191611328565b820191906000526020600020905b81548152906001019060200180831161130b57829003601f168201915b50505050508060200190518101906113409190614821565b905061136960408051608081018252600060208201818152928201819052606082015290815290565b608082015181515260a082015181516020015260c09091015181516040015251919050565b6106a06000600961142c565b6113a2613997565b610edf6113b436849003840184614a4d565b82611524565b6113c26139fa565b6106c982613407565b60408051606081018252600080825260208201819052918101919091526106c982612ff8565b60006113fb61397d565b6020810180515160049052515160a00151839052611417613997565b6114218282611524565b608001519392505050565b81610edf5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff16600181111561149e5761149e614164565b1415611515576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff1660018111156114df576114df614164565b60018111156114f0576114f0614164565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b611534600360005414603061142c565b815161154f90158061154857508251600154145b603161142c565b600080805560028054611561906144e3565b80601f016020809104026020016040519081016040528092919081815260200182805461158d906144e3565b80156115da5780601f106115af576101008083540402835291602001916115da565b820191906000526020600020905b8154815290600101906020018083116115bd57829003601f168201915b50505050508060200190518101906115f29190614821565b90506115fc613a19565b61160b6000194310603261142c565b7f6c0c03bee9b44c4f663edb600044e12a0644f7dd1ecffc11cdeff463126f0f09338560405161163c929190614b62565b60405180910390a1600060208501515151600781111561165e5761165e614164565b1415611f5857602080850151510151815261167b3415601261142c565b61016082015160208083018051929092526101408401805182015183518301525160409081015192519215159201919091528201516116c8906116c190339060006134e3565b601361142c565b8151815151611709916001600160a01b039182169116146116ff576101a08301518251516001600160a01b03908116911614611702565b60015b601461142c565b80516040015161171c901515601561142c565b80516020908101516001600160a01b039081166000908152600a835260408082208054600160ff199182168117909255865186015185168452828420805462ff0000191690558651860151909416835260048552918190208054909316821790925583519182015191909201519091906117959061314e565b5160018111156117a7576117a7614164565b146117b35760006117c7565b8151602001516117c29061314e565b604001515b6117d19190614c74565b81516020908101516001600160a01b0390811660009081526004835260408082206001908101959095558551840151909216815260078352819020805460ff19168417905583519081015191015190919061182b90611452565b51600181111561183d5761183d614164565b1461184957600061185d565b81516020015161185890611452565b604001515b6118679190614c74565b81516020908101516001600160a01b03166000908152600782526040808220600190810194909455808501805183905280518401839052805190910182905280516060018290528051608001829052805160a001829052805160c001829052805160e00182905280516101000182905280516101200182905280516101400182905280516101600182905280516101800182905280516101a00182905280516101c00182905280516101e00182905280516102000182905280516102200182905280516102400182905280516102600182905280516102800182905280516102a00182905280516102c00182905280516102e00182905280516103000182905280516103200182905280516103400182905280516103600182905280516103800182905280516103a00182905280516103c00182905280516103e00182905280516104000182905280516104200182905280516104400182905280516104600182905280516104800182905280516104a00182905280516104c00182905280516104e00182905280516105000182905280516105200182905280516105400182905280516105600182905280516105800182905280516105a00182905280516105c00182905280516105e00182905280516106000182905280516106200182905280516106400182905280516106600182905280516106800182905280516106a00182905280516106c00182905280516106e00182905280516107000182905280516107200182905280516107400182905280516107600182905280516107800182905280516107a00182905280516107c00182905280516107e00182905280516108000182905280516108200182905280516108400182905280516108600182905280516108800182905280516108a00182905280516108c00182905280516108e00182905280516109000182905280516109200182905280516109400182905280516109600182905280516109800182905280516109a00182905280516109c00182905280516109e0018290528051610a00018290528051610a20018290528051610a40018290528051610a60018290528051610a80018290528051610aa0018290528051610ac0018290528051610ae0018290528051610b00018290528051610b20018290528051610b40018290528051610b60018290528051610b80018290528051610ba0018290528051610bc0018290528051610be0018290528051610c00018290528051610c20018290528051610c400182905251610c60015282510151611c1490613407565b516001811115611c2657611c26614164565b14611c35578060400151611c49565b805160200151611c4490613407565b604001515b60608201526080810180516000908190528151602001819052905160c08301525b6064811015611d3d5781606001518160648110611c8957611c89614c8c565b602002015160e0830152600060c0830151516001811115611cac57611cac614164565b1415611cbf576001610100830152611ce7565b600160c0830151516001811115611cd857611cd8614164565b1415611ce75760006101008301525b610120820180516001905251604001819052610100820151611d0a576000611d11565b60e0820151155b611d1f578160c00151611d26565b8161012001515b60c083015280611d3581614ca2565b915050611c6a565b5060c081015160a0820190815281516020908101516001600160a01b03166000908152600b90915260409020805460ff191660019081179091556060830151915151611db692919081811115611d9557611d95614164565b14611da1576000611dab565b8260a00151604001515b8351604001516134f9565b81516020908101516001600160a01b03166000908152600b90915260409020611de6916001909101906064613d1e565b50604051600181527f4de790cb7362e465e77e51c47f7ac0fe317e119fc83ace90c75a37502667ca1e9060200160405180910390a1600183526101a0820151610140820180516001600160a01b03909216909152604080840180516020908101518451909101526101208501518351830152805160609081015184519091015251608090810151835182015260c080860151845160a0908101919091526101008088015186519093019290925260e0808801518651901515910152860151935101929092528251015190830151611ebd9190614c74565b61014080830180516101200192909252604084018051820151835190920191909152516101609081015191510152611ef3613d5c565b825181516001600160a01b0391821690526020808501518351921691810191909152610140830151818301805191909152514390820152606084015190830151611f40919060009061356d565b602082015160400152611f52816135d5565b50612ed8565b6001602085015151516007811115611f7257611f72614164565b14156121fb5760208401515160400151610160820152611f943415601661142c565b610160820151610180820180519190915261014083018051602090810151835182015290516040908101519251921515920191909152820151611fe590611fde90339060006134e3565b601761142c565b8151612023906001600160a01b0316331461201957826101a001516001600160a01b0316336001600160a01b03161461201c565b60015b601861142c565b6101608181018051516001600160a01b039081166000908152600a6020526040808220805460ff191660011790559251519091168152819020805462ff00001916905583015101516018111561208e576001826040015161016001516120899190614c74565b612091565b60005b6101a08083019182528301516101c0830180516001600160a01b03909216909152604080850180516020908101518451909101526101208087015184519093019290925280516060908101518451909101528051608090810151845182015260c080880151855160a090810191909152610100808a015187519093019290925260e0808a0151875190151591015288015185519091015286015192519091019190915251610140015190516101608301515161214e9291906136e9565b6101c08201805161014001919091526101a082015190516101600152604051600181527fc093f060b20e8d62a79e298aa33b9fad3136a2aab5e3f94e4101ccfe1385293c9060200160405180910390a1600160208401526121ad613d5c565b825181516001600160a01b03918216905260208085015183519216918101919091526101c083015181830180519190915251439101526060830151610180830151611f40919060009061356d565b600260208501515151600781111561221557612215614164565b14156125b5576122273415601961142c565b6101608201516101e08201805191909152610140830180516020908101518351909101525160409081015182519015159101526060830151905161226e919060009061356d565b81610200018190525061229161228a33846020015160006134e3565b601a61142c565b600061229c33613085565b5160018111156122ae576122ae614164565b14156122c15760006102208201526122ed565b60016122cc33613085565b5160018111156122de576122de614164565b14156122ed5760016102208201525b6122fd816102200151601b61142c565b6102008101515151612312901515601c61142c565b6123246000836080015111601d61142c565b600161232f33611452565b51600181111561234157612341614164565b1461234d57600061235b565b61235633611452565b604001515b61024082018190526080830151612375911115601e61142c565b612388600082610240015111601f61142c565b81608001518260400151602001518261024001516123a69190614cbd565b6123b09190614cdc565b6102608201819052610280820181905261020082015151516123d5911115602061142c565b61028081015161020082015151516123ed9190614cfe565b6102a0820180519190915261020082018051516020908101518351820152905151604090810151925192151592019190915282015161028082015161243491903390613779565b336000818152600860205260409020805460ff191660019081179091556102608301519161246190612f6b565b51600181111561247357612473614164565b1461247f57600061248d565b61248833612f6b565b604001515b6124979190614c74565b33600081815260086020908152604080832060019081019590955560099091529020805460ff19168317905581906124ce90612ff8565b5160018111156124e0576124e0614164565b146124ec5760006124fa565b6124f533612ff8565b604001515b6125049190614c74565b336000908152600960209081526040918290206001019290925561026083015190519081527f8bc6216dff5164457611ed85d7c9029407f42df73fdfe5d71aa5172baaf6906c910160405180910390a16102608101516040840152612567613d5c565b825181516001600160a01b0391821690526020808501518351921691810191909152604084015181830180519190915251439101526102008201516102a0830151611f40919060009061356d565b60036020850151515160078111156125cf576125cf614164565b14156127cc57602084015151608001516102c08201526125f13415602161142c565b6101608201516102e08201805191909152610140830180516020908101518351820152905160409081015192519215159201919091528201516126429061263b90339060006134e3565b602261142c565b8151612680906001600160a01b0316331461267657826101a001516001600160a01b0316336001600160a01b031614612679565b60015b602361142c565b604051600181527f87789419f6e07c1c668c830e4a69b674fe988d739e2f690f7a1453682c88ff139060200160405180910390a160016060808501919091526102c082015151610300830180516001600160a01b03909216909152604080850180516020908101518451909101526101208087015184519093019290925280518401518351909401939093528251608090810151835182015260c080870151845160a0908101919091526101008089015186519093019290925260e08089015186519015159101528701518451909101528501518251909101528151610140908101518251909101529051610160908101519151015261277e613d5c565b825181516001600160a01b0391821690526020808501518351921691810191909152610300830151818301805191909152514391015260608301516102e0830151611f40919060009061356d565b60046020850151515160078111156127e6576127e6614164565b1415612a395760208401515160a001516103208201819052516103408201526128113415602461142c565b8061034001518261016001516128279190614c74565b61036082018051919091526101408301805160209081015183518201529051604090810151925192151592019190915282015161034082015161287791612870913391906134e3565b602561142c565b81516128b5906001600160a01b031633146128ab57826101a001516001600160a01b0316336001600160a01b0316146128ae565b60015b602661142c565b6128c8600082610340015111602761142c565b6101a0820151610380820180516001600160a01b0390921690915261032082015151815160200152610120830151815160409081019190915283018051606090810151835190910152516080908101519151015260c082015161292d90600190614c74565b6103808201805160a090810192909252610100840151815160c0015260e0808501519151911515910152610320820151519083015161296c9190614c74565b610380820180516101000191909152608083015181516101200152604080840180516101409081015184519091015251610160908101519251019190915251600181527f863a55db7db5f58834868db67cdbebf2074542e76a7984763c6c36ba9aadc3469060200160405180910390a1600160808401526129eb613d5c565b825181516001600160a01b039182169052602080850151835192169181019190915261038083015181830180519190915251439101526060830151610360830151611f40919060009061356d565b6005602085015151516007811115612a5357612a53614164565b1415612c465760208401515160c001516103a0820152612a753415602861142c565b6101608201516103c0820180519190915261014083018051602090810151835182015290516040908101519251921515920191909152820151612ac690612abf90339060006134e3565b602961142c565b8151612b04906001600160a01b03163314612afa57826101a001516001600160a01b0316336001600160a01b031614612afd565b60015b602a61142c565b6101a08201516103e0820180516001600160a01b0390921690915260408084018051602090810151845182015261012080870151855185015282516060908101518651909101528251608090810151865182015260c080890151875160a0908101919091526103a08901515188519092019190915260e0808a01518851901515910152880151865161010001528701518551909101528151610140908101518551909101529051610160908101519351019290925251600181527fef5cd7145d73165dee47f6d62f8ece722d5b2e3c1c2941fc29000cbb5c7ca565910160405180910390a1600160a0840152612bf8613d5c565b825181516001600160a01b03918216905260208085015183519216918101919091526103e0830151818301805191909152514391015260608301516103c0830151611f40919060009061356d565b6006602085015151516007811115612c6057612c60614164565b1415612d5357612c723415602b61142c565b610160820151610400820180519190915261014083018051602090810151835182015290516040908101519251921515920191909152820151612cc390612cbc90339060006134e3565b602c61142c565b604051600181527fc7eed92b617d9f2eaa907a0d1c272cce9933c8800d77081649767efe03fc08a49060200160405180910390a1600160c0840152612d06613d5c565b825181516001600160a01b0391821690526020808501518351921691810191909152604084015181830180519190915251439101526060830151610400830151611f40919060009061356d565b6007602085015151516007811115612d6d57612d6d614164565b1415612ed8576020840151516101000151610420820152612d903415602d61142c565b610160820151610440820180519190915261014083018051602090810151835182015290516040908101519251921515920191909152820151612de190612dda90339060006134e3565b602e61142c565b8151612e1f906001600160a01b03163314612e1557826101a001516001600160a01b0316336001600160a01b031614612e18565b60015b602f61142c565b610420810151516001600160a01b03166000908152600a6020908152604091829020805462ffffff191690559051600181527f0b0b26b4b724984b6094c27da9cfa3f962f80d46025d78b539ade633f0e5ea43910160405180910390a1600160e0840152612e8b613d5c565b825181516001600160a01b0391821690526020808501518351921691810191909152604084015181830180519190915251439101526060830151610440830151611f40919060009061356d565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115612f2a57612f2a614164565b1415611515576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156114df576114df614164565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff166001811115612fb757612fb7614164565b1415611515576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff1660018111156114df576114df614164565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526009602052604090205460ff16600181111561304457613044614164565b1415611515576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff1660018111156114df576114df614164565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600a602052604090205460ff1660018111156130d1576130d1614164565b1415611515576001600160a01b0382166000908152600a6020526040908190208151606081019092528054829060ff16600181111561311257613112614164565b600181111561312357613123614164565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561319a5761319a614164565b1415611515576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156114df576114df614164565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561322757613227614164565b1415611515576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156114df576114df614164565b613278600360005414603561142c565b815161329390158061328c57508251600154145b603661142c565b6000808055600280546132a5906144e3565b80601f01602080910402602001604051908101604052809291908181526020018280546132d1906144e3565b801561331e5780601f106132f35761010080835404028352916020019161331e565b820191906000526020600020905b81548152906001019060200180831161330157829003601f168201915b50505050508060200190518101906133369190614821565b9050613348600019431015603761142c565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a161339b3415603361142c565b80516133b3906001600160a01b03163314603461142c565b6133bb613d5c565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151828401805191909152805143930192909252606084015191510152612ed8816135d5565b61340f6139fa565b60016001600160a01b0383166000908152600b602052604090205460ff16600181111561343e5761343e614164565b1415611515576001600160a01b0382166000908152600b6020526040908190208151606081019092528054829060ff16600181111561347f5761347f614164565b600181111561349057613490614164565b81528154610100900460ff161515602082015260408051610c808101808352919092019190600184019060649082845b8154815260200190600101908083116134c0575050505050815250509050919050565b60006134f183853085613792565b949350505050565b613501613d85565b60005b606481101561354d5784816064811061351f5761351f614c8c565b602002015182826064811061353657613536614c8c565b60200201528061354581614ca2565b915050613504565b508181846064811061356157613561614c8c565b60200201529392505050565b613575613da4565b60005b60018110156135c15784816001811061359357613593614c8c565b60200201518282600181106135aa576135aa614c8c565b6020020152806135b981614ca2565b915050613578565b508181846001811061356157613561614c8c565b60408051602080820183526000825283015190910151515181526135f7613def565b8251516001600160a01b0390811682528351602090810151821681840152808501805151604080860191909152815181015160608601528151516101209081015160808701528251516101009081015160a080890191909152845151015160c08089019190915284515160e09081015115159089015284515101519087015282515182015190860152815181015151610140860152815181015151516101608601528551610180860152905151519092166101a084015260036000554360015590516136c591839101614e59565b60405160208183030381529060405260029080519060200190612ed8929190613ec0565b6136f16139db565b60005b601981101561374b5784816019811061370f5761370f614c8c565b602002015182826019811061372657613726614c8c565b6001600160a01b0390921660209290920201528061374381614ca2565b9150506136f4565b508181846019811061375f5761375f614c8c565b6001600160a01b0390921660209290920201529392505050565b61378483838361386c565b61378d57600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916137f991614f6c565b60006040518083038185875af1925050503d8060008114613836576040519150601f19603f3d011682016040523d82523d6000602084013e61383b565b606091505b509150915061384c8282600161393d565b50808060200190518101906138619190614f88565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916138cb91614f6c565b60006040518083038185875af1925050503d8060008114613908576040519150601f19603f3d011682016040523d82523d6000602084013e61390d565b606091505b509150915061391e8282600261393d565b50808060200190518101906139339190614f88565b9695505050505050565b6060831561394c5750816108f2565b82511561395c5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611449565b905290565b604051806040016040528060008152602001613978613f33565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b6040518061032001604052806019906020820280368337509192915050565b6040805160608101825260008082526020820152908101613978613d85565b604080516104c0810182526000610460820181815261048083018290526104a083018290528252825160608101845281815260208082018390528185019290925290820152908101613a69613d85565b8152602001613a76613d85565b815260408051606080820183526000808352602080840182905283850182905280860193909352835180830185528181528084018290528085018290528486015283518083018552818152808401829052808501829052828601526080850181905260a08501819052835191820184528082529181018290529182015260c082015260e001613b03613f46565b8152602001613b1d60408051602081019091526000815290565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001613b51613f46565b81526040805160608101825260008082526020828101829052928201529101908152602001613b7e613da4565b8152602001600015158152602001600081526020016000815260200160008152602001613bc7604051806060016040528060008152602001600081526020016000151581525090565b8152602001613be160408051602081019091526000815290565b81526040805160608101825260008082526020828101829052928201529101908152602001613c0e613f46565b8152602001613c296040518060200160405280600081525090565b815260200160008152602001613c5b604051806060016040528060008152602001600081526020016000151581525090565b8152602001613c68613f46565b8152602001613c9460408051608081018252600060208201818152928201819052606082015290815290565b81526040805160608101825260008082526020828101829052928201529101908152602001613cc1613f46565b81526040805160608101825260008082526020828101829052928201529101908152602001613cfb60408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291015290565b8260648101928215613d4c579160200282015b82811115613d4c578251825591602001919060010190613d31565b50613d58929150613fe7565b5090565b604080516080810182526000918101828152606082019290925290815260208101613978613ffc565b60405180610c8001604052806064906020820280368337509192915050565b60405180602001604052806001905b613dd9604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081613db35790505090565b604080516101c08101825260008082526020820152908101613e0f613f46565b8152602001613e1c613da4565b8152602001600081526020016000815260200160008152602001600015158152602001613e62604080516060810182526000808252602082018190529181019190915290565b8152602001613e7c60408051602081019091526000815290565b81526040805160608101825260008082526020828101829052928201529101908152602001600081526020016000815260200160006001600160a01b031681525090565b828054613ecc906144e3565b90600052602060002090601f016020900481019282613eee5760008555613d4c565b82601f10613f0757805160ff1916838001178555613d4c565b82800160010185558215613d4c5791820182811115613d4c578251825591602001919060010190613d31565b6040518060200160405280613978614023565b604080516101808101825260008082526020820152908101613f7360408051602081019091526000815290565b8152602001613f806140f5565b81526020016000815260200160008152602001613fb6604080516060810182526000808252602082018190529181019190915290565b81526020016000151581526020016000815260200160008152602001613fda6139db565b8152602001600081525090565b5b80821115613d585760008155600101613fe8565b604051806060016040528061400f613f46565b815260200160008152602001613978613da4565b6040805161012081019091528060008152604080516060810182526000808252602082810182905292820152910190815260200161406c60408051602081019091526000815290565b81526000602082015260400161408d60408051602081019091526000815290565b81526020016140a86040518060200160405280600081525090565b81526020016140d460408051608081018252600060208201818152928201819052606082015290815290565b81526000602082015260400161397860408051602081019091526000815290565b60405180610c8001604052806064905b60408051808201909152600080825260208201528152602001906001900390816141055790505090565b6001600160a01b038116811461414457600080fd5b50565b60006020828403121561415957600080fd5b81356108f28161412f565b634e487b7160e01b600052602160045260246000fd5b6002811061414457614144614164565b8151606082019061419a8161417a565b808352506020830151151560208301526040830151604083015292915050565b6000806000606084860312156141cf57600080fd5b83356141da8161412f565b925060208401356141ea8161412f565b929592945050506040919091013590565b8151606082019061420b8161417a565b8083525060208301511515602083015260408301511515604083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156142665761426661422d565b60405290565b6040516020810167ffffffffffffffff811182821017156142665761426661422d565b6040805190810167ffffffffffffffff811182821017156142665761426661422d565b604051610180810167ffffffffffffffff811182821017156142665761426661422d565b6040516101c0810167ffffffffffffffff811182821017156142665761426661422d565b604051610120810167ffffffffffffffff811182821017156142665761426661422d565b60006060828403121561433057600080fd5b614338614243565b905081358152602082013560208201526040820135604082015292915050565b60006060828403121561436a57600080fd5b6108f2838361431e565b815181526020808301519082015260408083015190820152606081016106c9565b8151815260208083015190820152604081016106c9565b6000604082840312156143be57600080fd5b50919050565b60005b838110156143df5781810151838201526020016143c7565b83811115612ed85750506000910152565b82815260406020820152600082518060408401526144158160608501602087016143c4565b601f01601f1916919091016060019392505050565b8060005b6019811015612ed85781516001600160a01b031684526020938401939091019060010161442e565b61032081016106c9828461442a565b60006101c082840312156143be57600080fd5b8151610cc08201906144898161417a565b825260208381015115158184015260408085015190840160005b60648110156144c0578251825291830191908301906001016144a3565b5050505092915050565b6000602082840312156144dc57600080fd5b5035919050565b600181811c908216806144f757607f821691505b602082108114156143be57634e487b7160e01b600052602260045260246000fd5b8051610ab98161412f565b60006020828403121561453557600080fd5b61453d61426c565b82519091506001600160e01b03198116811461455857600080fd5b815292915050565b600082601f83011261457157600080fd5b60408051610c80810181811067ffffffffffffffff821117156145965761459661422d565b8252806119008501868111156145ab57600080fd5b855b818110156145ea578481890312156145c55760008081fd5b6145cd61428f565b8151815260208083015181830152908452929092019184016145ad565b50919695505050505050565b60006060828403121561460857600080fd5b614610614243565b905081518152602082015160208201526040820151604082015292915050565b801515811461414457600080fd5b8051610ab981614630565b600082601f83011261465a57600080fd5b60405161032080820182811067ffffffffffffffff8211171561467f5761467f61422d565b6040528301818582111561469257600080fd5b845b828110156146b55780516146a78161412f565b825260209182019101614694565b509195945050505050565b6000611da082840312156146d357600080fd5b6146db6142b2565b90506146e682614518565b8152602082015160208201526146ff8360408401614523565b60408201526147118360608401614560565b6060820152611960820151608082015261198082015160a082015261473a836119a084016145f6565b60c082015261474c611a00830161463e565b60e0820152611a20820151610100820152611a4082015161012082015261477783611a608401614649565b610140820152611d8082015161016082015292915050565b6000606082840312156147a157600080fd5b6147a9614243565b9050815181526020820151602082015260408201516147c781614630565b604082015292915050565b600082601f8301126147e357600080fd5b6147eb61426c565b806060808501868111156147fe57600080fd5b855b818110156145ea57614812888261478f565b85526020909401938201614800565b6000612000828403121561483457600080fd5b61483c6142d6565b61484583614518565b815261485360208401614518565b602082015261486584604085016146c0565b604082015261487884611de085016147d2565b6060820152611e408301516080820152611e6083015160a0820152611e8083015160c08201526148ab611ea0840161463e565b60e08201526148be84611ec085016145f6565b6101008201526148d284611f208501614523565b6101208201526148e684611f40850161478f565b610140820152611fa0830151610160820152611fc0830151610180820152614911611fe08401614518565b6101a08201529392505050565b8035610ab981614630565b60006040828403121561493b57600080fd5b6040516040810181811067ffffffffffffffff8211171561495e5761495e61422d565b60405282358152602083013561497381614630565b60208201529392505050565b803560088110610ab957600080fd5b6000606082840312156149a057600080fd5b6149a8614243565b905081356149b58161412f565b815260208201356149c58161412f565b806020830152506040820135604082015292915050565b6000602082840312156149ee57600080fd5b6149f661426c565b905081356145588161412f565b600060208284031215614a1557600080fd5b614a1d61426c565b9135825250919050565b600060608284031215614a3957600080fd5b614a4161426c565b9050614558838361431e565b60008183036101c0811215614a6157600080fd5b614a6961428f565b833581526101a080601f1984011215614a8157600080fd5b614a8961426c565b9250614a936142fa565b614a9f6020870161497f565b8152614aae876040880161498e565b6020820152614ac08760a088016149dc565b6040820152614ad160c0870161491e565b6060820152614ae38760e088016149dc565b6080820152610100614af788828901614a03565b60a0830152614b0a886101208901614a27565b60c0830152614b1c610180880161491e565b60e0830152614b2d888489016149dc565b9082015283525060208101919091529392505050565b610edf8282518051825260208082015190830152604090810151910152565b6001600160a01b038316815281516020808301919091528201515180516101e08301919060088110614b9657614b96614164565b60408401526020810151614bcf606085018280516001600160a01b03908116835260208083015190911690830152604090810151910152565b50604081015180516001600160a01b031660c085015250606081015180151560e0850152506080810151610100614c1181860183516001600160a01b03169052565b60a08301515161012086015260c08301519150614c32610140860183614b43565b60e083015115156101a086015290910151516001600160a01b03166101c0909301929092529392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115614c8757614c87614c5e565b500190565b634e487b7160e01b600052603260045260246000fd5b6000600019821415614cb657614cb6614c5e565b5060010190565b6000816000190483118215151615614cd757614cd7614c5e565b500290565b600082614cf957634e487b7160e01b600052601260045260246000fd5b500490565b600082821015614d1057614d10614c5e565b500390565b8060005b6064811015612ed857614d3784835180518252602090810151910152565b6040939093019260209190910190600101614d19565b80516001600160a01b03168252602081015160208301526040810151614d806040840182516001600160e01b0319169052565b506060810151614d936060840182614d15565b50608081015161196083015260a081015161198083015260c081015180516119a084015260208101516119c0840152604001516119e083015260e08101511515611a00830152610100810151611a20830152610120810151611a40830152610140810151614e05611a6084018261442a565b506101600151611d809190910152565b8060005b6001811015612ed857614e4384835180518252602080820151908301526040908101511515910152565b6060939093019260209190910190600101614e19565b81516001600160a01b0316815261200081016020830151614e8560208401826001600160a01b03169052565b506040830151614e986040840182614d4d565b506060830151614eac611de0840182614e15565b506080830151611e4083015260a0830151611e6083015260c0830151611e8083015260e08301511515611ea08301526101008301518051611ec0840152602080820151611ee0850152604091820151611f00850152610120850151516001600160e01b031916611f208501526101408501518051611f4086015290810151611f6085015201511515611f80830152610160830151611fa0830152610180830151611fc08301526101a0909201516001600160a01b0316611fe09091015290565b60008251614f7e8184602087016143c4565b9190910192915050565b600060208284031215614f9a57600080fd5b81516108f28161463056fea26469706673582212204e82086bfebc032d8035fa98661573318bc8ea8146a4687125665d34fa4b9e3764736f6c634300080c0033`,
  BytecodeLen: 25755,
  Which: `oD`,
  version: 7,
  views: {
    claimSTBT: `claimSTBT`,
    saleLocked: `saleLocked`,
    totSTBTD: `totSTBTD`,
    totSTBTDRec: `totSTBTDRec`,
    vBtBal: `vBtBal`,
    vCcCm: `vCcCm`,
    vHash: `vHash`,
    vcVersion: `vcVersion`,
    wlMember: `wlMember`,
    wlMembers: `wlMembers`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:323:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:111:35:after expr stmt semicolon',
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
  "addWL": addWL,
  "cBT": cBT,
  "cCM": cCM,
  "dBT": dBT,
  "docHash": docHash,
  "optIn": optIn,
  "remWL": remWL
  };
export const _APIs = {
  aST: aST,
  addWL: addWL,
  cBT: cBT,
  cCM: cCM,
  dBT: dBT,
  docHash: docHash,
  optIn: optIn,
  remWL: remWL
  };
