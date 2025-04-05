function CopyrightFooter() {
  const year = new Date().getFullYear();
  return (
    <div className="border-t border-t-slate-200 dark:border-t-slate-900 py-7 font-montserrat text-coral-red">
      <p className="text-center text-md">
        nike.com &copy;Copyright, {year}. All Rights Reserved.
      </p>
    </div>
  );
}

export default CopyrightFooter;
