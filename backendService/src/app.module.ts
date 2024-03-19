import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
// import { AuthModule } from "./auth/auth.module";
import { DatabaseModule } from "./database/database.module";
// import { RoleModule } from "./role/role.module";
import { PrismaModule } from "./prisma/prisma.module";
// import { APP_INTERCEPTOR } from "@nestjs/core";
// import { ResponseInterceptor } from "./interceptors/response.interceptor";
// import { DepartmentModule } from "./department/department.module";
// import { RoomModule } from "./room/room.module";
// import { HealthInsuranceCardModule } from "./health_insurance_card/health_insurance_card.module";
import { RBACMiddleware } from "./middleware/RBACMiddleware/rbac.middleware";
// import { MedicalRecordModule } from "./medical_record/medical_record.module";
// import { MedicalModule } from "./medical/medical.module";
// import { PrescriptionModule } from "./prescription/prescription.module";
// import { ServiceModule } from "./service/service.module";
// import { BedModule } from "./bed/bed.module";
// import { MedicalExaminationModule } from "./medical_examination/medical_examination.module";
// import { ServiceRelMedicalExaminationModule } from "./service_rel_medical_examination/service_rel_medical_examination.module";
// import { PrescriptionRelMedicalModule } from "./prescription_rel_medical/prescription_rel_medical.module";
import { ConfigModule } from "@nestjs/config";
// import { AuthService } from "./auth/auth.service";
// import { AdminModule } from "./admin/admin.module";
// import { DoctorModule } from "./doctor/doctor.module";
// import { PatientModule } from "./patient/patient.module";
// import { AppointmentsModule } from "./appointments/appointments.module";
// import { PharmacistModule } from "./pharmacist/pharmacist.module";

@Module({
  imports: [
    UsersModule,
    // AuthModule,
    DatabaseModule,
    // RoleModule,
    PrismaModule,
    // DepartmentModule,
    // RoomModule,
    // HealthInsuranceCardModule,
    // MedicalRecordModule,
    // MedicalModule,
    // PrescriptionModule,
    // ServiceModule,
    // BedModule,
    // MedicalExaminationModule,
    // ServiceRelMedicalExaminationModule,
    // PrescriptionRelMedicalModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // AdminModule,
    // DoctorModule,
    // PatientModule,
    // AppointmentsModule,
    // PharmacistModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: ResponseInterceptor,
    // },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RBACMiddleware)
      .forRoutes
      // "user",
      // "room",
      // "medical",
      // "medical-record",
      // "prescription",
      // "service",
      // "bed",
      // "health-insurance-card",
      // "service-rel-medical-examination",
      // "prescription-rel-medical",
      ();
  }
}
