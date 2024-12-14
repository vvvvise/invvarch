import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Career } from "../../../models/Career";
import { EducationInfo } from "../../../models/EducationInfo";
import { Individual } from "../../../models/Individual";
import { ProjectInfo } from "../../../models/ProjectInfo";
import { User } from "../../../models/User";
import { CareerEducationInfoArgs } from "./args/CareerEducationInfoArgs";
import { CareerProjectInfoArgs } from "./args/CareerProjectInfoArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Career)
export class CareerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() career: Career, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).career.findUniqueOrThrow({
      where: {
        id: career.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [EducationInfo], {
    nullable: false
  })
  async educationInfo(@TypeGraphQL.Root() career: Career, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CareerEducationInfoArgs): Promise<EducationInfo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).career.findUniqueOrThrow({
      where: {
        id: career.id,
      },
    }).educationInfo({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ProjectInfo], {
    nullable: false
  })
  async projectInfo(@TypeGraphQL.Root() career: Career, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CareerProjectInfoArgs): Promise<ProjectInfo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).career.findUniqueOrThrow({
      where: {
        id: career.id,
      },
    }).projectInfo({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Individual, {
    nullable: false
  })
  async individual(@TypeGraphQL.Root() career: Career, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Individual> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).career.findUniqueOrThrow({
      where: {
        id: career.id,
      },
    }).individual({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
