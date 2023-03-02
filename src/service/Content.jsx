import React from 'react'

const title = [
  'text-4xl',
  'font-bold',
  'mt-6',
  'lg:text-7x1',
  'lg:p-10',
  'font-oswald'
].join(' ')

const subtitle = [
  'text-2xl',
  'font-bold',
  'mt-3',
  'lg:text-7x1',
  'lg:p-10',
  'font-oswald'
].join(' ')

function Content() {
  return (
    <div class="w-[65vw] m-auto mt-[3vh]">
      <h2  class={title}>Der diabetische Fuss</h2>
      <p class="font-oswald">
        Eine Komplikation von Diabetes. Es verändern sich die 
        Funktionen der Nerven (Neuropathien) und der Gefäße (Mikro- 
        und Makroangiopathien). Durch die Neuropathien verringern sich 
        bzw. fehlen das Gefühl für Hitze, Kälte und Schmerzen und 
        des Tastsinns. Die Anatomie des Fußes kann sich verändern, 
        wodurch auf gewisse Zonen des Fußes ein größerer Druck 
        entsteht. Die Mikro- und Makroangiopathien verringern die 
        Durchblutung des Fußes, auch ischämischer Fuß genannt. 
        Geschwüre sind die Folge beider Pathologien, die, wenn sie 
        nicht adäquat behandelt werden, zur Amputation eines Zehs 
        bis zur Amputation des ganzen Fußes führen können. Die Rolle 
        des Podologen an der Seite der behandelnden Ärzte ist vor 
        allem in der Prävention und Therapie wichtig.
      </p>
      <h2  class={title}>Hyperkeratosen</h2>
      <p class="font-oswald">
        Hyperkeratosen sind durch mechanische Belastungen 
        hervorgerufene Hautveränderungen. Die Zonen geraten unter 
        Druck, mechanischer Reibung und Scherung in Stress und 
        reagieren mit einer Überproduktion von Hornhaut. Die Zonen 
        sind apikal und dorsal an den Zehen, interdigital, am 
        Nagelfalz oder unter den Nägeln sowie plantar am Fuß. 
        Problematisch wird es, wenn sich Läsionen unter der Hornhaut 
        bilden, die vor allem bei vorbelasteten Personen (Diabetiker) 
        zu Geschwüren führen können. Je nach Größe und Art spricht 
        man von Hyperkeratose, Verhornung oder einem Kallus 
        (Hühnerauge).
      </p>
      <h2  class={title}>Die Warze</h2>
      <p class="font-oswald">
        Die häufigste virale Infektion. Zur Infektion kommt es beim 
        Barfußlaufen durch minimale Läsionen in der Haut. Risikozonen 
        sind vor allem warme, feuchte Orte wie Schwimmbäder, Saunen 
        und Duschen. Eine Immunschwäche (Grippe, andere Krankheiten) 
        begünstigen die Infektion. Die Warze kann einzeln oder 
        multiple und an verschiedenen Stellen am Fuß auftreten. Die 
        Form ist polymorph und die Größe variiert. Oft ist die Warze 
        durch eine Hyperkeratose verdeckt.
      </p>
      <h2  class={title}>Mykosen</h2>
      <p class="font-oswald">
        Mykosen treten vor allem durch Dermatophyten auf, aber auch 
        Hefen und Schimmelpilze tragen zur Infektion bei. Symptome 
        sind Abschuppung, Jucken, Rötungen, kleine Einriße in den 
        Zehenzwischenräumen, Bläschen ecc.. Der athletische Fuß ist 
        eine typische Infektion des Trichophyton Rubrum bei Sportlern, 
        begünstigt durch schwitzende Füße und luftundurchlässige 
        Schuhe, und sollte gleich anfangs behandelt werden. Generell 
        gehen die Läsionen von wenigen trockenen Schuppen in den 
        Zehenzwischenräumen mit leichter Rötung und ohne Juckreiz bis 
        hin zur Mazeration der Haut, Ekzemen und Hyperkeratosen.
      </p>
      <h2  class={title}>Dystrophe und deformierte Nägel</h2>
      <p class="font-oswald">
        Ursachen können periphere Durchblutungsstörungen, das 
        Älterwerden, veränderte Zehenstellungen, Druck ecc. sein.
      </p>
      <h3  class={subtitle}>Atrophische Läsionen</h3>
      <p class="font-oswald">
        Sind weniger genetisch bedingt als erworben. Als Folge von 
        Mangelernährung, Infektionen oder Traumen können sich die 
        Nägel verändern, splittern oder völlig lösen. Der Nagel 
        wächst wieder nach, behält aber nur selten seine 
        ursprüngliche Form und Struktur.
      </p>
      <h3  class={subtitle}>Hypertrophe Läsionen</h3>
      <p class="font-oswald">
        kommt vor allem bei Erwachsenen vor. Die Matrix (Nagelwurzel) 
        produziert übermäßig viel Zellen verursacht durch Traumen, 
        Pilzinfektion am Nagel oder andere generelle Veränderungen 
        im Körper (Stoffwechselerkrankungen). Ist nur ein Nagel 
        betroffen, ist es fast sicher traumatischer Natur. Sind alle 
        Nägel betroffen, kann man auf systemische Krankheiten 
        (Arteriosklerose, Diabetes, Psorias, Keratodermie) schließen. 
        Es kann aber auch nur eine Folge des Alterns sein.
      </p>
      <h3  class={subtitle}>Dystrophe Läsionen</h3>
      <p class="font-oswald">
        häufig durch Mangelernährung hervorgerufen, die das normale 
        Wachstum des Nagels verändert. Man sieht es an den 
        Querstreifen, einer gepunkteten, ausgehöhlten oder sich 
        spaltenden Nagelplatte.
      </p>
      <h3  class={subtitle}>Onycholyse</h3>
      <p class="font-oswald">
        Sie ist ein klassisches Zeichen für diverse Pathologien. Sie 
        beginnt meistens am äußeren Nagelrand durch Abheben der 
        Nagelplatte. Darunter bildet sich ein Hohlraum, in dem sich 
        Keratin ansammelt. Das geschieht normalerweise ohne Schmerzen, 
        kann aber eine Infektion von Bakterien und Pilzen nach sich 
        ziehen, welche schmerzhaft sein können. Die Onycholyse kann 
        bis zur völligen Ablösung des Nagels fortschreiten. Ursachen 
        sind periphere Durchblutungsstörungen, Hyper- und 
        Hypothyreose, Schwangerschaft, Syphilis, Psoriasis, atopische 
        Dermatitis, Ekzem, Mykose, sich wiederholende oder ein 
        heftiges Trauma, bakterielle u/o virale Infektionen, chemische 
        Agenzien oder die Sonne.
      </p>
      <h3  class={subtitle}>Onychophose</h3>
      <p class="font-oswald">
        Im Nagelfalz kann sich so viel Hyperkeratose bilden, daß dies 
        zur Entzündung führt und sehr schmerzhaft ist. Ursache sind 
        seitlicher Druck durch die Schuhe, einem schiefstehenden 
        benachbarten Zeh, ein falscher Nagelschnitt, eine gewaltsame 
        unnötige Bearbeitung des Nagelfalzes, eine annormale Struktur 
        des Nagels, ein topisches Ekzem oder auch Psoriasis.
      </p>
      <h3  class={subtitle}>Onychogriphose</h3>
      <p class="font-oswald">
        Eine bedeutende Verdickung mit Deformation des ganzen Nagels. 
        Die Nägel werden zu Krallen. Die Nagelplatte windet sich 
        während des Wachstums in Richtung der anderen Zehen. Ursachen 
        können periphere Vaskulopathien, Ungleichgewicht des 
        Hormonhaushaltes oder Traumen sein.
      </p>
      <h3  class={subtitle}>Onychoatrophie</h3>
      <p class="font-oswald">
        Ein anormales Wachstum der Nagelplatte bis hin zum Verlust 
        derselben. Üblicherweise ist die Nagelplatte sehr dünn und 
        klein, manchmal sind nur Reste vom Nagel oder Narbengewebe 
        vorhanden. Sekundär verursacht durch Entzündungen 
        (Sklerodermie, Lichen planus), peripheren Vaskulopathien, 
        Traumen an der Nagelwurzel oder iatrogen (medizinische, 
        chirurgische oder physikalische Behandlungen).
      </p>
      <h2  class={title}>Subguale Clavus</h2>
      <p class="font-oswald">
        Vermehrte Hornhautbildung unterm Nagel. Am häufigsten bildet er 
        sich am distalen Rand des Großzehennagels durch ständiges 
        Anstoßen der Zehe am Schuh während dem Gehen.
      </p>
      <h2  class={title}>Halux Valgus</h2>
      <p class="font-oswald">
        Der Halux Valgus ist die Abweichung des ersten 
        Mittelfußknochens (Metatarsus) zur Körpermitte hin mit 
        gleichzeitiger Verschiebung der Großzehe zur Fußmitte hin 
        (Valgusstellung). Ursachen dafür können entweder intrinsische 
        Faktoren sein wie genetische Vorbelastung oder anatomische 
        Anomalien der Muskeln, Knochen oder Sehnen oder extrinsische 
        Faktoren wie Schuhe, Traumen, Unfälle etc.. Die Varusstellung 
        des ersten Metatarsus verursacht oft eine Exostose am 
        Metatarsusköpfchen und die Luxation der Sesambeine, während die 
        Großzehe in Pronation und Valgusstellung übergeht.
      </p>
      <h2  class={title}>Hammerzehe</h2>
      <p class="font-oswald">
        Es ist eine Veränderung der Zehenstellung, bei der eine oder 
        mehrere Phalangen der Zehen nach plantar gebeugt werden. 
        Meistens betrifft das die mittleren Zehen und wenn die zweite 
        Zehe länger als die Großzehe ist. Die Hammerzehe hat oft ihren 
        Ursprung in der Jugendzeit durch falsches Schuhwerk (nicht 
        passende oder zu kleine Schuhe). Durch die krumme Zehenstellung 
        entsteht apikal und dorsal ein ständiger Kontakt mit dem Schuh 
        und verursacht dort schmerzende Hyperkeratosen.Anfangs ist die 
        Veränderung meistens schmerzfrei, wird aber mit fortschreitender 
        Veränderung vor allem im Großzehengrundgelenk immer 
        schmerzhafter.
      </p>
    </div>
  )
}

export default Content