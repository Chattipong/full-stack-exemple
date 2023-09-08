const cronjobs = require("node-cron");
const mongoose = require("mongoose");
// const moment = require("moment");
// const { logger } = require("../log/log");
// const Excel = require("exceljs");
// const fs = require("fs");
// const { beforeUploading, affterUploading } = require("../exportUser/export");
// const { sheetCompany } = require("../sheet/sheetCompany");
// const { sheetProposition } = require("../sheet/sheetProposition");
// const { sheetPhase } = require("../sheet/sheetPhase");
// const { sheetAssessment } = require("../sheet/sheetAssessment");
// const { sheetQuestion } = require("../sheet/sheetQuestion");
// const { sheetAnswerResult } = require("../sheet/sheetAnswerResult");

exports.cronjobExportDB = async function () {
  try {
    // cronjobs.schedule("0 0 * * * *", async function () {
    console.log("doing cronjob cronjobExportDB");
    console.log(process.env.NODE_ENV);

    // let location = "./public/exportUser";
    // if (!fs.existsSync(location)) {
    //   fs.mkdirSync(location);
    // }
    // let thisMonthEng = await moment().format("MMM");
    // let monthNumber = await moment().format("M");
    // let thisYear = await moment(Date.now()).add(543, "year").format("Y");
    // let dayEnd = await moment(Date.now()).add(543, "year").format("DDMMY");
    // let startOfMonth = await moment()
    //   .startOf("month")
    //   .add(543, "year")
    //   .format("DDMMY");
    // let filename =
    //   thisMonthEng +
    //   "_" +
    //   thisYear +
    //   "_" +
    //   startOfMonth +
    //   "_" +
    //   dayEnd +
    //   ".xlsx";

    // // เช็คว่ามีไฟล์ export แล้วหรือยัง
    // const beforeUploadings = await beforeUploading(filename, monthNumber);

    // const workbook = await new Excel.Workbook();

    // // เพิ่มหน้าในไฟล์
    // var sheet1 = await workbook.addWorksheet("ข้อมูลบริษัท");
    // var sheet2 = await workbook.addWorksheet("เรื่อง");
    // var sheet3 = await workbook.addWorksheet("ด้าน");
    // var sheet4 = await workbook.addWorksheet("แบบประเมิน");
    // var sheet5 = await workbook.addWorksheet("คำถาม");
    // var sheet6 = await workbook.addWorksheet("การส่งแบบประเมิน");

    // // เพิ่มไฟล์ชีทต่างๆ
    // var sheetCompanies = await sheetCompany(sheet1);
    // var sheetPropositions = await sheetProposition(sheet2);
    // var sheetPhases = await sheetPhase(sheet3);
    // var sheetAssessments = await sheetAssessment(sheet4);
    // var sheetQuestions = await sheetQuestion(sheet5);
    // var sheetAnswerResults = await sheetAnswerResult(sheet6);

    // var at = "./public/exportUser/" + filename;
    // await workbook.xlsx.writeFile(at);

    // // หลังจาก Upload เสร็จแล้วให้เปลี่ยนสถานะเป็น พร้อมดาวน์โหลด
    // const affterUploadings = await affterUploading(monthNumber, filename);
    // console.log(filename);
    // });
  } catch (e) {
    console.log("Err cronjobExportDB: ", e);
    logger.error("cronjobExportDB :", e);
    return false;
  }
};
