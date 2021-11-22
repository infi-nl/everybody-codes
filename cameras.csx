var name = Args[0];

PrintCameras(name);

private void PrintCameras(string name)
{
    using var reader = new StreamReader(@"data/cameras-defb.csv");
    while (!reader.EndOfStream)
    {
        var line = reader.ReadLine();
        var values = line.Split(';');

        if (values.Length < 3 || !int.TryParse(values[1].Replace(".", ""), out _))
        {
            continue;
        }

        var numberAsString = values[0].Replace(' ', '-').Split('-')[2];
        var cameraNumber = int.TryParse(numberAsString, out var num) ? num : 0;
        var cameraName = values[0];
        var latitude = values[1];
        var longitude = values[2];

        if (cameraName.Contains(name))
        {
            Console.WriteLine($"{cameraNumber} | {cameraName} | {latitude} | {longitude}");
        }
    }
}
