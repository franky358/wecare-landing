import Hero from "@/components/salauno/Hero";
import Services from "@/components/salauno/Services";
import Specialties from "@/components/salauno/Specialties";
import PreDiagnosis from "@/components/salauno/Prediagnosis";
import WeWantToAttendYou from "@/components/salauno/WeWantToAttendYou";
import ScheduleAppointment from "@/components/salauno/ScheduleAppointment";

const SalaunoPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Specialties />
      <PreDiagnosis />
      <WeWantToAttendYou />
      <ScheduleAppointment />
    </>
  );
};

export default SalaunoPage;
