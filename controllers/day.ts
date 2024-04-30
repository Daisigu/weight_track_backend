import Day, {IDay} from '../models/day';

async function createDay(req: Request, res: Response): Promise<IDay | undefined> {
    try {
        const {date, weight} = req.body as unknown as Pick<IDay, 'weight' | 'date'>;
        const newDay: IDay = await Day.create({date, weight});
        // @ts-ignore
        return res.status(200).json(newDay);
    } catch (error) {
        // @ts-ignore
        res.status(400).json({error: error.message});
    }
}

async function getDays(req: Request, res: Response): Promise<any | null | undefined> {
    try {
        // @ts-ignore
        return res.status(200).json(await Day.find());
    } catch (error) {
        // @ts-ignore
        res.status(400).json({error: error.message});
    }
}

async function updateDay(req: Request, res: Response): Promise<any | null | undefined> {
    try {
        const {_id, date, weight, isCompleted} = req.body as unknown as IDay;
        const updatedDay: IDay | null = await Day.findByIdAndUpdate(_id, {date, weight, isCompleted}, {new: true});
        // @ts-ignore
        return res.status(200).json(updatedDay);
    } catch (error) {
        // @ts-ignore
        res.status(400).json({error: error.message});
    }
}

export {createDay, getDays, updateDay};
