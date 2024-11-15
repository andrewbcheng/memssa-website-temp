function Calendar() {
  return (
      // header here
      // page div
      <>
        <div className="min-h-[90vh] mx-20 mt-48 flex flex-col gap-10 [&>*:last-child]:mb-40">
          <header className="w-ful text-center">
            <h1 className="text-red-50">Our Calendar</h1>
          </header>
          <div className="w-1/2 flex flex-center">
            <iframe src="https://calendar.google.com/calendar/embed?src=no61kqc9vsnm272lvg1rknl1uk%40group.calendar.google.com&ctz=America%2FLos_Angeles" width="800" height="600"scrolling="no"></iframe>
          </div>
        </div>  
      </>
  );
}

export default Calendar