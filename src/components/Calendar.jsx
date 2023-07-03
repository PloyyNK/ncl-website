import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    parse,
    parseISO,
    startOfToday,
} from 'date-fns'
import { useState } from 'react'
import '../styles/Calendar.css'

const meetings = [
    {
        id: 1,
        name: 'Extraordinary General Meeting of Shareholder (EGM) 1/2015',
        imageUrl:
            'https://i.imgur.com/xGqhaAY.png',
        startDatetime: '2015-12-15T13:00',
        endDatetime: '2015-12-15T14:30',
    },
    {
        id: 2,
        name: 'MAI Forum 2015',
        imageUrl:
            'https://i.imgur.com/xGqhaAY.png',
        startDatetime: '2015-07-01T09:00',
        endDatetime: '2015-07-01T11:30',
    },
    {
        id: 3,
        name: 'Annual General Meeting of Shareholder (AGM) 2015',
        imageUrl: 'https://i.imgur.com/xGqhaAY.png',
        startDatetime: '2015-04-28T17:00',
        endDatetime: '2015-04-28T18:30',
    },
    {
        id: 4,
        name: 'Annual General Meeting of Shareholder (AGM) 2016',
        imageUrl: 'https://i.imgur.com/xGqhaAY.png',
        startDatetime: '2016-04-28T13:00',
        endDatetime: '2016-04-28T14:30',
    },
    {
        id: 5,
        name: 'Annual General Meeting of Shareholder (AGM) 2020',
        imageUrl: 'https://i.imgur.com/xGqhaAY.png',
        startDatetime: '2020-05-08T14:00',
        endDatetime: '2020-05-08T14:30',
    },
    {
        id: 6,
        name: 'Oppday Q3/2021',
        imageUrl: 'https://i.imgur.com/xGqhaAY.png',
        startDatetime: '2021-11-30T14:00',
        endDatetime: '2021-11-30T15:00'
    },
    {
        id: 7,
        name: 'Oppday Year End/2021 NCL',
        imageUrl: 'https://i.imgur.com/xGqhaAY.png',
        startDatetime: '2022-03-14T14:00',
        endDatetime: '2022-03-14T15:00'
    },
    {
        id: 8,
        name: 'Oppday 1/2022 NCL',
        imageUrl: 'https://i.imgur.com/xGqhaAY.png',
        startDatetime: '2022-06-07T14:00',
        endDatetime: '2022-06-07T15:00'
    },
    {
        id: 9,
        name: 'Oppday 2/2022 บริษัท เอ็นซีแอล อินเตอร์เนชั่นแนล โลจิสติกส์ จำกัด (มหาชน) NCL',
        imageUrl: 'https://i.imgur.com/xGqhaAY.png',
        startDatetime: '2022-08-12T14:00',
        endDatetime: '2022-08-12T15:00'
    },
    {
        id: 10,
        name: 'Oppday 3/2022 NCL',
        imageUrl: 'https://i.imgur.com/xGqhaAY.png',
        startDatetime: '2022-11-25T14:00',
        endDatetime: '2022-11-25T15:00'
    },
    {
        id: 11,
        name: 'Oppday Year End/2022 NCL',
        imageUrl: 'https://i.imgur.com/xGqhaAY.png',
        startDatetime: '2023-04-03T14:00',
        endDatetime: '2023-04-03T15:00'
    },
    {
        id: 12,
        name: 'Oppday 1/2023 NCL',
        imageUrl: 'https://i.imgur.com/xGqhaAY.png',
        startDatetime: '2023-06-01T14:00',
        endDatetime: '2022-06-01T15:00'
    }

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Calendar() {
    let today = startOfToday()
    let [selectedDay, setSelectedDay] = useState(today)
    let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

    let days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    })

    function previousMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    let selectedDayMeetings = meetings.filter((meeting) =>
        isSameDay(parseISO(meeting.startDatetime), selectedDay)
    )

    return (
        <div className="pt-16 ">
            <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6 ">
                <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200 bg-gray-100/75 drop-shadow-xl">
                    <div className="md:pr-14  my-1.5 p-8">
                        <div className="flex items-center">
                            <h2 className="flex-auto font-semibold text-gray-900">
                                {format(firstDayCurrentMonth, 'MMMM yyyy')}
                            </h2>
                            <button
                                type="button"
                                onClick={previousMonth}
                                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Previous month</span>
                                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                            </button>
                            <button
                                onClick={nextMonth}
                                type="button"
                                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Next month</span>
                                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
                            <div>S</div>
                            <div>M</div>
                            <div>T</div>
                            <div>W</div>
                            <div>T</div>
                            <div>F</div>
                            <div>S</div>
                        </div>
                        <div className="grid grid-cols-7 mt-2 text-sm">
                            {days.map((day, dayIdx) => (
                                <div
                                    key={day.toString()}
                                    className={classNames(
                                        dayIdx === 0 && colStartClasses[getDay(day)],
                                        'py-1.5'
                                    )}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setSelectedDay(day)}
                                        className={classNames(
                                            isEqual(day, selectedDay) && 'text-white',
                                            !isEqual(day, selectedDay) &&
                                            isToday(day) &&
                                            'text-red-500',
                                            !isEqual(day, selectedDay) &&
                                            !isToday(day) &&
                                            isSameMonth(day, firstDayCurrentMonth) &&
                                            'text-gray-900',
                                            !isEqual(day, selectedDay) &&
                                            !isToday(day) &&
                                            !isSameMonth(day, firstDayCurrentMonth) &&
                                            'text-gray-400',
                                            isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                                            isEqual(day, selectedDay) &&
                                            !isToday(day) &&
                                            'bg-gray-900',
                                            !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                                            (isEqual(day, selectedDay) || isToday(day)) &&
                                            'font-semibold',
                                            'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                                        )}
                                    >
                                        <time dateTime={format(day, 'yyyy-MM-dd')}>
                                            {format(day, 'd')}
                                        </time>
                                    </button>

                                    <div className="w-1 h-1 mx-auto mt-1">
                                        {meetings.some((meeting) =>
                                            isSameDay(parseISO(meeting.startDatetime), day)
                                        ) && (
                                                <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                                            )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <section className="mt-12 md:mt-0 md:pl-14 p-10">
                        <h2 className="font-semibold text-gray-900">
                            Schedule for{' '}
                            <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                                {format(selectedDay, 'MMM dd, yyy')}
                            </time>
                        </h2>
                        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
                            {selectedDayMeetings.length > 0 ? (
                                selectedDayMeetings.map((meeting) => (
                                    <Meeting meeting={meeting} key={meeting.id} />
                                ))
                            ) : (
                                <p>No events for today.</p>
                            )}
                        </ol>
                    </section>
                </div>
            </div>
        </div>
    )
}

function Meeting({ meeting }) {
    let startDateTime = parseISO(meeting.startDatetime)
    let endDateTime = parseISO(meeting.endDatetime)

    return (
        <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
            <img
                src={meeting.imageUrl}
                alt=""
                className="flex-none w-10 h-10 rounded-full"
            />
            <div className="flex-auto">
                <p className="text-gray-900">{meeting.name}</p>
                <p className="mt-0.5">
                    <time dateTime={meeting.startDatetime}>
                        {format(startDateTime, 'h:mm a')}
                    </time>{' '}
                    -{' '}
                    <time dateTime={meeting.endDatetime}>
                        {format(endDateTime, 'h:mm a')}
                    </time>
                </p>
            </div>
        </li>
    )
}

let colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
]

