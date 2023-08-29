import {
  ApiDeleteRequest,
  ApiGetRequest,
  ApiPostMultipart,
  ApiPostMultipartImportDapodikExecution,
  ApiPostRequest,
  ApiPutRequest,
} from "@/utils/Api";
import { Message } from "element-ui";

const state = {
  data: {
    itemsAll: [],
    items: [],
    limit: 10,
    page: 1,
    total: 0,
    sortBy: "",
    sortType: "",
    filter: "",
    currentTabPhysicalStates: null,
    currentTabScholarships: null,
    currentStatus: "active",
    currentKelas: "",
    class: [],
    majorSelected: "",
    currentHideAlumni: true,
    errors: false,
    major: [],
    loading: false,
    jsonData: [],
    provinces: [],
    cities: [],
    districts: [],
    formDataPhysicalStates: [],
    formDataScholarships: [],
    goldarah: ["A", "AB", "B", "O"],
    ukuranbaju: ["S", "M", "L", "XL", "XXL", "XXXL"],
    agama: [
      "Islam",
      "Kristen",
      "Protestan",
      "Katholik",
      "Hindu",
      "Budha",
      "Khonghucu",
      "Kepercayaan kpd Tuhan YME",
      "lainnya",
    ],
    listTypeSchool: [
      {
        active: false,
        name: "SD",
        label: "SD",
        class: [1, 2, 3, 4, 5, 6],
      },
      {
        active: false,
        name: "SMP",
        label: "SMP",
        class: [7, 8, 9],
      },
      {
        active: false,
        name: "SMA",
        label: "SMA",
        class: [10, 11, 12],
      },
      {
        active: false,
        name: "SMK",
        label: "SMK",
        class: [10, 11, 12, 13],
      },
    ],
    status: [
      { value: "all", label: "Semua status" },
      { value: "active", label: "Aktif" },
      { value: "inactive", label: "Non Aktif" },
    ],
    columns_kartu_pelajar: [
      {
        prop: "name",
        label: "Nama",
        minWidth: "100",
        sortable: true,
        "class-name": "body-14 col-black-2",
      },
      {
        prop: "nis_nik",
        label: "NISN / NIS",
        minWidth: "180",
        sortable: true,
        "class-name": "body-14 col-black-2",
      },
      {
        prop: "classes",
        label: "Kelas",
        minWidth: "80",
        "class-name": "body-14 col-black-2",
      },
      {
        prop: "major",
        label: "Jurusan",
        minWidth: "150",
        "class-name": "body-14 col-black-2",
      },
      {
        prop: "update_at",
        label: "Update data",
        minWidth: "80",
        "class-name": "body-14 col-black-2",
      },
      {
        fixed: "right",
        label: "Aksi",
        width: "90",
        "class-name": "body-14 col-black-2",
      },
    ],
    columns: [
      {
        prop: "nis_nik",
        label: "NISN/NIS",
        minWidth: "180",
        sortable: true,
        "class-name": "body-14 col-black-2",
      },
      {
        prop: "progress_data",
        label: "%",
        minWidth: "60",
        fixed: "left",
        "class-name": "body-14 col-black-2 text-center",
      },
      {
        prop: "name",
        label: "Nama",
        minWidth: "150",
        sortable: true,
        "class-name": "body-14 col-black-2",
      },
      {
        prop: "major",
        label: "Jurusan",
        minWidth: "150",
        "class-name": "body-14 col-black-2",
      },
      {
        prop: "classes",
        label: "Kelas",
        minWidth: "150",
        "class-name": "body-14 col-black-2",
      },
      {
        prop: "setting_spp",
        label: "Setting SPP",
        width: "200",
        "class-name": "body-14 col-black-2",
      },
      {
        prop: "soft_deleted",
        label: "Status",
        width: 90,
        "class-name": "body-14 col-black-2",
      },
      {
        fixed: "right",
        label: "Aksi",
        width: "150",
        "class-name": "body-14 col-black-2",
      },
    ],
    defaultDataForm: {},
    dataForm: {
      name: null,
      nickname: null,
      nisn: null,
      nis: null,
      class: null,
      grade: null,
      place_of_birth: null,
      date_of_birth: null,
      email: null,
      phone: null,
      sub_district_id: null,
      address: null,
      rt: null,
      rw: null,
      blood_type: null,
      gender: null,
      uniform_size: null,
      sport_shirt_size: null,
      type_of_residence: null,
      transportation: null,
      distance_residence: null,
      commute_time: null,
      skhun: null,
      no_kps: null,
      examinee_number: null,
      certificate_number: null,
      height: null,
      weight: null,
      religion: null,
      postal_code: null,
      previos_school: null,
      students: null,
      school_major_id: null,
      school_class_student_id: null,
      nik: null,
      kk: null,
      has_kip: null,
      no_kip: null,
      name_on_kip: null,
      no_kks: null,
      is_getting_pip: "Tidak",
      reason: null,
      birth_certificate_number: null,
      special_needs: null,
      child_to: null,
      number_of_sibling: null,
      foster_sibiling: null,
      step_sibiling: null,
      id: null,
      student_parent: null,
      father_name: null,
      father_address: null,
      father_phone: null,
      father_job: null,
      father_salary: null,
      mother_name: null,
      mother_address: null,
      mother_phone: null,
      mother_job: null,
      mother_salary: null,
      vice_name: null,
      vice_address: null,
      vice_phone: null,
      vice_job: null,
      vice_salary: null,
      daily_language: null,
      previous_school: null,
      head_circumference: null,
      father_nik: null,
      father_year: null,
      father_education: null,
      father_special_needs: null,
      father_place_of_birth: null,
      father_religion: null,
      mother_nik: null,
      mother_year: null,
      mother_education: null,
      mother_special_needs: null,
      mother_place_of_birth: null,
      mother_religion: null,
      vice_nik: null,
      vice_year: null,
      vice_education: null,
      vice_special_needs: null,
      vice_place_of_birth: null,
      vice_religion: null,
      village: null,
      phone_number: null,
      bank_name: null,
      account_name: null,
      account_number: null,
      major_name: null,
      major_id: null,
      province_id: null,
      city_id: null,
      user_avatar_image: null,
      count_sister_brother: null,
    },
    rules: {
      nisn: [
        {
          required: true,
          message: "NISN wajib diisi",
          trigger: "blur",
        },
        {
          validator(rule, value, callback) {
            if (Number.isInteger(Number(value))) {
              callback();
            } else {
              callback(new Error("NISN harus angka"));
            }
          },
          trigger: "blur",
        },
      ],
      nis: [
        {
          required: true,
          message: "NIS wajib diisi",
          trigger: "blur",
        },
      ],
      name: [
        {
          required: true,
          message: "Nama wajib diisi",
          trigger: "blur",
        },
      ],
      grade: [
        {
          required: true,
          message: "Jenjang wajib diisi",
          trigger: "blur",
        },
      ],
      class: [
        {
          required: true,
          message: "Angkatan wajib diisi",
          trigger: "blur",
        },
      ],
      email: [
        {
          type: "email",
          message: "Alamat email tidak sesuai",
          trigger: "change",
        },
      ],
      phone: [
        {
          validator(rule, value, callback) {
            if (Number.isInteger(Number(value))) {
              callback();
            } else {
              callback(new Error("Telp tidak sesuai"));
            }
          },
          trigger: "blur",
        },
      ],
      phone_number: [
        {
          validator(rule, value, callback) {
            if (Number.isInteger(Number(value))) {
              callback();
            } else {
              callback(new Error("Telp tidak sesuai"));
            }
          },
          trigger: "blur",
        },
      ],
      child_to: [
        {
          validator(rule, value, callback) {
            if (Number.isInteger(Number(value))) {
              callback();
            } else {
              callback(new Error("tidak sesuai, Harus angka"));
            }
          },
          trigger: "blur",
        },
      ],
      number_of_sibling: [
        {
          validator(rule, value, callback) {
            if (Number.isInteger(Number(value))) {
              callback();
            } else {
              callback(new Error("tidak sesuai, Harus angka"));
            }
          },
          trigger: "blur",
        },
      ],
      distance_residence: [
        {
          validator(rule, value, callback) {
            if (Number.isInteger(Number(value))) {
              callback();
            } else {
              callback(new Error("tidak sesuai, Harus angka"));
            }
          },
          trigger: "blur",
        },
      ],
      weight: [
        {
          validator(rule, value, callback) {
            if (Number.isInteger(Number(value))) {
              callback();
            } else {
              callback(new Error("Berat tidak sesuai"));
            }
          },
          trigger: "blur",
        },
      ],
      height: [
        {
          validator(rule, value, callback) {
            if (Number.isInteger(Number(value))) {
              callback();
            } else {
              callback(new Error("Tinggi tidak sesuai"));
            }
          },
          trigger: "blur",
        },
      ],
      head_circumference: [
        {
          validator(rule, value, callback) {
            if (Number.isInteger(Number(value))) {
              callback();
            } else {
              callback(new Error("tidak sesuai, Harus angka"));
            }
          },
          trigger: "blur",
        },
      ],
      count_sister_brother: [
        {
          validator(rule, value, callback) {
            if (Number.isInteger(Number(value))) {
              callback();
            } else {
              if (value === "" || value === undefined) callback();
              callback(new Error("tidak sesuai, Harus angka"));
            }
          },
          trigger: "blur",
        },
      ],
      step_sibling: [
        {
          validator(rule, value, callback) {
            if (Number.isInteger(Number(value))) {
              callback();
            } else {
              if (value === "" || value === undefined) callback();
              callback(new Error("tidak sesuai, Harus angka"));
            }
          },
          trigger: "blur",
        },
      ],
      foster_sibling: [
        {
          validator(rule, value, callback) {
            if (Number.isInteger(Number(value))) {
              callback();
            } else {
              if (value === "" || value === undefined) {
                callback();
              } else {
                callback(new Error("tidak sesuai, Harus angka"));
              }
            }
          },
          trigger: "blur",
        },
      ],
    },
    dataImport: {
      listImport: [],
      validasi: [],
      error: [],
      meta: {},
      loading: false,
      loadingRender: false,
      limit: 10,
      page: 1,
      status: "",
      filter: "",
      sort_dir: "created_at",
      sort_field: "desc",
      filterRombel: "Semua",
      listLimit: [10, 25, 35, 45, 55],
      listStatus: ["CREATE", "UPDATE", "SKIP", "EMPTY"],
    },
  },
};

const mutations = {
  changePelajar(state, payload) {
    state.data = Object.assign({}, state.data, payload);
  },
  changeDataImport(state, payload) {
    state.data.dataImport = Object.assign({}, state.data.dataImport, payload);
  },
  setPelajarAll(state, payload) {
    state.data.itemsAll = payload;
    localStorage.setItem("user_all", JSON.stringify(payload)); // Simpan objek dalam bentuk JSON
  },
};

const actions = {
  async getHistoryImports({ commit, state }, payload) {
    commit("changeDataImport", {
      loading: true,
    });
    const { data } = state;

    const params = {
      limit: state.data.limit,
      page: state.data.page,
      sort_field: data.sortBy,
      sort_dir: data.sortType,
    };
    if (payload && payload.data_simple) {
      params.data_simple = true;
    }
    if (payload && payload.sort_field) {
      params.sort_field = payload.sort_field;
    }
    if (payload && payload.sort_dir) {
      params.sort_dir = payload.sort_dir;
    }
    if (data.filter) {
      params.q = payload.filter;
    }
    const result = await ApiGetRequest(`school/import-history`, params);

    if (result.error) {
      Message({
        type: "error",
        message: result.error,
      });

      commit("changeDataImport", {
        loading: false,
      });
      return false;
    }
    const send = {
      loading: false,
    };
    send.listImport = result.data.data;
    commit("changeDataImport", send);
    return {
      data: result.data.data,
    };
  },
  async getPelajar({ commit, state }, payload) {
    commit("changePelajar", {
      loading: true,
    });
    const { data } = state;

    let limit = null;
    if (payload) {
      if (typeof payload == "object" && typeof payload.limit !== "undefined") {
        await commit("changePelajar", {
          limit:
            typeof payload.limit !== "undefined" ? payload.limit : data.limit,
        });
        limit =
          typeof payload.limit !== "undefined" ? payload.limit : data.limit;
      } else {
        await commit("changePelajar", {
          page: payload || data.page,
        });
      }
    }

    const params = {
      limit: limit != null ? limit : state.data.limit,
      page: state.data.page,
      show: data.currentStatus,
      sort_field: data.sortBy,
      sort_dir: data.sortType,
      q: data.filter,
    };
    //if (data.currentHideAlumni && !data.majorSelected && !data.currentKelas) {
    //  params.hide_alumnus = 1;
    //}
    if (payload && payload.data_simple) {
      params.data_simple = true;
    }

    if (
      data.majorSelected &&
      data.majorSelected !== "" &&
      data.majorSelected > 0
    ) {
      params.school_major_id = data.majorSelected;
    }

    if (
      data.currentKelas &&
      data.currentKelas !== "" &&
      data.currentKelas > 0
    ) {
      params.school_class_id = data.currentKelas;
    }

    const result = await ApiGetRequest(`school/student`, params);

    if (result.error) {
      Message({
        type: "error",
        message: result.error,
      });

      commit("changePelajar", {
        loading: false,
      });
    } else {
      const send = {
        loading: false,
      };
      if (payload && payload.data_simple) {
        commit("changePelajar", send);
        commit("setPelajarAll", result.data.data);
        return true;
      }
      send.items = result.data.data;
      if (typeof payload == "object") {
        commit("changePelajar", send);
        return {
          data: result.data.data,
        };
      } else {
        send.total = result.data.meta.total;
        commit("changePelajar", send);
        return {
          data: result.data.data,
          total: result.data.meta.total,
        };
      }
    }
  },
  async getPelajarById({ commit, state, dispatch }, payload) {
    commit("changePelajar", {
      loading: true,
    });

    const { data } = state;
    const result = await ApiGetRequest(`school/student/${payload.id}`);

    if (result.error) {
      Message({
        type: "error",
        message: result.error,
      });

      commit("changePelajar", {
        loading: false,
      });
      return false;
    }

    let newDataForm = data.dataForm;
    newDataForm = Object.assign({}, newDataForm, result.data.data.student);
    newDataForm = Object.assign({}, newDataForm, result.data.data);
    newDataForm = Object.assign({}, newDataForm, result.data.data.parent);
    newDataForm["major_id"] = newDataForm?.student?.major?.id || 0;

    dispatch(
      "fileStorage/getDataFileStorage",
      { uuid: payload.id },
      { root: true }
    );

    let dataCities = await dispatch(
      "cities/getCities",
      newDataForm.province_id,
      { root: true }
    );

    let dataDistricts = await dispatch(
      "districts/getDistricts",
      newDataForm.city_id,
      { root: true }
    );

    state.data.defaultDataForm = Object.assign(
      {},
      newDataForm,
      state.data.defaultDataForm
    );
    commit("changePelajar", {
      formDataScholarships:
        (result.data.data.student && result.data.data.student.scholarships) ||
        [],
      formDataPhysicalStates:
        (result.data.data.student &&
          result.data.data.student.physical_states) ||
        [],
      dataForm: newDataForm,
      cities: dataCities,
      districts: dataDistricts,
      id: payload.id,
      loading: false,
    });
    return true;
  },
  async resetAkunPelajar(context, payload) {
    const { formData, id } = payload;
    const result = await ApiPutRequest(`school/user/${id}/password`, formData);
    if (result.error) {
      Message({
        type: "error",
        message: result.error,
      });

      return false;
    } else {
      Message({
        type: "success",
        message: "Data password berhasil di reset",
      });

      return true;
    }
  },
  async deleteAkunPelajar(context, payload) {
    const { id } = payload;
    const result = await ApiDeleteRequest(`school/student/${id}`);
    if (result.error) {
      Message({
        type: "error",
        message: result.error,
      });

      return false;
    } else {
      Message({
        type: "success",
        message: "Akun telah dinonaktifkan",
      });

      return true;
    }
  },
  async restoreAkunPelajar(context, payload) {
    const { id } = payload;
    const result = await ApiPostRequest(`school/student/${id}/restore`, {});
    if (result.error) {
      Message({
        type: "error",
        message: result.error,
      });
    } else {
      Message({
        type: "success",
        message: "Akun telah diaktifkan kembali",
      });
      return true;
    }
  },
  async importExcelPelajar({ commit }, payload) {
    commit("changePelajar", {
      loading: true,
    });

    const result = await ApiPostRequest(`school/student`, payload.formData);
    if (result.error) {
      Message({
        type: "error",
        message: result.error,
      });

      commit("changePelajar", {
        loading: false,
      });

      return false;
    } else {
      commit("changePelajar", {
        loading: false,
      });

      const items = result.data.data;

      // check kalo return respone ada error
      const errorItems = await items.filter((item) => {
        if (item.error) {
          return item;
        }
      });

      if (errorItems.length > 0) {
        commit("changePelajar", {
          jsonData: errorItems,
        });

        let message = "";
        if (errorItems.length !== payload.formData.length) {
          message = "Beberapa data gagal ditambahkan ke server";
        } else {
          message = "Data gagal ditambahkan ke server";
        }

        Message({
          type: "error",
          message: message,
        });

        return false;
      } else {
        Message({
          type: "success",
          message: "Data Pelajar berhasil ditambahkan",
        });

        return true;
      }
    }
  },
  async createPelajar({ commit, state }, payload) {
    commit("changePelajar", {
      error: false,
    });

    const { data } = state;
    let filteredData = Object.entries(data.dataForm).reduce(
      (obj, [key, value]) => {
        if (value !== "" && value !== null && value !== undefined) {
          obj[key] = value;
        }
        return obj;
      },
      {}
    );
    if (payload && payload.physicals) {
      let dt = {
        physicals: payload.physicals,
      };
      filteredData = { ...filteredData, ...dt };
    }
    if (payload && payload.scholarships) {
      let dtScholarships = {
        scholarships: payload.scholarships,
      };
      filteredData = { ...filteredData, ...dtScholarships };
    }
    const result = await ApiPostRequest(
      `school/student/store-manual`,
      filteredData
    );
    if (result.error) {
      Message({
        type: "error",
        message: "Gagal menambahkan data, periksa kembali data anda",
      });

      commit("changePelajar", {
        loading: false,
        error: result.errorList ? result.errorList : false,
      });

      return false;
    }
    commit("changePelajar", {
      loading: false,
      error: false,
    });

    Message({
      type: "success",
      message: "Data Pelajar berhasil ditambahkan",
    });

    return result.data.data;
  },
  async updatePelajar({ commit, state }, payload) {
    commit("changePelajar", {
      loading: true,
      error: false,
    });

    const { data } = state;
    if (data.dataForm && data.dataForm.nis_nik) {
      data.dataForm.nis_nik = data.dataForm.nis_nik.replace("cendol-", "");
    }

    if (data.dataForm && data.dataForm.nisn) {
      data.dataForm.nisn = data.dataForm.nisn.replace("cendol-", "");
    }

    if (data.dataForm && data.dataForm.nis) {
      data.dataForm.nis = data.dataForm.nis.replace("cendol-", "");
    }

    if (data.dataForm && data.dataForm.student && data.dataForm.student.nis) {
      data.dataForm.student.nis = data.dataForm.student.nis.replace(
        "cendol-",
        ""
      );
    }

    if (data.dataForm && data.dataForm.student && data.dataForm.student.nisn) {
      data.dataForm.student.nisn = data.dataForm.student.nisn.replace(
        "cendol-",
        ""
      );
    }

    if (
      data.dataForm &&
      data.dataForm.student &&
      data.dataForm.student.user &&
      data.dataForm.student.user.nis_nik
    ) {
      data.dataForm.student.user.nis_nik =
        data.dataForm.student.user.nis_nik.replace("cendol-", "");
    }
    let filteredData = Object.keys(state.data.dataForm).reduce(
      (result, key) => {
        if (
          state.data.dataForm[key] !== state.data.defaultDataForm[key] ||
          key === "id" ||
          key === "name"
        ) {
          if (key !== "parent" && key !== "student" && key !== "user") {
            result[key] = state.data.dataForm[key];
          }
        }
        return result;
      },
      {}
    );
    if (payload && payload.physicals) {
      let dt = {
        physicals: payload.physicals,
      };
      filteredData = { ...filteredData, ...dt };
    }
    if (payload && payload.scholarships) {
      let dtScholarships = {
        scholarships: payload.scholarships,
      };
      filteredData = { ...filteredData, ...dtScholarships };
    }
    const result = await ApiPutRequest(
      `school/student/${data.id}`,
      filteredData
    );
    if (result.error) {
      Message({
        type: "error",
        message: "Gagal mengubah data, periksa kembali data anda",
      });

      commit("changePelajar", {
        loading: false,
        error: result.errorList ? result.errorList : false,
      });

      return false;
    }
    if (!result) {
      Message({
        type: "error",
        message: "Response Kosong. Proses gagal dikirim.",
      });

      commit("changePelajar", {
        loading: false,
        error: result.errorList ? result.errorList : false,
      });
      return false;
    }
    commit("changePelajar", {
      loading: false,
    });

    Message({
      type: "success",
      message: "Data Pelajar berhasil diubah",
    });

    return true;
  },

  async updateImageUser({ commit }, payload) {
    commit("changePelajar", {
      loading: true,
    });

    const result = await ApiPostMultipart(
      `school/user/${payload.id}/profile-image`,
      payload.dataForm
    );
    if (result.error) {
      if (!payload.form_client) {
        Message({
          type: "error",
          message: "Gagal mengubah gambar profil",
        });
      }

      commit("changePelajar", {
        loading: false,
        error: result.errorList || false,
      });

      return false;
    }
    commit("changePelajar", {
      loading: false,
      error: false,
    });
    return true;
  },
  async uploadFileExcelDapodik({ commit }, payload) {
    commit("changeDataImport", {
      loading: true,
    });
    console.log(payload);

    const result = await ApiPostMultipart(
      `school/student/import-dapodik`,
      payload.dataForm
    );
    //const result = await ApiPostMultipart(
    //  `queue/validasi`,
    //  payload.dataForm
    //);
    //const result = await import("@/db/edit-student.json");
    if (result.error) {
      Message({
        type: "error",
        message: result.error,
      });
      commit("changeDataImport", {
        loading: false,
        validasi: [],
        meta: {},
        error: result.errorList || false,
      });
      return false;
    }
    await commit("changeDataImport", {
      validasi: result.data.data,
      meta: result.data.meta,
      loading: false,
      error: false,
    });
    return true;
  },
  async uploadFileExcelDapodikExecution({ commit }, payload) {
    commit("changeDataImport", {
      loading: true,
    });
    const result = await ApiPostMultipartImportDapodikExecution(
      `school/student/import-execution`,
      payload.dataForm
    );
    /*const result = await ApiPostMultipartImportDapodikExecution(
      `queue/import`,
      payload.dataForm
    );*/
    //const result = await import("@/db/edit-student.json");
    if (result.error) {
      Message({
        type: "error",
        message:
          "Gagal Proses Import. File Terdapat kendala saat pengiriman ke server.",
      });
      commit("changeDataImport", {
        loading: false,
        validasi: [],
        meta: {},
        error: result.errorList || false,
      });
      return false;
    }
    await commit("changeDataImport", {
      validasi: [],
      meta: {},
      loading: false,
      error: false,
    });
    return true;
  },
};

const getters = {
  // Hitung jumlah halaman berdasarkan jumlah item dan item per halaman
  totalData: (state) => {
    return Math.ceil(
      state.data.dataImport.validasi.length / state.data.dataImport.page
    );
  },
  // Potong data berdasarkan halaman saat ini dan item per halaman
  displayedItems: (state) => {
    const imp = state.data.dataImport;
    if (!imp.validasi.length) {
      return {
        list: [],
        totalData: 0,
      };
    }
    let filteredData = imp.validasi;
    if (imp.filter) {
      filteredData = filteredData.filter((item) =>
        item.user.name.toLowerCase().includes(imp.filter.toLowerCase())
      );
    }
    if (imp.filterRombel && imp.filterRombel !== "Semua") {
      filteredData = filteredData.filter((item) =>
        item.user.student.rombel
          .toLowerCase()
          .includes(imp.filterRombel.toLowerCase())
      );
    }
    if (imp.status) {
      filteredData = filteredData.filter(
        (item) => item.user.status === imp.status
      );
    }
    if (!filteredData.length) {
      return {
        list: [],
        totalData: 0,
      };
    }

    const start = (imp.page - 1) * imp.limit;
    const end = start + imp.limit;
    return {
      list: filteredData.slice(start, end),
      totalData: filteredData.length,
    };
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
