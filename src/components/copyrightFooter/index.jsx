function CopyrightFooter() {
  const year = new Date().getFullYear();
  return (
    <div className="border-t border-t-slate-200 dark:border-t-slate-900 sm:py-7 py-3 font-montserrat text-coral-red">
      <p className="text-center sm:text-md text-sm">
        nike.com &copy;Copyright, {year}. All Rights Reserved.
      </p>
    </div>
  );
}

export default CopyrightFooter;
