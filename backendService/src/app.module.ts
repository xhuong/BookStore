import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { BookModule } from "./book/book.module";
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
import { RoleModule } from "./role/role.module";
import { AuthorModule } from './author/author.module';
import { PublisherModule } from './publisher/publisher.module';
import { ReviewModule } from './review/review.module';
import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { PaymentModule } from './payment/payment.module';
import { DiscountModule } from './discount/discount.module';
import { UserRelDiscountModule } from './user_rel_discount/user_rel_discount.module';
import { OrderRelPaymentModule } from './order_rel_payment/order_rel_payment.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    DatabaseModule,
    BookModule,
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
    RoleModule,
    BookModule,
    AuthorModule,
    PublisherModule,
    ReviewModule,
    OrderModule,
    OrderDetailModule,
    PaymentModule,
    DiscountModule,
    UserRelDiscountModule,
    OrderRelPaymentModule,
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
      // "user"
      ();
  }
}
