// import { ApiGetRequest } from "@/utils/Api";
import { Message } from "element-ui";

const state = {
  data: {
    nik: "",
    pwd: "cerdig2023",
    searchSchool: "",
    selectSchool: false,
    school: [],
    userlogin: {},
  },
};

const mutations = {
  changeLogin(state, objUpdate) {
    state.data = Object.assign({}, state.data, objUpdate);
  },
};

const actions = {
  async searchSchool({commit}) {
    // const result = await ApiGetRequest(`onklas/listSchool`);
    // console.log(result);
    // if (result.error) {
    // 	Message({
    // 		type: 'error', message: result.error,
    // 	});
    // } else {
    try {
      const dataObjj = await import("@/db/school.json");
      const dataObj = dataObjj.data.map((item) => {
        item["value"] = item.name;
        return item;
      });
      commit("changeLogin", {
        school: dataObj || [],
      });
    } catch (error) {
      Message({
        type: "error",
        message: error,
      });
    }
    // }
  },
  async submitLogin() {
    // const { data } = state;
    // const result = await ApiPostRequest(`school/check`, {
    //   school_id: data.selectSchool.id,
    //   nis_nik: data.nik,
    // });
    // if (result.error) {
    //   Message({
    //     type: "error",
    //     message: "Data anda tidak ditemukan",
    //   });
    // } else {
    //   const dataResult = result.data.data;
    //   const loginResult = await ApiPostRequest(`school/login`, {
    //     uuid: dataResult.id,
    //     password: data.pwd,
    //   });
    //
    //   if (loginResult.error) {
    //     Message({
    //       type: "error",
    //       message: "Periksa kembali nik dan password anda",
    //     });
    //   } else {
    //     await commit("changeLogin", {
    //       userlogin: loginResult,
    //     });
    //
        return true;
    //   }
    // }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
