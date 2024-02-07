import LoginArt from '/public/login.svg'
import './globals.css'

export default function LoginPage() {
  return (
    <section className='bg-slate-50 w-full h-full'>
      <div className="grid grid-cols-2 gap-5 m-5">
      <div className='col-span2'><LoginArt /></div>
      <div className='flex items-center flex-col justify-center'>
        <div className='flex flex-col items-end gap-3'>
          <h3 className="text-5xl mb-8">ورود | ثبت نام</h3>
          <p className="text-2xl mb-8">نام‌کاربری و رمز عبور خود را وارد کنید</p>

          <input className='bg-slate-200 w-96 h-6 rounded-2xl' type="text"/>
          <input className='bg-slate-200 w-96 h-6 rounded-2xl' type="text"/>
          <div className='flex flex-row gap-2'>
            <button>ورود</button>
            <a href="" className='text-blue-600'>رمز عبورتون رو فراموش کردید؟</a>
          </div>
        </div>
      </div>
    </div>
    </section>
   );
}
