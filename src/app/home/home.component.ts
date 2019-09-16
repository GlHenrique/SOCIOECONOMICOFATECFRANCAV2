import {Component, OnInit, ElementRef} from '@angular/core';
import {UiToolbarService, UiElement} from 'ng-smn-ui';
import * as XLSX from 'xlsx';
import {ChartOptions, ChartType, ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';
import {NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry} from 'ngx-file-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UiToolbarService]
})
export class HomeComponent implements OnInit {

  upload = true;
  upload1 = false;
  idade: any;
  list: Array<any>;
  list2: Array<any>;

  files: any = [];
  quemestudouFatecTabela: boolean;
  porqueFatecTabela: boolean;
  anoIngresso: {};
  porqueFatec: [];


  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {xAxes: [{}], yAxes: [{ticks: {beginAtZero: true, suggestedMin: 0}}]},
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };


  public cursoLabel: Label[];
  public cursoChartType: ChartType = 'bar';
  public cursoChartLegend = true;
  public cursoChartData: ChartDataSets[];
  public cursoGrafico: boolean;


  public generoChartLabels: Label[];
  public generoChartType: ChartType = 'bar';
  public generoChartLegend = true;
  public generoChartData: ChartDataSets[];
  public generoGrafico: boolean;


  public semestreLabel: Label[];
  public semestreChartType: ChartType = 'bar';
  public semestreChartLegend = true;
  public semestreChartData: ChartDataSets[];
  public semestreGrafico: boolean;

  public periodoLabel: Label[];
  public periodoChartType: ChartType = 'bar';
  public periodoChartLegend = true;
  public periodoChartData: ChartDataSets[];
  public periodoGrafico: boolean;

  public estadoCivilLabel: Label[];
  public estadoCivilChartType: ChartType = 'bar';
  public estadoCivilChartLegend = true;
  public estadoCivilChartData: ChartDataSets[];
  public estadoCivilGrafico: boolean;

  public deficienciaLabel: Label[];
  public deficienciaChartType: ChartType = 'bar';
  public deficienciaChartLegend = true;
  public deficienciaChartData: ChartDataSets[];
  public deficienciaGrafico: boolean;

  public filhosLabel: Label[];
  public filhosChartType: ChartType = 'bar';
  public filhosChartLegend = true;
  public filhosChartData: ChartDataSets[];
  public filhosGrafico: boolean;

  public municipioLabel: Label[];
  public municipioChartType: ChartType = 'bar';
  public municipioChartLegend = true;
  public municipioChartData: ChartDataSets[];
  public municipioGrafico: boolean;

  public locomocaoLabel: Label[];
  public locomocaoChartType: ChartType = 'bar';
  public locomocaoChartLegend = true;
  public locomocaoChartData: ChartDataSets[];
  public locomocaoGrafico: boolean;

  public domicilioLabel: Label[];
  public domicilioChartType: ChartType = 'bar';
  public domicilioChartLegend = true;
  public domicilioChartData: ChartDataSets[];
  public domicilioGrafico: boolean;

  public tempoResidenciaLabel: Label[];
  public tempoResidenciaChartType: ChartType = 'bar';
  public tempoResidenciaChartLegend = true;
  public tempoResidenciaChartData: ChartDataSets[];
  public tempoResidenciaGrafico: boolean;

  public quemMoraLabel: Label[];
  public quemMoraChartType: ChartType = 'bar';
  public quemMoraChartLegend = true;
  public quemMoraChartData: ChartDataSets[];
  public quemMoraGrafico: boolean;

  public quantasPessoasMoramLabel: Label[];
  public quantasPessoasMoramChartType: ChartType = 'bar';
  public quantasPessoasMoramChartLegend = true;
  public quantasPessoasMoramChartData: ChartDataSets[];
  public quantasPessoasMoramGrafico: boolean;

  public quantasPessoasExercemLabel: Label[];
  public quantasPessoasExercemChartType: ChartType = 'bar';
  public quantasPessoasExercemChartLegend = true;
  public quantasPessoasExercemChartData: ChartDataSets[];
  public quantasPessoasExercemGrafico: boolean;

  public possuiInternetLabel: Label[];
  public possuiInternetChartType: ChartType = 'bar';
  public possuiInternetChartLegend = true;
  public possuiInternetChartData: ChartDataSets[];
  public possuiInternetGrafico: boolean;

  public meiosDeInternetLabel: Label[];
  public meiosDeInternetChartType: ChartType = 'bar';
  public meiosDeInternetChartLegend = true;
  public meiosDeInternetChartData: ChartDataSets[];
  public meiosDeInternetGrafico: boolean;

  public somaRendaLabel: Label[];
  public somaRendaChartType: ChartType = 'bar';
  public somaRendaChartLegend = true;
  public somaRendaChartData: ChartDataSets[];
  public somaRendaGrafico: boolean;

  public escolaridadeMaeLabel: Label[];
  public escolaridadeMaeChartType: ChartType = 'bar';
  public escolaridadeMaeChartLegend = true;
  public escolaridadeMaeChartData: ChartDataSets[];
  public escolaridadeMaeGrafico: boolean;

  public escolaridadePaiLabel: Label[];
  public escolaridadePaiChartType: ChartType = 'bar';
  public escolaridadePaiChartLegend = true;
  public escolaridadePaiChartData: ChartDataSets[];
  public escolaridadePaiGrafico: boolean;

  public areaTrabalhoLabel: Label[];
  public areaTrabalhoChartType: ChartType = 'bar';
  public areaTrabalhoChartLegend = true;
  public areaTrabalhoChartData: ChartDataSets[];
  public areaTrabalhoGrafico: boolean;

  public periodoTrabalhoLabel: Label[];
  public periodoTrabalhoChartType: ChartType = 'bar';
  public periodoTrabalhoChartLegend = true;
  public periodoTrabalhoChartData: ChartDataSets[];
  public periodoTrabalhoGrafico: boolean;

  public vidaEscolarLabel: Label[];
  public vidaEscolarChartType: ChartType = 'bar';
  public vidaEscolarChartLegend = true;
  public vidaEscolarChartData: ChartDataSets[];
  public vidaEscolarGrafico: boolean;

  public conhecimentoInformaticaLabel: Label[];
  public conhecimentoInformaticaChartType: ChartType = 'bar';
  public conhecimentoInformaticaChartLegend = true;
  public conhecimentoInformaticaChartData: ChartDataSets[];
  public conhecimentoInformaticaGrafico: boolean;

  public aplicativosLabel: Label[];
  public aplicativosChartType: ChartType = 'bar';
  public aplicativosChartLegend = true;
  public aplicativosChartData: ChartDataSets[];
  public aplicativosGrafico: boolean;

  public idiomasLabel: Label[];
  public idiomasChartType: ChartType = 'bar';
  public idiomasChartLegend = true;
  public idiomasChartData: ChartDataSets[];
  public idiomasGrafico: boolean;

  public estudeiLabel: Label[];
  public estudeiChartType: ChartType = 'bar';
  public estudeiChartLegend = true;
  public estudeiChartData: ChartDataSets[];
  public estudeiGrafico: boolean;

  public idadeLabel: Label[];
  public idadeChartType: ChartType = 'bar';
  public idadeChartLegend = true;
  public idadeChartData: ChartDataSets[];
  public idadeGrafico: boolean;

  constructor(public element: ElementRef) {
  }

  file: File;
  info: any;
  data: any;
  arrayBuffer: any;


  cursoADS = 0;
  cursoGRH = 0;
  cursoGPI = 0;
  periodo: any;
  semestre: any;
  generoM = 0;
  generoF = 0;
  dataNascimento: any;
  deficiencia = 0;
  periodoMatutino = 0;
  periodoNoturno = 0;
  ciclo1 = 0;
  ciclo2 = 0;
  ciclo3 = 0;
  ciclo4 = 0;
  ciclo5 = 0;
  ciclo6 = 0;
  datasDeNascimento = [];
  today = new Date().getFullYear();
  ate21 = 0;
  ate28 = 0;
  ate35 = 0;
  ate50 = 0;
  acima50 = 0;
  idades: {};
  solteiro = 0;
  casado = 0;
  separado = 0;
  divorciado = 0;
  viuvo = 0;
  uniaoEstavel = 0;
  zeroFilhos = 0;
  umFilho = 0;
  doisFilhos = 0;
  tresFilhos = 0;
  quatroFilhos = 0;
  maisDeQuatroFilhos = 0;
  franca = 0;
  cristaisPaulista = 0;
  ibiraci = 0;
  nuporanga = 0;
  orlandia = 0;
  patrocinioPaulista = 0;
  pedregulho = 0;
  ribeiraoCorrente = 0;
  saoJoseDaBelaVista = 0;
  restinga = 0;
  aplicativoTransporte = 0;
  aPe = 0;
  bicicleta = 0;
  carona = 0;
  carroProprio = 0;
  motoPropria = 0;
  onibus = 0;
  vanEscolar = 0;
  alugado = 0;
  arrendado = 0;
  cedido = 0;
  financiado = 0;
  imovelProprio = 0;
  menosUmAno = 0;
  aproximadamenteUmAno = 0;
  aproximadamenteDoisAnos = 0;
  aproximadamenteTresAnos = 0;
  aproximadamenteQuatroAnos = 0;
  aproximadamenteCincoAnos = 0;
  sozinho = 0;
  comMinhaFamilia = 0;
  comFamiliaCompanheiro = 0;
  comEsposo = 0;
  emAbrigo = 0;
  umaPessoa = 0;
  duasPessoas = 0;
  tresPessoas = 0;
  quatroPessoas = 0;
  cincoPessoas = 0;
  seisPessoas = 0;
  umaPessoaExercem = 0;
  duasPessoaExercem = 0;
  tresPessoasExercem = 0;
  quatroPessoasExercem = 0;
  cincoPessoasExercem = 0;
  seisPessoasExercem = 0;
  tenhoInternet = 0;
  naoTenhoInternet = 0;
  meioSalario = 0;
  meioSalarioADoisSalarios = 0;
  doisSalariosATresSalarios = 0;
  tresSalariosACincoSalarios = 0;
  cincoSalariosADezSalarios = 0;
  dezSalariosADezesseteSalarios = 0;
  acimaDezesseteSalarios = 0;
  maeNuncaEstudouENaoSabeLer = 0;
  maeNuncaEstudouMasSabeLer = 0;
  maePrimarioIncompleto = 0;
  maePrimarioCompletoGinasialIncompleto = 0;
  maeGinasialCompletoColegialIncompleto = 0;
  maeColegialCompleto = 0;
  maeUniversitarioIncompleto = 0;
  maeUniversitarioCompleto = 0;

  paiNuncaEstudouENaoSabeLer = 0;
  paiNuncaEstudouMasSabeLer = 0;
  paiPrimarioIncompleto = 0;
  paiPrimarioCompletoGinasialIncompleto = 0;
  paiGinasialCompletoColegialIncompleto = 0;
  paiColegialCompleto = 0;
  paiUniversitarioIncompleto = 0;
  paiUniversitarioCompleto = 0;
  nuncaTrabalhei = 0;
  desempregadoMasJaTrabalheiNaArea = 0;
  trabalhoNaArea = 0;
  trabalhoForaDaArea = 0;
  desempregadoENuncaTrabalheiNaArea = 0;
  manhaOuTarde = 0;
  manhaETarde = 0;
  noite = 0;
  regimeDeTurnos = 0;
  variavel = 0;
  integralmenteEscolaPublica = 0;
  integralmenteEscolaParticular = 0;
  maiorParteEscolaPublica = 0;
  maiorParteEscolaParticular = 0;
  tenhoConhecimentoInformatica = 0;
  naoTenhoConhecimentoInformatica = 0;
  faloIngles = 0;
  faloEspanhol = 0;
  outroIdioma = 0;
  jaEstudei = 0;
  naoEstudei = 0;
  celular = 0;
  notebook = 0;
  computador = 0;
  tablet = 0;
  outroMeio = 0;
  excel = 0;
  windows = 0;
  word = 0;
  powerpoint = 0;
  outroAplicativo = 0;


  ngOnInit() {

  }


  insertFile(event) {
    this.file = event.target.files[0];
    this.Upload();

  }

  Upload() {
    if (this.file !== undefined) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        const data = new Uint8Array(this.arrayBuffer);
        const arr = [];
        for (let i = 0; i !== data.length; ++i) {
          arr[i] = String.fromCharCode(data[i]);
        }
        const bstr = arr.join('');
        const workbook = XLSX.read(bstr, {type: 'binary', cellDates: true});
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        this.info = XLSX.utils.sheet_to_json(worksheet, {raw: true});
        // console.log(this.info);
        //
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.info.length; i++) {

          switch (this.info[i].Curso) {
            case 'Análise e Desenvolvimento de Sistemas (ADS)':
              this.cursoADS++;
              break;
            case 'Gestão de Recursos Humanos (GRH)':
              this.cursoGRH++;
              break;
            case 'Gestão da Produção Industrial (GPI)':
              this.cursoGPI++;
              break;
          }

          switch (this.info[i].Período) {
            case 'Matutino':
              this.periodoMatutino++;
              break;
            case 'Noturno':
              this.periodoNoturno++;
              break;
          }

          switch (this.info[i]['Semestre (Ciclo)']) {
            case '1º Ciclo':
              this.ciclo1++;
              break;
            case '2º Ciclo':
              this.ciclo2++;
              break;
            case '3º Ciclo':
              this.ciclo3++;
              break;
            case '4º Ciclo':
              this.ciclo4++;
              break;
            case '5º Ciclo':
              this.ciclo5++;
              break;
            case '6º Ciclo':
              this.ciclo6++;
              break;
          }

          switch (this.info[i].Gênero) {
            case 'Masculino':
              this.generoM++;
              break;
            case 'Feminino':
              this.generoF++;
              break;
          }
          this.dataNascimento = new Date(this.info[i]['Data de Nascimento']);
          this.dataNascimento = this.dataNascimento.getFullYear();
          this.datasDeNascimento.push(this.dataNascimento);
          // console.log(this.dataNascimento);

          switch (this.info[i]['Estado Civil']) {
            case 'Solteiro':
              this.solteiro++;
              break;
            case 'Casado':
              this.casado++;
              break;
            case 'Separado':
              this.separado++;
              break;
            case 'Divorciado':
              this.divorciado++;
              break;
            case 'Viúvo':
              this.viuvo++;
              break;
            default:
              this.uniaoEstavel++;

          }

          switch (this.info[i]['Você é portador de Deficiências?']) {
            case 'Não':
              this.deficiencia++;
              break;
          }

          switch (this.info[i]['Quantos filhos você possui?']) {
            case 'Nenhum':
              this.zeroFilhos++;
              break;
            case '1':
              this.umFilho++;
              break;
            case '2':
              this.doisFilhos++;
              break;
            case '3':
              this.tresFilhos++;
              break;
            case '4':
              this.quatroFilhos++;
              break;
            default:
              this.maisDeQuatroFilhos++;
          }

          switch (this.info[i]['Município de residência']) {
            case 'Franca':
              this.franca++;
              break;
            case 'Cristais Paulista':
              this.cristaisPaulista++;
              break;
            case 'Ibiraci':
              this.ibiraci++;
              break;
            case 'Nuporanga':
              this.nuporanga++;
              break;
            case 'Orlandia':
              this.orlandia++;
              break;
            case 'Patrocínio Paulista':
              this.patrocinioPaulista++;
              break;
            case 'Pedregulho':
              this.pedregulho++;
              break;
            case 'Ribeirão Corrente':
              this.ribeiraoCorrente++;
              break;
            case 'São José da Bela Vista':
              this.saoJoseDaBelaVista++;
              break;
            case 'Restinga':
              this.restinga++;
              break;

          }

          switch (this.info[i]['Normalmente, como você vai para a Faculdade?']) {
            case 'Aplicativo de transporte (Ex.: Uber, 99 Táxi, Lift)':
              this.aplicativoTransporte++;
              break;
            case 'A pé':
              this.aPe++;
              break;
            case 'Bicicleta':
              this.bicicleta++;
              break;
            case 'Carona':
              this.carona++;
              break;
            case 'Carro próprio':
              this.carroProprio++;
              break;
            case 'Moto própria':
              this.motoPropria++;
              break;
            case 'Ônibus':
              this.onibus++;
              break;
            case 'Van escolar':
              this.vanEscolar++;
              break;
          }

          switch (this.info[i]['Situação do domicílio onde mora.']) {
            case 'Alugado':
              this.alugado++;
              break;
            case 'Arrendado':
              this.arrendado++;
              break;
            case 'Cedido':
              this.cedido++;
              break;
            case 'Financiado':
              this.financiado++;
              break;
            case 'Próprio':
              this.imovelProprio++;
              break;
          }

          switch (this.info[i]['Há aproximadamente quanto tempo você reside neste domicílio?']) {
            case 'Menos de 1 ano':
              this.menosUmAno++;
              break;
            case '1 ano':
              this.aproximadamenteUmAno++;
              break;
            case '2 anos':
              this.aproximadamenteDoisAnos++;
              break;
            case '3 anos':
              this.aproximadamenteTresAnos++;
              break;
            case '4 anos':
              this.aproximadamenteQuatroAnos++;
              break;
            case '5 anos ou mais':
              this.aproximadamenteCincoAnos++;
              break;
          }

          switch (this.info[i]['Com quem você mora?']) {
            case 'Sozinho(a)':
              this.sozinho++;
              break;
            case 'Com minha família (pais e/ou parentes)':
              this.comMinhaFamilia++;
              break;
            case 'Com a família do(a) esposo(a), ou companheiro(a)':
              this.comFamiliaCompanheiro++;
              break;
            case 'Com o(a) esposo(a), companheiro(a)':
              this.comEsposo++;
              break;
            case 'Em abrigo ou equivalente':
              this.emAbrigo++;
              break;

          }

          switch (this.info[i]['Quantas pessoas compõem seu núcleo familiar, incluindo você?']) {
            case '1':
              this.umaPessoa++;
              break;
            case '2':
              this.duasPessoas++;
              break;
            case '3':
              this.tresPessoas++;
              break;
            case '4':
              this.quatroPessoas++;
              break;
            case '5':
              this.cincoPessoas++;
              break;
            case '6 ou mais':
              this.seisPessoas++;
              break;
          }

          switch (this.info[i]['Quantas pessoas de sua família, incluindo você, exercem atividade remunerada?']) {
            case '1':
              this.umaPessoaExercem++;
              break;
            case '2':
              this.duasPessoaExercem++;
              break;
            case '3':
              this.tresPessoasExercem++;
              break;
            case '4':
              this.quatroPessoasExercem++;
              break;
            case '5':
              this.cincoPessoasExercem++;
              break;
            case '6 ou mais':
              this.seisPessoasExercem++;
              break;

          }

          switch (this.info[i]['Você possui acesso a internet em sua residencia?']) {
            case 'Sim':
              this.tenhoInternet++;
              break;
            case 'Não':
              this.naoTenhoInternet++;
              break;
          }

          // console.log(this.info[i]['Caso tenha respondido afirmativamente a questão acima, assinale quais os meios.'].split(';'));
          // if(this.info[i]['Caso tenha respondido afirmativamente a questão acima, assinale quais os meios.'].indexOf('Celular')) {
          //   this.celular++;
          // }
          // if(this.info[i]['Caso tenha respondido afirmativamente a questão acima, assinale quais os meios.'].indexOf('Notebook') !== -1) {
          //   this.notebook++;
          // }
          // if(this.info[i]['Caso tenha respondido afirmativamente a questão acima, assinale quais os meios.'].indexOf('Computador') !== -1) {
          //   this.computador++;
          // }
          // if(this.info[i]['Caso tenha respondido afirmativamente a questão acima, assinale quais os meios.'].indexOf('Tablet') !== -1) {
          //   this.tablet++;
          // }

          switch (this.info[i]['Qual é a soma da renda familiar, das pessoas de sua residência?']) {
            case 'Até 1/2 sálario mínimo':
              this.meioSalario++;
              break;
            case 'De 1/2 salário minimo a 2 salários mínimos':
              this.meioSalarioADoisSalarios++;
              break;
            case 'De 2 salário minimo a 3 salários mínimos':
              this.doisSalariosATresSalarios++;
              break;
            case 'De 3 salário minimo a 5 salários mínimos':
              this.tresSalariosACincoSalarios++;
              break;
            case 'De 5 salário minimo a 10 salários mínimos':
              this.cincoSalariosADezSalarios++;
              break;
            case 'De 10 salário minimo a 17 salários mínimos':
              this.dezSalariosADezesseteSalarios++;
              break;
            case 'Acima de 17 salários mínimos':
              this.acimaDezesseteSalarios++;
              break;
          }

          switch (this.info[i]['Qual o nível de escolaridade de sua mãe?']) {

            case 'Nunca estudou e não sabe ler e escrever':
              this.maeNuncaEstudouENaoSabeLer++;
              break;
            case 'Nunca estudou, mas sabe ler e escrever':
              this.maeNuncaEstudouMasSabeLer++;
              break;
            case 'Nunca estudou, mas sabe ler e escrever':
              this.maeNuncaEstudouMasSabeLer++;
              break;
            case 'Primário incompleto':
              this.maePrimarioIncompleto++;
              break;
            case 'Primário completo/ginasial incompleto':
              this.maePrimarioCompletoGinasialIncompleto++;
              break;
            case 'Ginasial completo/colegial incompleto':
              this.maeGinasialCompletoColegialIncompleto++;
              break;
            case 'Colegial completo':
              this.maeColegialCompleto++;
              break;
            case 'Universitário incompleto':
              this.maeUniversitarioIncompleto++;
              break;
            case 'Universitário completo':
              this.maeUniversitarioCompleto++;
              break;
          }
          switch (this.info[i]['Qual o nível de escolaridade de seu pai?']) {
            case 'Nunca estudou e não sabe ler e escrever':
              this.paiNuncaEstudouENaoSabeLer++;
              break;
            case 'Nunca estudou, mas sabe ler e escrever':
              this.paiNuncaEstudouMasSabeLer++;
              break;
            case 'Nunca estudou, mas sabe ler e escrever':
              this.paiNuncaEstudouMasSabeLer++;
              break;
            case 'Primário incompleto':
              this.paiPrimarioIncompleto++;
              break;
            case 'Primário completo/ginasial incompleto':
              this.paiPrimarioCompletoGinasialIncompleto++;
              break;
            case 'Ginasial completo/colegial incompleto':
              this.paiGinasialCompletoColegialIncompleto++;
              break;
            case 'Colegial completo':
              this.paiColegialCompleto++;
              break;
            case 'Universitário incompleto':
              this.paiUniversitarioIncompleto++;
              break;
            case 'Universitário completo':
              this.paiUniversitarioCompleto++;
              break;
          }

          switch (this.info[i]['Atualmente, em que área você trabalha?']) {
            case 'Nunca trabalhei':
              this.nuncaTrabalhei++;
              break;
            case 'Estou desempregado(a), mas já trabalhei na área do curso que escolhi':
              this.desempregadoMasJaTrabalheiNaArea++;
              break;
            case 'Trabalho na área do curso que escolhi':
              this.trabalhoNaArea++;
              break;
            case 'Trabalho fora da área do curso que escolhi':
              this.trabalhoForaDaArea++;
              break;
            case 'Estou desempregado(a) e nunca trabalhei na área do curso que escolhi':
              this.desempregadoENuncaTrabalheiNaArea++;
              break;

          }

          switch (this.info[i]['Se você trabalha, qual o período?']) {
            case 'Manhã ou tarde':
              this.manhaOuTarde++;
              break;
            case 'Manhã e tarde (integral)':
              this.manhaETarde++;
              break;
            case 'Noite':
              this.noite++;
              break;
            case 'Regime de turnos':
              this.regimeDeTurnos++;
              break;
            case 'Variável':
              this.variavel++;
              break;
          }

          switch (this.info[i]['Durante sua vida escolar, você estudou:']) {
            case 'Integralmente em escola pública federal, estadual ou municipal':
              this.integralmenteEscolaPublica++;
              break;
            case 'Integralmente em escola particular':
              this.integralmenteEscolaParticular++;
              break;
            case 'Maior parte em escola pública':
              this.maiorParteEscolaPublica++;
              break;
            case 'Maior parte em escola particular':
              this.maiorParteEscolaParticular++;
              break;
          }

          switch (this.info[i]['Tem conhecimentos de informática?']) {
            case 'Sim':
              this.tenhoConhecimentoInformatica++;
              break;
            case 'Não':
              this.naoTenhoConhecimentoInformatica++;
              break;
          }


          switch (this.info[i]['Você já estudou na FATEC Franca?']) {
            case 'Sim':
              this.jaEstudei++;
              break;
            default:
              this.naoEstudei++;
              break;
          }
          this.upload = false;
          this.upload1 = true;


        }

        /* BLOCO PARA CAPTURAR IDADE */
        for (let m = 0; m < this.datasDeNascimento.length; m++) {
          if ((this.today - this.datasDeNascimento[m]) <= 21) {
            this.ate21++;
          }
        }
        for (let n = 0; n < this.datasDeNascimento.length; n++) {
          if ((this.today - this.datasDeNascimento[n]) > 22 && (this.today - this.datasDeNascimento[n]) <= 28) {
            this.ate28++;
          }
        }
        for (let r = 0; r < this.datasDeNascimento.length; r++) {
          if ((this.today - this.datasDeNascimento[r]) >= 29 && (this.today - this.datasDeNascimento[r]) <= 35) {
            this.ate35++;
          }
        }
        for (let s = 0; s < this.datasDeNascimento.length; s++) {
          if ((this.today - this.datasDeNascimento[s]) >= 36 && (this.today - this.datasDeNascimento[s]) <= 50) {
            this.ate50++;
          }
        }
        for (let t = 0; t < this.datasDeNascimento.length; t++) {
          if ((this.today - this.datasDeNascimento[t]) > 51) {
            this.acima50++;
          }
        }
        /*---------------------------------------------------------------------------------------------------------------------*/

        for (let j = 0; j < this.info.length; j++) {
          if (this.info[j]['Caso tenha respondido afirmativamente a questão acima, assinale quais os meios.'] !== undefined) {
            if (this.info[j]['Caso tenha respondido afirmativamente a questão acima, assinale quais os meios.'].indexOf('Celular', 'Notebook', 'Computador', 'Tablet') == -1) {
              this.outroMeio++;
            }
            if (this.info[j]['Caso tenha respondido afirmativamente a questão acima, assinale quais os meios.'].indexOf('Celular') !== -1) {
              this.celular++;
            }
            if (this.info[j]['Caso tenha respondido afirmativamente a questão acima, assinale quais os meios.'].indexOf('Notebook') !== -1) {
              this.notebook++;
              //console.log(this.notebook);
            }
            if (this.info[j]['Caso tenha respondido afirmativamente a questão acima, assinale quais os meios.'].indexOf('Computador') !== -1) {
              this.computador++;
              //console.log(this.computador);
            }
            if (this.info[j]['Caso tenha respondido afirmativamente a questão acima, assinale quais os meios.'].indexOf('Tablet') !== -1) {
              this.tablet++;
            }
          }
        }

        for (let k = 0; k < this.info.length; k++) {
          if (this.info[k]['Caso tenha respondido afirmativamente a questão acima, assinale em qual(is) aplicativo(s):'] !== undefined) {
            if (this.info[k]['Caso tenha respondido afirmativamente a questão acima, assinale em qual(is) aplicativo(s):'].indexOf('Excel', 'Windows', 'Word', 'Power Point') == -1) {
              this.outroAplicativo++;
            }
            if (this.info[k]['Caso tenha respondido afirmativamente a questão acima, assinale em qual(is) aplicativo(s):'].indexOf('Excel') !== -1) {
              this.excel++;
            }
            if (this.info[k]['Caso tenha respondido afirmativamente a questão acima, assinale em qual(is) aplicativo(s):'].indexOf('Windows') !== -1) {
              this.windows++;
              //console.log(this.notebook);
            }
            if (this.info[k]['Caso tenha respondido afirmativamente a questão acima, assinale em qual(is) aplicativo(s):'].indexOf('Word') !== -1) {
              this.word++;
            }
            if (this.info[k]['Caso tenha respondido afirmativamente a questão acima, assinale em qual(is) aplicativo(s):'].indexOf('Power Point') !== -1) {
              this.powerpoint++;
            }
          }
        }

        for (let p = 0; p < this.info.length; p++) {
          if (this.info[p]['Tem conhecimento básico em algum idioma além do Português? Qual(is)?'] !== undefined) {
            if (this.info[p]['Tem conhecimento básico em algum idioma além do Português? Qual(is)?'].indexOf('Inglês', 'Espanhol') == -1) {
              this.outroIdioma++;
            }
            if (this.info[p]['Tem conhecimento básico em algum idioma além do Português? Qual(is)?'].indexOf('Inglês') !== -1) {
              this.faloIngles++;
            }
            if (this.info[p]['Tem conhecimento básico em algum idioma além do Português? Qual(is)?'].indexOf('Espanhol') !== -1) {
              this.faloEspanhol++;
            }
          }
        }

        for (let r = 0; r < this.info.length; r++) {
          if (this.info[r]['Se respondeu "Sim" à pergunta anterior, especifique o ano e o curso:'] != undefined) {
            this.anoIngresso = this.info[r]['Se respondeu "Sim" à pergunta anterior, especifique o ano e o curso:'].split(',');

          }
        }
        this.list = [
          {
            curso: this.anoIngresso[0],
            anoIngresso: this.anoIngresso[1]
          }
        ];

        this.list2 = [
          {
            porque: this.info[0]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[1]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[2]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[3]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[4]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[5]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[6]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[7]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[8]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[9]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[10]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[11]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[12]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[13]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[14]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[15]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[16]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[17]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[18]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[19]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[20]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[21]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[22]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[23]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[24]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[25]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[26]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[27]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[28]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[29]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[30]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[31]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[32]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[33]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[34]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[35]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[36]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[37]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[38]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[39]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[40]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[41]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[42]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[43]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[44]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[45]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[46]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[47]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[48]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[49]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[50]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[51]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[52]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[53]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[54]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[55]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[56]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[57]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[58]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[59]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[60]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[61]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[62]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[63]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[64]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[65]['Por que você prestou o Vestibular nesta faculdade?']
          },
          {
            porque: this.info[66]['Por que você prestou o Vestibular nesta faculdade?']
          }
        ];


        this.cursoLabel = ['Curso'];
        this.cursoChartData = [
          {data: [this.cursoADS], label: 'ADS'},
          {data: [this.cursoGPI], label: 'GPI'},
          {data: [this.cursoGRH], label: 'GRH'}
        ];
        this.cursoGrafico = true;

        this.periodoLabel = ['Periodo'];
        this.periodoChartData = [
          {data: [this.periodoMatutino], label: 'Matutino'},
          {data: [this.periodoNoturno], label: 'Noturno'}
        ];
        this.periodoGrafico = true;


        this.generoChartLabels = ['Gênero'];
        this.generoChartData = [
          {data: [this.generoF], label: 'Feminino'},
          {data: [this.generoM], label: 'Masculino'}
        ];
        this.generoGrafico = true;


        this.semestreLabel = ['Semestre (Ciclo)'];
        this.semestreChartData = [
          {data: [this.ciclo1], label: '1º'},
          {data: [this.ciclo2], label: '2º'},
          {data: [this.ciclo3], label: '3º'},
          {data: [this.ciclo4], label: '4º'},
          {data: [this.ciclo5], label: '5º'},
          {data: [this.ciclo6], label: '6º'},
        ];
        this.semestreGrafico = true;


        this.estadoCivilLabel = ['Estado Civil'];
        this.estadoCivilChartData = [
          {data: [this.solteiro], label: 'Solteiro'},
          {data: [this.casado], label: 'Casado'},
          {data: [this.separado], label: 'Separado'},
          {
            data: [this.divorciado], label: 'Divorciado', backgroundColor: 'green',
            borderColor: 'green', hoverBackgroundColor: 'green', hoverBorderColor: 'green'
          },
          {data: [this.viuvo], label: 'Viúvo'},
          {data: [this.uniaoEstavel], label: 'União Estável'},
        ];
        this.estadoCivilGrafico = true;


        this.deficienciaLabel = ['Portador de Deficiência?'];
        this.deficienciaChartData = [
          {data: [0], label: 'Sim'},
          {data: [this.deficiencia], label: 'Não'},
        ];
        this.deficienciaGrafico = true;


        this.filhosLabel = ['Possui filhos?'];
        this.filhosChartData = [
          {data: [this.zeroFilhos], label: 'Nenhum'},
          {data: [this.umFilho], label: '1 filho'},
          {data: [this.doisFilhos], label: '2 filhos'},
          {data: [this.tresFilhos], label: '3 filhos'},
          {data: [this.quatroFilhos], label: '4 filhos'},
          {data: [this.maisDeQuatroFilhos], label: 'Mais de 4 filhos'},
        ];
        this.filhosGrafico = true;


        this.municipioLabel = ['Município de Residência'];
        this.municipioChartData = [
          {data: [this.franca], label: 'Franca'},
          {data: [this.cristaisPaulista], label: 'Cristais Paulista'},
          {data: [this.ibiraci], label: 'Ibiraci'},
          {data: [this.nuporanga], label: 'Nuporanga'},
          {data: [this.orlandia], label: 'Orlândia'},
          {data: [this.patrocinioPaulista], label: 'Patrocínio Paulista'},
          {data: [this.pedregulho], label: 'Pedregulho'},
          {data: [this.ribeiraoCorrente], label: 'Ribeirão Corrente'},
          {data: [this.saoJoseDaBelaVista], label: 'Sao José da Bela Vista'},
          {data: [this.restinga], label: 'Restinga'},
        ];
        this.municipioGrafico = true;

        this.locomocaoLabel = ['Meio de locomoção à faculdade'];
        this.locomocaoChartData = [
          {data: [this.aplicativoTransporte], label: 'Aplicativos de transporte'},
          {data: [this.aPe], label: 'A pé'},
          {data: [this.bicicleta], label: 'Bicicleta'},
          {data: [this.carona], label: 'Carona'},
          {data: [this.carroProprio], label: 'Carro próprio'},
          {data: [this.motoPropria], label: 'Moto própria'},
          {data: [this.onibus], label: 'Ônibus'},
          {data: [this.vanEscolar], label: 'Vã Escolar'}
        ];
        this.locomocaoGrafico = true;


        this.domicilioLabel = ['Situação de domicílio'];
        this.domicilioChartData = [
          {data: [this.alugado], label: 'Alugado'},
          {data: [this.arrendado], label: 'Arrendado'},
          {data: [this.cedido], label: 'Cedido'},
          {data: [this.financiado], label: 'Financiado'},
          {data: [this.imovelProprio], label: 'Imóvel'}
        ];
        this.domicilioGrafico = true;


        this.tempoResidenciaLabel = ['Tempo de residência'];
        this.tempoResidenciaChartData = [
          {data: [this.menosUmAno], label: 'Menos de um ano'},
          {data: [this.aproximadamenteUmAno], label: '1 anos'},
          {data: [this.aproximadamenteDoisAnos], label: '2 anos'},
          {data: [this.aproximadamenteTresAnos], label: '3 anos'},
          {data: [this.aproximadamenteQuatroAnos], label: '4 anos'},
          {data: [this.aproximadamenteCincoAnos], label: '5 anos ou mais'}
        ];
        this.tempoResidenciaGrafico = true;


        this.quemMoraLabel = ['Com quem mora?'];
        this.quemMoraChartData = [
          {data: [this.sozinho], label: 'Sozinho'},
          {data: [this.comMinhaFamilia], label: 'Com minha família (pais e/ou parentes)'},
          {data: [this.comFamiliaCompanheiro], label: 'Com a família do(a) esposo(a), ou companheiro(a)'},
          {data: [this.comEsposo], label: 'Com esposo(a), companheiro(a)'},
          {data: [this.emAbrigo], label: 'Abrigo ou equivalente'}
        ];
        this.quemMoraGrafico = true;


        this.quantasPessoasMoramLabel = ['Quantas compõem seu núcleo familiar'];
        this.quantasPessoasMoramChartData = [
          {data: [this.umaPessoa], label: '1 pessoa'},
          {data: [this.duasPessoas], label: '2 pessoas'},
          {data: [this.tresPessoas], label: '3 pessoas'},
          {data: [this.quatroPessoas], label: '4 pessoas'},
          {data: [this.cincoPessoas], label: '5 pessoas'},
          {data: [this.seisPessoas], label: '6 pessoa ou mais'},
        ];
        this.quantasPessoasMoramGrafico = true;


        this.quantasPessoasExercemLabel = ['Quantas têm atividade remunerada'];
        this.quantasPessoasExercemChartData = [
          {data: [this.umaPessoaExercem], label: '1 pessoa'},
          {data: [this.duasPessoaExercem], label: '2 pessoas'},
          {data: [this.tresPessoasExercem], label: '3 pessoas'},
          {data: [this.quatroPessoasExercem], label: '4 pessoas'},
          {data: [this.cincoPessoasExercem], label: '5 pessoas'},
          {data: [this.seisPessoasExercem], label: '6 pessoa ou mais'},
        ];
        this.quantasPessoasExercemGrafico = true;


        this.possuiInternetLabel = ['Você possui acesso a internet em sua residencia?'];
        this.possuiInternetChartData = [
          {data: [this.tenhoInternet], label: 'Possui Internet'},
          {data: [this.naoTenhoInternet], label: 'Não possui internet'}
        ];
        this.possuiInternetGrafico = true;


        this.meiosDeInternetLabel = ['Quais os meios de acesso internet?'];
        this.meiosDeInternetChartData = [
          {data: [this.celular], label: 'Celular'},
          {data: [this.notebook], label: 'Notebook'},
          {data: [this.computador], label: 'Computador'},
          {data: [this.tablet], label: 'Tablet'},
          {data: [this.outroMeio], label: 'Outros'}
        ];
        this.meiosDeInternetGrafico = true;

        this.somaRendaLabel = ['Soma da renda familiar'];
        this.somaRendaChartData = [
          {data: [this.meioSalario], label: '1/2 Salário'},
          {data: [this.meioSalarioADoisSalarios], label: '1/2 Salário a 2 Salários'},
          {data: [this.doisSalariosATresSalarios], label: '2 Salários a 3 Salários'},
          {data: [this.tresSalariosACincoSalarios], label: '3 Salários a 5 Salários'},
          {data: [this.cincoSalariosADezSalarios], label: '5 Salários a 10 Salários'},
          {data: [this.dezSalariosADezesseteSalarios], label: '10 Salários a 17 Salários'},
          {data: [this.acimaDezesseteSalarios], label: 'Acima de 17 Salários'}
        ];
        this.somaRendaGrafico = true;

        this.escolaridadeMaeLabel = ['Nível de escolaridade da mãe'];
        this.escolaridadeMaeChartData = [
          {data: [this.maeNuncaEstudouENaoSabeLer], label: 'Não sabe ler e escrever'},
          {data: [this.maeNuncaEstudouMasSabeLer], label: 'Sabe ler e escrever'},
          {data: [this.maePrimarioIncompleto], label: 'Primário incompleto'},
          {data: [this.maePrimarioCompletoGinasialIncompleto], label: 'Primário completo/ginasial incompleto'},
          {data: [this.maeGinasialCompletoColegialIncompleto], label: 'Ginasial completo/colegial incompleto'},
          {data: [this.maeColegialCompleto], label: 'Colegial completo'},
          {data: [this.maeUniversitarioIncompleto], label: 'Universitário incompleto'},
          {data: [this.maeUniversitarioCompleto], label: 'Universitário Completo'}
        ];
        this.escolaridadeMaeGrafico = true;

        this.escolaridadePaiLabel = ['Nível de escolaridade do pai'];
        this.escolaridadePaiChartData = [
          {data: [this.paiNuncaEstudouENaoSabeLer], label: 'Não sabe ler e escrever'},
          {data: [this.paiNuncaEstudouMasSabeLer], label: 'Sabe ler e escrever'},
          {data: [this.paiPrimarioIncompleto], label: 'Primário incompleto'},
          {data: [this.paiPrimarioCompletoGinasialIncompleto], label: 'Primário completo/ginasial incompleto'},
          {data: [this.paiGinasialCompletoColegialIncompleto], label: 'Ginasial completo/colegial incompleto'},
          {data: [this.paiColegialCompleto], label: 'Colegial completo'},
          {data: [this.paiUniversitarioIncompleto], label: 'Universitário incompleto'},
          {data: [this.paiUniversitarioCompleto], label: 'Universitário Completo'}
        ];
        this.escolaridadePaiGrafico = true;

        this.areaTrabalhoLabel = ['Atualmente, em que área você trabalha?'];
        this.areaTrabalhoChartData = [
          {data: [this.nuncaTrabalhei], label: 'Nunca trabalhei'},
          {data: [this.desempregadoMasJaTrabalheiNaArea], label: 'Estou desempregado(a), mas já trabalhei na área do curso que escolhi'},
          {data: [this.trabalhoNaArea], label: 'Trabalho na área do curso que escolhi'},
          {data: [this.trabalhoForaDaArea], label: 'Trabalho fora da área do curso que escolhi'},
          {data: [this.desempregadoENuncaTrabalheiNaArea], label: 'Estou desempregado(a) e nunca trabalhei na área do curso que escolhi'}
        ];
        this.areaTrabalhoGrafico = true;

        this.periodoTrabalhoLabel = ['Se trabalha, qual o período?'];
        this.periodoTrabalhoChartData = [
          {data: [this.manhaOuTarde], label: 'Manhã ou tarde'},
          {data: [this.manhaETarde], label: 'Manhã e tarde (integral)'},
          {data: [this.noite], label: 'Noite'},
          {data: [this.regimeDeTurnos], label: 'Regime de turnos'},
          {data: [this.variavel], label: 'Variável'}
        ];
        this.periodoTrabalhoGrafico = true;

        this.vidaEscolarLabel = ['Vida Escolar'];
        this.vidaEscolarChartData = [
          {data: [this.integralmenteEscolaPublica], label: 'Integralmente em escola pública federal, estadual ou municipal'},
          {data: [this.integralmenteEscolaParticular], label: 'Integralmente em escola particular'},
          {data: [this.maiorParteEscolaPublica], label: 'Maior parte em escola pública'},
          {data: [this.maiorParteEscolaParticular], label: 'Maior parte em escola particular'}
        ];
        this.vidaEscolarGrafico = true;

        this.conhecimentoInformaticaLabel = ['Conhecimento Informática'];
        this.conhecimentoInformaticaChartData = [
          {data: [this.tenhoConhecimentoInformatica], label: 'Possui conhecimento em informática'},
          {data: [this.naoTenhoConhecimentoInformatica], label: 'Não possui conhecimento em informática'}
        ];
        this.conhecimentoInformaticaGrafico = true;

        this.aplicativosLabel = ['Aplicativos de domínio'];
        this.aplicativosChartData = [
          {data: [this.excel], label: 'Excel'},
          {data: [this.windows], label: 'Windows'},
          {data: [this.word], label: 'Word'},
          {data: [this.powerpoint], label: 'Power Point'},
          {data: [this.outroAplicativo], label: 'Outros'},
        ];
        this.aplicativosGrafico = true;

        this.idiomasLabel = ['Idioma'];
        this.idiomasChartData = [
          {data: [this.faloIngles], label: 'Inglês'},
          {data: [this.faloEspanhol], label: 'Espanhol'},
          {data: [this.outroIdioma], label: 'Outros'}
        ];
        this.idiomasGrafico = true;

        this.estudeiLabel = ['Já estudaram, na FATEC'];
        this.estudeiChartData = [
          {data: [this.jaEstudei], label: 'Já estudaram'},
          {data: [this.naoEstudei], label: 'Não estudaram na FATEC'}
        ];
        this.estudeiGrafico = true;

        this.idadeLabel = ['Idade'];
        this.idadeChartData = [
          {data: [this.ate21], label: 'Até 21 anos'},
          {data: [this.ate28], label: 'Até 28 anos'},
          {data: [this.ate35], label: 'Até 35 anos'},
          {data: [this.ate50], label: 'Até 50 anos'},
          {data: [this.acima50], label: 'Acima de 50 anos'},
        ];
        this.idadeGrafico = true;
        this.quemestudouFatecTabela = true;
        this.porqueFatecTabela = true;

      };
      // tslint:disable-next-line:prefer-for-of

      fileReader.readAsArrayBuffer(this.file);
    }
    ;


  }


}
